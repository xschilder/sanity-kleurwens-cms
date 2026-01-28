// sanity/schemaTypes/privacyPolicy.ts

import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'privacyPolicy',
  title: 'Polityka prywatności',
  type: 'document',
  // singleton – chcemy tylko jeden taki dokument
  fields: [
    defineField({
      name: 'title',
      title: 'Tytuł (główny – fallback)',
      type: 'string',
      initialValue: 'Polityka prywatności',
      validation: Rule => Rule.required(),
      readOnly: true, // lepiej edytować wersje językowe poniżej
    }),

    // Tytuły w poszczególnych językach
    defineField({
      name: 'title_nl',
      title: 'Tytuł (NL)',
      type: 'string',
      initialValue: 'Privacybeleid',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'title_en',
      title: 'Tytuł (EN)',
      type: 'string',
      initialValue: 'Privacy Policy',
    }),
    defineField({
      name: 'title_pl',
      title: 'Tytuł (PL)',
      type: 'string',
      initialValue: 'Polityka prywatności',
    }),

    // Treść główna – Portable Text (bogaty tekst z nagłówkami, listami, linkami)
    defineField({
      name: 'body_nl',
      title: 'Treść główna (NL)',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Cytat', value: 'blockquote' },
          ],
          lists: [
            { title: 'Lista punktowana', value: 'bullet' },
            { title: 'Lista numerowana', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Pogrubienie', value: 'strong' },
              { title: 'Kursywa', value: 'em' },
              { title: 'Podkreślenie', value: 'underline' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: Rule => Rule.uri({
                      scheme: ['http', 'https', 'mailto', 'tel'],
                    }),
                  },
                  {
                    title: 'Otwórz w nowej karcie',
                    name: 'blank',
                    type: 'boolean',
                  },
                ],
              },
            ],
          },
        },
      ],
      validation: Rule => Rule.required().min(1),
    }),

    defineField({
      name: 'body_en',
      title: 'Treść główna (EN)',
      type: 'array',
      of: [{ type: 'block' }], // można skopiować konfigurację jak powyżej
    }),

    defineField({
      name: 'body_pl',
      title: 'Treść główna (PL)',
      type: 'array',
      of: [{ type: 'block' }],
    }),

    // Data ostatniej aktualizacji – przydatna w stopce strony
    defineField({
      name: 'updatedAt',
      title: 'Data ostatniej aktualizacji',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: Rule => Rule.required(),
    }),

    // Opcjonalnie: wersja dokumentu (dla siebie)
    defineField({
      name: 'version',
      title: 'Wersja dokumentu',
      type: 'string',
      initialValue: '1.0',
      description: 'Np. 1.0, 1.1 – po każdej większej zmianie',
    }),
  ],

  preview: {
    select: {
      title: 'title_nl',
      updated: 'updatedAt',
    },
    prepare({ title, updated }) {
      return {
        title: title || 'Polityka prywatności',
        subtitle: updated ? `Zaktualizowano: ${new Date(updated).toLocaleDateString('nl-NL')}` : '',
      }
    },
  },
})
