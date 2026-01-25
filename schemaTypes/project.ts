import { defineType, defineField } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Projekt malowania',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nazwa / klient',
      type: 'string',
    }),
    defineField({
      name: 'beforeImage',
      title: 'Zdjęcie PRZED',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'afterImage',
      title: 'Zdjęcie PO',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})