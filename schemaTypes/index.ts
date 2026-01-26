// schemaTypes/index.ts
import { beforeAfterProject } from './beforeAfterProject'
import { testimonial } from './testimonial'
import { project } from './project' // jeśli zostawiłeś poprzedni
import { guaranteeBlock } from './guaranteeBlock';
import { quickDecisionMotivation } from './quickDecisionMotivation';


export const schemaTypes = [
  beforeAfterProject,
  testimonial,
  project, // możesz usunąć jeśli niepotrzebny
  guaranteeBlock,              // Krok 5 - info odnośnie gwarancji przy wysokiej kalkulacji
  quickDecisionMotivation,     // Krok 5 - info przy szybkiej decyzji na możliwy rabat
]
