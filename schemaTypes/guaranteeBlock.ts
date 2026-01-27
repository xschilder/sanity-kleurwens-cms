// schemaTypes/guaranteeBlock.ts
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'guaranteeBlock',
  title: 'Guarantee Block (≥ €1800)',
  type: 'document',
  options: { singleton: true },
  fields: [
    defineField({
      name: 'title',
      title: 'Tytuł (NL)',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'title_en',
      title: 'Title (EN)',
      type: 'string',
    }),
    defineField({
      name: 'title_pl',
      title: 'Tytuł (PL)',
      type: 'string',
    }),

    defineField({
      name: 'items',
      title: 'Punkty gwarancji',
      type: 'array',  // ← poprawione: type array
      of: [
        defineField({
          type: 'object',
          name: 'item',
          fields: [
            defineField({
              name: 'icon',
              title: 'Ikona (lucide name)',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'text',
              title: 'Tekst (NL)',
              type: 'text',  // zwykły tekst wielolinijkowy – bez portable text
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'text_en',
              title: 'Text (EN)',
              type: 'text',
            }),
            defineField({
              name: 'text_pl',
              title: 'Tekst (PL)',
              type: 'text',
            }),
            defineField({
              name: 'footnote',
              title: 'Przypis (opcjonalny)',
              type: 'string',
            }),
          ],
        }),
      ],
      validation: Rule => Rule.min(3).max(6),
    }),

    defineField({
      name: 'footnoteGeneral',
      title: 'Ogólny przypis (NL)',
      type: 'text',
    }),
  ],
});
