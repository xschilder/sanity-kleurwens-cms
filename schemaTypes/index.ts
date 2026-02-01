// schemaTypes/index.ts

// Najpierw importujemy named exporty z istniejących schematów
import { beforeAfterProject } from './beforeAfterProject'
import { testimonial } from './testimonial'
import { project } from './project' // jeśli nadal używasz

// Dla nowych singletonów używamy default import + rename
import guaranteeBlockRaw from './guaranteeBlock'
import quickDecisionMotivationRaw from './quickDecisionMotivation'
// schemas/index.ts lub schema.ts
import privacyPolicy from './privacyPolicy'
import collaborationBlock from './collaborationBlock'
import faqItemfrom from './faqItem'
import aboutBlock from './aboutBlock'
import companySettings from './companySettings';

// Eksportujemy tablicę schematów (Sanity oczekuje tej tablicy)
export const schemaTypes = [
  beforeAfterProject,
  testimonial,
  project,
  guaranteeBlockRaw,
  quickDecisionMotivationRaw,
  privacyPolicy,
  collaborationBlock,
  faqItemfrom,
  aboutBlock,
  companySettings,
]

// Opcjonalnie – eksportujemy też pojedyncze typy, jeśli ktoś je importuje bezpośrednio
export { guaranteeBlockRaw as guaranteeBlock }
export { quickDecisionMotivationRaw as quickDecisionMotivation }
