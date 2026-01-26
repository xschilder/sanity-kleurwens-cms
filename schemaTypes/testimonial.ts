import { defineType, defineField } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Opinia klienta',
  type: 'document',
  fields: [
    defineField({
      name: 'order',
      title: 'Kolejność w karuzeli (niższa = wyżej)',
      type: 'number',
      initialValue: 10,
      validation: Rule => Rule.integer().positive(),
    }),

    // Autor – zamiast name
    defineField({
      name: 'author',
      title: 'Autor / Imię i nazwisko / pseudonim',
      type: 'string',
      validation: Rule => Rule.required(),
    }),

    // Lokalizowany tekst opinii
    defineField({
      name: 'text_nl',
      title: 'Treść opinii – NL',
      type: 'text',
      validation: Rule => Rule.required().min(30).max(400),
    }),
    defineField({
      name: 'text_en',
      title: 'Treść opinii – EN',
      type: 'text',
      validation: Rule => Rule.required().min(30).max(400),
    }),
    defineField({
      name: 'text_pl',
      title: 'Treść opinii – PL',
      type: 'text',
      validation: Rule => Rule.required().min(30).max(400),
    }),

    // Ocena gwiazdek
    defineField({
      name: 'rating',
      title: 'Ocena (1–5 gwiazdek)',
      type: 'number',
      validation: Rule => Rule.required().min(1).max(5).integer(),
    }),

    // Lokalizacja (opcjonalna)
    defineField({
      name: 'location',
      title: 'Miasto / lokalizacja',
      type: 'string',
    }),

    // Lokalizowane daty (opcjonalne – jeśli chcesz różne formaty)
    defineField({
      name: 'date_nl',
      title: 'Data opinii – NL (np. 15 januari 2025)',
      type: 'string',
    }),
    defineField({
      name: 'date_en',
      title: 'Data opinii – EN (np. January 15, 2025)',
      type: 'string',
    }),
    defineField({
      name: 'date_pl',
      title: 'Data opinii – PL (np. 15 stycznia 2025)',
      type: 'string',
    }),

    // Zdjęcie klienta (opcjonalne)
    defineField({
      name: 'avatar',
      title: 'Zdjęcie klienta / awatar (opcjonalne)',
      type: 'image',
      options: { hotspot: true },
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
      title: 'author',
      subtitle: 'location',
      media: 'avatar',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Anonimowy klient',
        subtitle: subtitle || 'Brak lokalizacji',
        media,
      }
    },
  },
})
