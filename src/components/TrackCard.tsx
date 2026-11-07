import { Link } from 'react-router-dom'

import type { Track } from '../content/tracks'

export function TrackCard({ track }: { track: Track }) {
  return (
    <article className="track-card">
      <p className="eyebrow">{track.title}</p>
      <h3>{track.title}</h3>
      <p>{track.summary}</p>
      <ul>
        {track.activities.slice(0, 3).map((activity) => (
          <li key={activity}>{activity}</li>
        ))}
      </ul>
      <Link to={track.id === 'analyst' ? '/analyst' : '/studio'} className="button button-secondary">
        Explore {track.title}
      </Link>
    </article>
  )
}
