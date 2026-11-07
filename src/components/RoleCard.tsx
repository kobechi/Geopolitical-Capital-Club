import type { BoardPosition } from '../types/content'

export function RoleCard({ role, featured = false }: { role: BoardPosition; featured?: boolean }) {
  return (
    <article className={`role-card ${featured ? 'featured-role-card' : ''}`}>
      {role.photo ? (
        <div className="member-photo-frame">
          <img
            src={role.photo.src}
            alt={role.photo.alt || role.name || role.role}
            className="member-photo"
            style={{
              width: `${(role.photo.zoom ?? 1) * 100}%`,
              height: `${(role.photo.zoom ?? 1) * 100}%`,
              left: `${-((role.photo.zoom ?? 1) - 1) * (role.photo.x ?? 50)}%`,
              top: `${-((role.photo.zoom ?? 1) - 1) * (role.photo.y ?? 0)}%`,
            }}
          />
        </div>
      ) : (
        <div className="member-photo-frame" aria-label={`${role.name ?? role.role} photo placeholder`} />
      )}

      <div className="role-card-copy">
        <p className="eyebrow">{role.track === 'analyst' ? 'Analyst Track' : 'Studio Track'}</p>
        <h3>{role.role}</h3>
        {role.name ? <p className="person-name">{role.name}</p> : null}
        {role.bio ? (
          <p className="person-bio">{role.bio}</p>
        ) : (
          <div className="bio-placeholder" aria-label={`${role.name ?? role.role} bio placeholder`} />
        )}
        {role.linkedinUrl ? (
          <a href={role.linkedinUrl} target="_blank" rel="noreferrer" className="button button-secondary linkedin-button">
            LinkedIn
          </a>
        ) : null}
      </div>
    </article>
  )
}
