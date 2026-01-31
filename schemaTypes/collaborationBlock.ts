import { defineArrayMember, defineField, defineType } from 'sanity'

// collaborationBlock.ts (singleton)
export default {
  name: 'collaborationBlock',
  title: 'Collaboration Block',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'mainText', type: 'array', of: [{type: 'block'}] },
    { name: 'ctaLink', type: 'string' }, // np. '/dba-compliant-zzp-schilder-gezocht'
  ]
};