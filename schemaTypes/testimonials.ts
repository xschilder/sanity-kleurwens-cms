// schemaTypes/testimonial.ts
import { defineField, defineType } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Opinia klienta',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Imię / Imię i nazwisko',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Treść opinii',
      type: 'text',
      validation: Rule => Rule.required().min(30).max(400),
    }),
    defineField({
      name: 'rating',
      title: 'Ocena (1–5)',
      type: 'number',
      validation: Rule => Rule.required().min(1).max(5).integer(),
    }),
    defineField({
      name: 'date',
      title: 'Data opinii',
      type: 'date',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Miasto',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'location',
      media: 'rating', // można później dodać gwiazdkę jako ikonę
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle || 'Brak lokalizacji',
      }
    },
  },
})