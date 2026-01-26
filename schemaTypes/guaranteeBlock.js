// schemaTypes/guaranteeBlock.js
export default {
  name: 'guaranteeBlock',
  title: 'Guarantee Block (dla wysokich wycen ≥ €1800)',
  type: 'document',
  // singleton – zazwyczaj tylko jeden taki blok
  options: { isSingleton: true },
  fields: [
    {
      name: 'title',
      title: 'Tytuł (NL)',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'title_en',
      title: 'Title (EN)',
      type: 'string',
    },
    {
      name: 'title_pl',
      title: 'Tytuł (PL)',
      type: 'string',
    },

    {
      name: 'items',
      title: 'Punkty gwarancji / korzyści',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'guaranteeItem',
          fields: [
            {
              name: 'icon',
              title: 'Ikona (lucide-react name)',
              type: 'string',
              options: {
                list: [
                  { title: 'ShieldCheck', value: 'ShieldCheck' },
                  { title: 'PaintBucket', value: 'PaintBucket' },
                  { title: 'HardHat', value: 'HardHat' },
                  { title: 'Clock', value: 'Clock' },
                  { title: 'CheckCircle', value: 'CheckCircle' },
                  { title: 'Euro', value: 'Euro' },
                ],
              },
              validation: Rule => Rule.required(),
            },
            {
              name: 'text',
              title: 'Tekst główny (Portable Text – NL)',
              type: 'array',
              of: [{ type: 'block' }],
              validation: Rule => Rule.required(),
            },
            {
              name: 'text_en',
              title: 'Main text (EN)',
              type: 'array',
              of: [{ type: 'block' }],
            },
            {
              name: 'text_pl',
              title: 'Tekst główny (PL)',
              type: 'array',
              of: [{ type: 'block' }],
            },
            {
              name: 'footnote',
              title: 'Przypis (opcjonalny – NL)',
              type: 'string',
            },
          ],
          preview: {
            select: { title: 'text.0.children.0.text' },
            prepare: ({ title }) => ({ title: title || 'Nowy punkt' }),
          },
        },
      ],
      validation: Rule => Rule.min(3).max(6),
    },

    {
      name: 'footnoteGeneral',
      title: 'Ogólny przypis (NL)',
      type: 'string',
    },
  ],
};
