import { defineArrayMember, defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Projekt / realizacja',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nazwa / klient / adres',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Rok realizacji',
      type: 'number',
    }),
    defineField({
      name: 'location',
      title: 'Miasto / dzielnica',
      type: 'string',
    }),
    defineField({
      name: 'images',
      title: 'Zdjęcia (wrzuć wiele naraz)',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          name: 'pair',
          title: 'Para przed/po + opis',
          fields: [
            defineField({
              name: 'type',
              title: 'Typ zdjęcia',
              type: 'string',
              options: {
                list: [
                  { title: 'Przed', value: 'before' },
                  { title: 'Po',    value: 'after'  },
                ],
              },
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Krótki opis / komentarz',
              type: 'string',
            }),
            defineField({
              name: 'order',
              title: 'Kolejność w karuzeli',
              type: 'number',
              initialValue: 10,
            }),
          ],
          options: { hotspot: true },
        }),
      ],
      options: {
        layout: 'grid',
      },
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'location',
      media: 'images.0',
    },
  },
})
