// schemas/offerTemplate.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'offerTemplate',
  title: 'Szablon treści oferty (prefabrykaty bloków)',
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      title: 'Język',
      type: 'string',
      options: {
        list: [
          { title: 'Nederlands', value: 'nl' },
          { title: 'English', value: 'en' },
          { title: 'Polski', value: 'pl' },
        ],
      },
      initialValue: 'nl',
      validation: Rule => Rule.required(),
    }),

    // 1. Wstęp
    defineField({
      name: 'wstep_zewnetrzne',
      title: '1. Wstęp – malowanie ZEWNĘTRZNE',
      type: 'text',
      rows: 8,
      description: 'Placeholdery: {imie}, {adres}, {data_inspekcji}',
    }),
    defineField({
      name: 'wstep_wewnetrzne',
      title: '1. Wstęp – malowanie WEWNĘTRZNE',
      type: 'text',
      rows: 8,
      description: 'Placeholdery: {imie}, {adres}, {data_inspekcji}',
    }),

    // 2. Ustalenia
    defineField({
      name: 'specyficzne_ustalenia',
      title: '2. Specyficzne ustalenia z inspekcji (wspólne)',
      type: 'text',
      rows: 12,
      description: 'Placeholdery: {stan_ogolny}, {konkretne_elementy_z_leadu}, {extra_notes}',
    }),

    // 3. Porady / Advies
    defineField({
      name: 'advies_onderhoud_zewnetrzne',
      title: '3. Advies / Porady konserwacyjne – ZEWNĘTRZNE',
      type: 'text',
      rows: 12,
      description: 'Placeholder: {konkretne_zalecenia}, {gwarancja_lat}',
    }),
    defineField({
      name: 'advies_onderhoud_wewnetrzne',
      title: '3. Advies / Porady konserwacyjne – WEWNĘTRZNE',
      type: 'text',
      rows: 10,
      description: 'Placeholder: {konkretne_zalecenia}, {gwarancja_lat}',
    }),

    // 4. Gwarancje
    defineField({
      name: 'gwarancja_zewnetrzne',
      title: '4. Gwarancje i wyłączenia – ZEWNĘTRZNE',
      type: 'text',
      rows: 12,
      description: 'Placeholder: {gwarancja_lat}',
    }),
    defineField({
      name: 'gwarancja_wewnetrzne',
      title: '4. Gwarancje i wyłączenia – WEWNĘTRZNE',
      type: 'text',
      rows: 10,
      description: 'Placeholder: {gwarancja_lat}',
    }),

    // 5. Plan prac
    defineField({
      name: 'werkplanning_zewnetrzne',
      title: '5. Plan prac – ZEWNĘTRZNE',
      type: 'text',
      rows: 14,
      description: 'Placeholdery: {dni}, {godziny}, {osoby}',
    }),
    defineField({
      name: 'werkplanning_wewnetrzne',
      title: '5. Plan prac – WEWNĘTRZNE',
      type: 'text',
      rows: 12,
      description: 'Placeholdery: {dni}, {godziny}, {osoby}',
    }),

    // 6. Warianty
    defineField({
      name: 'warianty_zewnetrzne',
      title: '6. Warianty cenowe + rekomendacja – ZEWNĘTRZNE',
      type: 'text',
      rows: 14,
      description: 'Placeholdery: {low}, {high}, {vat}, {offer_valid_until}',
    }),
    defineField({
      name: 'warianty_wewnetrzne',
      title: '6. Warianty cenowe + rekomendacja – WEWNĘTRZNE',
      type: 'text',
      rows: 12,
      description: 'Placeholdery: {low}, {high}, {vat}, {offer_valid_until}',
    }),

    // 7. Przedpłata
    defineField({
      name: 'przedplata_zewnetrzne',
      title: '7. Przedpłata – ZEWNĘTRZNE',
      type: 'text',
      rows: 6,
      description: 'Placeholder: {przedplata_kwota}',
    }),
    defineField({
      name: 'przedplata_wewnetrzne',
      title: '7. Przedpłata – WEWNĘTRZNE',
      type: 'text',
      rows: 6,
      description: 'Placeholder: {przedplata_kwota}',
    }),

    // 8. Podsumowanie powierzchni
    defineField({
      name: 'powierzchnia_zewnetrzne',
      title: '8. Podsumowanie powierzchni – ZEWNĘTRZNE',
      type: 'text',
      rows: 8,
      description: 'Placeholdery: {calkowita_powierzchnia}, {konkretne_elementy_z_leadu}',
    }),
    defineField({
      name: 'powierzchnia_wewnetrzne',
      title: '8. Podsumowanie powierzchni – WEWNĘTRZNE',
      type: 'text',
      rows: 8,
      description: 'Placeholdery: {calkowita_powierzchnia}, {konkretne_elementy_z_leadu}',
    }),
  ],

  preview: {
    select: { language: 'language' },
    prepare({ language }) {
      return { title: `Szablon oferty – ${language?.toUpperCase() || 'NL'}` }
    },
  },
})