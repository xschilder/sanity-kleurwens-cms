import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { documentInternationalization } from '@sanity/document-internationalization'

export default defineConfig({
  name: 'default',
  title: 'kleurwens-cms-2026',

  projectId: '9s59sp8p',
  dataset: 'production',

  plugins: [
  documentInternationalization({
    supportedLanguages: [
      { id: 'nl', title: 'Nederlands' },
      { id: 'en', title: 'English' },
      { id: 'pl', title: 'Polski' }
    ],
    schemaTypes: ['offerTemplate'],  // tylko nasz szablon
  }),
  structureTool(), 
  visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
