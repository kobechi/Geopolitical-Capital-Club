export type ProgramStage = {
  title: string
  description: string
}

export const programStages: ProgramStage[] = [
  {
    title: 'Learn together',
    description:
      'Shared introductory sessions establish a foundation in geopolitics and business.',
  },
  {
    title: 'Choose a track',
    description:
      'Analyst teams conduct research and analysis while studio teams develop startup ideas.',
  },
  {
    title: 'Progress together',
    description:
      'Studio teams present at milestones and use analyst feedback to guide their next steps.',
  },
]

export type Milestone = {
  name: string
  studio: string
  analyst: string
}

export const milestones: Milestone[] = [
  {
    name: 'Opportunity',
    studio: 'Define the problem and geopolitical connection',
    analyst: 'Examine industry context and risks',
  },
  {
    name: 'Validation',
    studio: 'Test customer needs and the proposed solution',
    analyst: 'Challenge market assumptions and evidence',
  },
  {
    name: 'Business model',
    studio: 'Develop pricing, costs, and an execution plan',
    analyst: 'Evaluate economics and financial scenarios',
  },
  {
    name: 'Final presentation',
    studio: 'Present findings, progress, and next steps',
    analyst: 'Present assessment and recommendations',
  },
]
