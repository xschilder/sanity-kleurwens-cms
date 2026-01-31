import { defineArrayMember, defineField, defineType } from 'sanity'

// aboutBlock.js (singleton)
export default {
  name: 'aboutBlock',
  title: 'About Block',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'mainText', type: 'array', of: [{type: 'block'}] }, // portable
    { name: 'highlights', type: 'array', of: [{type: 'string'}] },
  ]
};

