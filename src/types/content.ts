export type TrackId = 'analyst' | 'studio'

export type BoardPosition = {
  track: TrackId
  role: string
  name?: string
  bio?: string
  photo?: { src: string; alt: string; scale?: number }
  linkedinUrl?: string
}

export type TeamLeadGroup = {
  track: TrackId
  title: string
  description: string
}
