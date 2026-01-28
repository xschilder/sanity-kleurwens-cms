// schemaTypes/quickDecisionMotivation.ts
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'quickDecisionMotivation',
  title: 'Quick Decision Motivation (dla wycen < €1800)',
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
      name: 'text',
      title: 'Główny tekst (NL)',
      type: 'text',  // zwykły tekst wielolinijkowy
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'text_en',
      title: 'Main text (EN)',
      type: 'text',
    }),
    defineField({
      name: 'text_pl',
      title: 'Główny tekst (PL)',
      type: 'text',
    }),

    defineField({
      name: 'highlightText',
      title: 'Tekst wyróżniony (bold/important – NL)',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'highlightText_en',
      title: 'Highlighted text (EN)',
      type: 'string',
    }),
    defineField({
      name: 'highlightText_pl',
      title: 'Tekst wyróżniony (PL)',
      type: 'string',
    }),

    defineField({
      name: 'icon',
      title: 'Ikona (lucide name)',
      type: 'string',
      options: {
        list: [
          { title: 'Clock', value: 'Clock' },
          { title: 'Percent', value: 'Percent' },
          { title: 'Zap', value: 'Zap' },
          { title: 'Gift', value: 'Gift' },
        ],
      },
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'ctaLabel',
      title: 'Etykieta przycisku CTA (NL)',
      type: 'string',
      initialValue: 'Umów bezpłatną wizytę',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'ctaLabel_en',
      title: 'CTA Label (EN)',
      type: 'string',
    }),
    defineField({
      name: 'ctaLabel_pl',
      title: 'Etykieta CTA (PL)',
      type: 'string',
    }),
  ],
});
