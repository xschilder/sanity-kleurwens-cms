// scripts/seed.js
const { createClient } = require('@sanity/client');
const fs = require('fs');
const crypto = require('crypto');

// Ładujemy z .env – BEZ HARDCODOWANIA
const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || 'production';
const apiVersion = process.env.SANITY_API_VERSION || '2025-01-01';
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId || !token) {
  console.error('Brakujące zmienne środowiskowe: SANITY_PROJECT_ID i/lub SANITY_WRITE_TOKEN');
  console.error('Dodaj je do pliku .env i uruchom ponownie');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false, // dla zapisu lepiej false
});

function generateKey(prefix = 'key') {
  return `${prefix}-${crypto.randomBytes(6).toString('hex')}`;
}

// reszta funkcji bez zmian – importFile, main itd.
async function importFile(fileName) {
  const path = `./${fileName}`;
  if (!fs.existsSync(path)) {
    console.error(`Plik ${path} nie istnieje!`);
    return;
  }

  console.log(`Odczytuję plik: ${fileName}`);

  let content;
  try {
    content = fs.readFileSync(path, 'utf-8').trim();
  } catch (err) {
    console.error(`Błąd odczytu pliku ${fileName}:`, err.message);
    return;
  }

  const lines = content.split('\n').filter(line => line.trim() !== '');

  console.log(`Znaleziono ${lines.length} dokumentów w ${fileName}`);

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    let doc;

    try {
      doc = JSON.parse(line);
    } catch (err) {
      console.error(`Błąd parsowania JSON w pliku ${fileName}, linia ${i+1}:`);
      console.error('Linia:', line.substring(0, 150) + (line.length > 150 ? '...' : ''));
      console.error('Komunikat:', err.message);
      continue;
    }

    try {
      if (!doc._id) {
        doc._id = `${doc._type || 'doc'}-${generateKey('auto')}`;
        console.warn(`Dodano automatyczne _id: ${doc._id}`);
      }

      // Dodawanie _key do tablic (highlights, mainText, answer itp.)
      if (Array.isArray(doc.highlights)) {
        doc.highlights = doc.highlights.map((item, idx) => ({
          _key: generateKey('hl'),
          value: typeof item === 'string' ? item : (item.value || item)
        }));
      }

      if (Array.isArray(doc.mainText)) {
        doc.mainText = doc.mainText.map((block, idx) => ({
          ...block,
          _key: generateKey('block'),
          children: block.children?.map(child => ({
            ...child,
            _key: generateKey('span')
          }))
        }));
      }

      if (Array.isArray(doc.answer)) {
        doc.answer = doc.answer.map((block, idx) => ({
          ...block,
          _key: generateKey('answer'),
          children: block.children?.map(child => ({
            ...child,
            _key: generateKey('ans-span')
          }))
        }));
      }

      const result = await client.createIfNotExists(doc);
      console.log(`OK → ${doc._type} | ${result._id}`);
    } catch (err) {
      console.error(`Błąd przetwarzania dokumentu w pliku ${fileName}, linia ${i+1}:`);
      console.error('Komunikat:', err.message);
    }
  }
}

(async function main() {
  console.log('=== START IMPORTU ===');

  await importFile('aboutBlock.ndjson');
  await importFile('collaborationBlock.ndjson');
  await importFile('faqItem.ndjson');

  console.log('=== IMPORT ZAKOŃCZONY ===');
})().catch(err => {
  console.error('Błąd krytyczny skryptu:', err);
  process.exit(1);
});