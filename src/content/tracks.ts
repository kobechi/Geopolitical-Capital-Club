export type TrackId = 'analyst' | 'studio'

export type Track = {
  id: TrackId
  title: string
  summary: string
  activities: string[]
  teamLeadDescription: string
}

export const analystTrack: Track = {
  id: 'analyst',
  title: 'Analyst Track',
  summary:
    'Members learn research, financial modeling, and business evaluation, applying these skills to geopolitical developments and providing feedback on studio ventures.',
  activities: [
    'Research industries, companies, and emerging market dynamics',
    'Build financial models and business evaluations with disciplined analysis',
    'Assess geopolitical risk and translate it into practical decisions',
    'Share findings and recommendations with studio teams at milestone reviews',
  ],
  teamLeadDescription:
    'Leads an analyst team by assigning research, guiding analysis, and coordinating reports and presentations.',
}

export const studioTrack: Track = {
  id: 'studio',
  title: 'Studio Track',
  summary:
    'Members develop and test startup ideas, working across product, marketing, and operations with feedback from analyst teams at key milestones.',
  activities: [
    'Define customer problems and connect them to a geopolitical lens',
    'Prototype products, refine positioning, and test channels',
    'Operate through early experiments in marketing, product, and execution',
    'Present milestone progress and adjust strategy with analyst feedback',
  ],
  teamLeadDescription:
    'Leads a startup team by organizing tasks, guiding business development, and preparing milestone pitches.',
}

export const tracks = [analystTrack, studioTrack]
