// schemaTypes/index.ts

// Najpierw importujemy named exporty z istniejących schematów
import { beforeAfterProject } from './beforeAfterProject'
import { testimonial } from './testimonial'
import { project } from './project' // jeśli nadal używasz

// Dla nowych singletonów używamy default import + rename
import guaranteeBlockRaw from './guaranteeBlock'
import quickDecisionMotivationRaw from './quickDecisionMotivation'

// Eksportujemy tablicę schematów (Sanity oczekuje tej tablicy)
export const schemaTypes = [
  beforeAfterProject,
  testimonial,
  project,
  guaranteeBlockRaw,
  quickDecisionMotivationRaw,
]

// Opcjonalnie – eksportujemy też pojedyncze typy, jeśli ktoś je importuje bezpośrednio
export { guaranteeBlockRaw as guaranteeBlock }
export { quickDecisionMotivationRaw as quickDecisionMotivation }
