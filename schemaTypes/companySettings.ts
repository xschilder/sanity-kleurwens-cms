 //companySettings.ts
 export default {
  name: 'companySettings',
  title: 'Ustawienia firmy (dla PDF ofert)',
  type: 'document',
  __experimental_actions: ['update', 'publish'], // singleton – tylko edycja, bez tworzenia/usuwania

  fields: [
    {
      name: 'logo',
      title: 'Logo firmy (w PDF)',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt tekst logo',
          initialValue: 'Logo Kleur Wens',
        },
      ],
    },
    {
      name: 'companyName',
      title: 'Nazwa firmy',
      type: 'string',
      initialValue: 'Kleur Wens',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'address',
      title: 'Adres firmy',
      type: 'string',
      initialValue: 'Balistraat 20, 5014BH Tilburg',
    },
    {
      name: 'phone',
      title: 'Telefon',
      type: 'string',
      initialValue: '+31 6 12345678',
    },
    {
      name: 'email',
      title: 'E-mail',
      type: 'email',
      initialValue: 'info@kleurwens.nl',
    },
    {
      name: 'iban',
      title: 'IBAN',
      type: 'string',
      initialValue: 'NL12 ABCD 3456 7890 12',
    },
    {
      name: 'guaranteeText',
      title: 'Tekst gwarancji w PDF',
      type: 'text',
      initialValue: '3 lata gwarancji na materiał i robociznę',
      rows: 3,
    },
  ],
};