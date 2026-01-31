// scripts/seed.js
const { createClient } = require('@sanity/client');
const fs = require('fs');

const client = createClient({
  projectId: '9s59sp8p',
  dataset: 'production',
  apiVersion: '2025-01-01',
  token: process.env.SANITY_WRITE_TOKEN || 'skwiXeGVnw6rSxAq1MfmH1hFgGDHWT32JUk7PtMmc6XG2mC2018hTuoiDe5f1Q82UtkqXuzZ9fDjk4zZTBIq1xkhnQ8lKFsJcXYSnm2dGx8y4mwVxiKr3aLZueKeo8cIG0ZfhBqgx0Sur6wHVdzOvtPnMkxTRcnaVTEqxhidZovBNXtNcX1M',  // ← ZMIEŃ NA PRAWIDŁOWY
});
// Dodaj na górze pliku

const crypto = require('crypto');

function generateKey() {
  return crypto.randomBytes(8).toString('hex');
}


// analogicznie dla answer w FAQ
async function importFile(fileName) {
  const path = `./${fileName}`;
  if (!fs.existsSync(path)) {
    console.error(`Plik ${path} nie istnieje!`);
    return;
  }

  const content = fs.readFileSync(path, 'utf-8').trim();
  const lines = content.split('\n').filter(line => line.trim() !== '');

  console.log(`Importuję ${lines.length} dokumentów z ${fileName}...`);

  for (const line of lines) {
    try {
      const doc = JSON.parse(line);
      if (!doc._id) {
        console.warn(`Brak _id – pomijam linię: ${line.substring(0, 50)}...`);
        continue;
      }
	  // W funkcji importFile – przed createIfNotExists

	  if (Array.isArray(doc.highlights)) {
		doc.highlights = doc.highlights.map((item, i) => ({
		_key: generateKey(),
		value: item
		}));
	  }

	  if (Array.isArray(doc.mainText)) {
		doc.mainText = doc.mainText.map((block, i) => ({
		...block,
		_key: generateKey(),
		children: block.children?.map(child => ({
		...child,
		_key: generateKey()
		}))
	}));
}
      const result = await client.createIfNotExists(doc);
      console.log(`OK → ${doc._type} | ${result._id}`);
    } catch (err) {
      console.error(`Błąd w pliku ${fileName}, linia: ${line.substring(0, 100)}...`);
      console.error(err.message);
    }
  }
}

// Główna funkcja – natychmiast wywołana
(async function main() {
  console.log('=== START SEED ===');
  
  await importFile('about.ndjson');
  await importFile('coll.ndjson');
  await importFile('faq.ndjson');
  
  console.log('=== KONIEC ===');
})().catch(err => {
  console.error('Błąd krytyczny skryptu:', err);
  process.exit(1);
});