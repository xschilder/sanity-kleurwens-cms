// schemaTypes/index.ts
import { beforeAfterProject } from './beforeAfterProject'
import { testimonial } from './testimonial'
import { project } from './project' // jeśli zostawiłeś poprzedni
import { guaranteeBlock } from './guaranteeBlock';
import { quickDecisionMotivation } from './quickDecisionMotivation';

export const schemaTypes = [
  beforeAfterProject,
  testimonial,
  project, 
export { default as guaranteeBlock } from './guaranteeBlock.ts'
export { default as quickDecisionMotivation } from './quickDecisionMotivation.ts'

]
