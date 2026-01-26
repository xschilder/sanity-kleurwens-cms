// schemaTypes/index.ts
import { beforeAfterProject } from './beforeAfterProject'
import { testimonial } from './testimonial'
import { project } from './project' // jeśli zostawiłeś poprzedni
import { guaranteeBlock } from './guaranteeBlock';
import { quickDecisionMotivation } from './quickDecisionMotivation';
import { defineType, defineField } from 'sanity'

export const schemaTypes = [
  beforeAfterProject,
  testimonial,
  project, 
  quickDecisionMotivation, // Krok 5 - info przy szybkiej decyzji na możliwy rabat
  export const guaranteeBlock = defineType({ // Krok 5 - info odnośnie gwarancji przy wysokiej kalkulacji
  name: 'guaranteeBlock',
  title: 'Guarantee Block (≥ €1800)',
  type: 'document',
]
