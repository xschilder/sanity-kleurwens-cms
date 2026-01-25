import { defineType, defineField } from 'sanity'

export const beforeAfterProject = defineType({
  name: 'beforeAfterProject',
  title: 'Karuzela Przed / Po – realizacja',
  type: 'document',
  fields: [
    defineField({
      name: 'order',
      title: 'Kolejność w karuzeli (niższa = wyżej)',
      type: 'number',
      initialValue: 10,
      validation: Rule => Rule.integer().positive(),
    }),
    defineField({
      name: 'beforeImage',
      title: 'Zdjęcie PRZED',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'afterImage',
      title: 'Zdjęcie PO',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Miasto / dzielnica',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Rok realizacji',
      type: 'number',
      validation: Rule => Rule.integer().min(2015).max(2026),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Krótki opis (widoczny pod zdjęciem)',
      type: 'string',
      description: 'Np. "Rijtjeshuis – pełna elewacja + okna"',
    }),
  ],
  orderings: [
    {
      title: 'Kolejność rosnąco',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'location',
      subtitle: 'year',
      media: 'afterImage',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Brak lokalizacji',
        subtitle: subtitle ? `${subtitle}` : 'Brak roku',
        media,
      }
    },
  },
})
