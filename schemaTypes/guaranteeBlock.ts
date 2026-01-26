// schemaTypes/guaranteeBlock.ts   ← .ts !!
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'guaranteeBlock',
  title: 'Guarantee Block (≥ €1800)',
  type: 'document',
  options: { singleton: true }, // nowość w v3 – lepiej niż isSingleton
  fields: [
    defineField({
      name: 'title',
      title: 'Tytuł (NL)',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
      type: 'array',
      of: [
        defineField({
          type: 'object',
          name: 'item',
          fields: [
            defineField({
              name: 'icon',
              title: 'Ikona',
              type: 'string',
              options: {
                list: ['ShieldCheck', 'PaintBucket', 'HardHat', 'Clock', 'CheckCircle', 'Euro'],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'text',
              title: 'Tekst (Portable Text – NL)',
              type: 'array',
              of: [{ type: 'block' }],
              validation: (Rule) => Rule.required(),
            }),
            defineField({ name: 'text_en', title: 'Text (EN)', type: 'array', of: [{ type: 'block' }] }),
            defineField({ name: 'text_pl', title: 'Tekst (PL)', type: 'array', of: [{ type: 'block' }] }),
            defineField({ name: 'footnote', title: 'Przypis', type: 'string' }),
          ],
        }),
      ],
    }),

    defineField({
      name: 'footnoteGeneral',
      title: 'Ogólny przypis',
      type: 'string',
    }),
  ],
})
