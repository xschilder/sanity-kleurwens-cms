// schemaTypes/offerTemplate.ts

export default {
  name: 'offerTemplate',
  title: 'Szablon treści oferty (prefabrykaty bloków)',
  type: 'document',
  __experimental_actions: ['update', 'publish'], // singleton – tylko edycja, bez tworzenia/usuwania

  fields: [
    // 1. Powitanie + wstęp
    {
    name: 'wstep_zewnetrzne',
    title: 'Wstęp – malowanie zewnętrzne',
    type: 'text',
    rows: 8,
    initialValue: `Geachte {imie},

Met veel plezier bieden wij u offerte aan voor het buitenschilderwerk aan de {adres}.
Onze offerte is gebaseerd op de inspectie van {data_inspekcji}.`,
  },
	
	{
    name: 'wstep_wewnetrzne',
    title: 'Wstęp – malowanie wewnętrzne',
    type: 'text',
    rows: 8,
    initialValue: `Geachte {imie},

Met veel plezier bieden wij u offerte aan voor het binnenschilderwerk in de {adres}.
Onze offerte is gebaseerd op de inspectie van {data_inspekcji}.`,
  },

    // 2. Specyficzne ustalenia z inspekcji
    {
      name: 'specyficzne_ustalenia',
      title: 'Specyficzne ustalenia z inspekcji',
      type: 'text',
      rows: 10,
      initialValue: `Algemene staat: {stan_ogolny}.
{konkretne_elementy_z_leadu}
Uitbouw woonkamer (6x4 m): nieuw pleisterwerk, zeer zuigend.
Zwarte muren: 2 kleine muren (4x2,5 m) nieuw...`,
      description: 'Użyj placeholderów: {stan_ogolny}, {konkretne_elementy_z_leadu}',
    },

    // 3. Przedpłata (treść bloku – włączana warunkowo w UI)
    {
      name: 'przedplata',
      title: 'Treść bloku przedpłaty',
      type: 'text',
      rows: 6,
      initialValue: `Voor de start van de werkzaamheden vragen wij een aanbetaling van €{przedplata_kwota} (inclusief BTW) voor de aanschaf van hoogwaardige materialen, zoals Sigma Primer of Karaat, Veveo Verf, 2K-epoxy, hout en kitten. Deze aanbetaling wordt verrekend met de eindfactuur.`,
      description: 'Użyj placeholderów: {przedplata_kwota}',
    },

    // 4. Gwarancje + wyłączenia
    {
      name: 'gwarancja',
      title: 'Gwarancje i wyłączenia',
      type: 'text',
      rows: 12,
      initialValue: `Als u kiest voor ons bedrijf staan wij altijd garant voor:
· Een zorgeloze uitvoering volgens een vaste planning en met eigen ervaren vaklieden
· Toepassing van hoogwaardige verfproducten
· De kwaliteit van ons werk. U krijgt garantie {gwarancja_lat} jaar op loslaten of afbladderen van de verflaag (bij normaal gebruik).

Belangrijke uitsluitingen van de garantie:
o Normale slijtage
o Mechanische beschadigingen (meubels, kinderen, kattenkrabben etc.)
o Vocht / schimmel door slechte ventilatie of lekkages
o Verkleuring / vergeling bij zeer donkere kleuren (als niet afgesproken)`,
      description: 'Użyj placeholderów: {gwarancja_lat}',
    },

    // 5. Advies / Porady konserwacyjne
    {
      name: 'advies_onderhoud',
      title: 'Advies / Porady konserwacyjne',
      type: 'text',
      rows: 10,
      initialValue: `Advies Schilderwerk Onderhoud Binnen:

Alle oppervlakken: lichte schuren waar nodig (max. 20–25 m² op nieuwe pleister en reparaties), primer aanbrengen voor betere hechting + 2 lagen verf.
Voorbereiding en beveiliging:
· Vloer: stucloper (4 rollen, 220 g/m²) op de gelijkmatige en schone structuurtegelvloer.
· Ramen en plinten: folie en tape.
· Meubels: zoals afgesproken, verplaatsen en afdekken doen we samen, daarom reken ik hiervoor een vaste bijdrage van €100 (incl. BTW).`,
      description: 'Możesz dodać placeholder {konkretne_zalecenia} jeśli chcesz',
    },

    // 6. Werkplanning / Plan prac
    {
      name: 'werkplanning',
      title: 'Plan prac (Werkplanning)',
      type: 'text',
      rows: 8,
      initialValue: `Werkplanning:

Dag 1: afplakken en beveiligen (stucloper, folie, tape).
Dag 2: reparaties (vullen, schuren, primer) + drogen.
Dag 3: spuiten
Dag 4: 2 lagen rollen + opruimen.`,
    },

    // 7. Warianty cenowe + rekomendacja
    {
      name: 'warianty',
      title: 'Warianty cenowe + rekomendacja',
      type: 'text',
      rows: 14,
      initialValue: `Versie 1 - Geschatte prijs alles airless spuiten (incl. BTW): € {cena_min_1} – € {cena_max_1}
Arbeid: ca. € {robocizna}
Materialen: ca. € {materialy}

Versie 2 - Geschatte prijs muren rollen + plafond spuiten (incl. BTW): € {cena_min_2} – € {cena_max_2}
Arbeid: ca. € {robocizna}
Materialen: ca. € {materialy}

Recommendatie: Na overleg bieden wij het volledige schilderwerk aan voor € {rekomendowana_cena} (incl. {vat}% BTW)`,
      description: 'Użyj placeholderów: {cena_min_1}, {cena_max_1}, {robocizna}, {materialy}, {rekomendowana_cena}, {vat}',
    },

    // 8. Podsumowanie powierzchni (opcjonalny blok)
    {
      name: 'powierzchnia',
      title: 'Podsumowanie powierzchni',
      type: 'text',
      rows: 8,
      initialValue: `Geschatte oppervlakte:
· 2 zwarte muren openspace: 2 × (4 m × 2,5 m) = 20 m²
· Zwarte muur woonkamer: 1 × (10 m × 2,5 m) = 25 m²
· Zwarte muur keuken: 1 × (3 m × 2,5 m) = 7,5 m²
Totaal zwarte muren: ca. 52,5 m²
· Plafond woonkamer: 6 m × 10 m + kolommen ca. 5 m² = 65 m²
Totaal geschat: ca. {calkowita_powierzchnia} m²`,
      description: 'Użyj placeholderów: {calkowita_powierzchnia}',
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
    prepare() {
      return {
        title: 'Szablon treści oferty (singleton)',
      };
    },
  },
};