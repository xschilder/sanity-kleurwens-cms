// schemaTypes/index.ts
import { beforeAfterProject } from './beforeAfterProject'
import { testimonial } from './testimonials'
import { project } from './project' // jeśli zostawiłeś poprzedni

export const schemaTypes = [
  beforeAfterProject,
  testimonial,
  project, // możesz usunąć jeśli niepotrzebny
]