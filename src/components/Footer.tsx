import { organizationName, siteLinks } from '../content/site'

function SocialIcon({ platform }: { platform: 'email' | 'linkedin' | 'instagram' }) {
  const sharedProps = {
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    'aria-hidden': true,
    className: 'social-icon',
  }

  if (platform === 'email') {
    return (
      <svg {...sharedProps}>
        <path d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.2-.75 6.8 5.3 6.8-5.3H5.2Zm13.55 2.15-6.17 4.8a1 1 0 0 1-1.16 0L5.25 8.15v9.1c0 .41.34.75.75.75h12c.41 0 .75-.34.75-.75v-9.1Z" />
      </svg>
    )
  }

  if (platform === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon" fill="currentColor">
        <path d="M6.5 9.2h2.8v9.3H6.5V9.2Zm1.4-4.5A1.6 1.6 0 1 1 8 6.3a1.6 1.6 0 0 1 0-3.2ZM10.7 9.2h2.7v1.3h.1c.4-.7 1.3-1.5 2.7-1.5 2.8 0 3.3 1.9 3.3 4.3v5.2h-2.8v-4.7c0-1.1-.1-2.5-1.5-2.5-1.5 0-1.8 1.2-1.8 2.4v4.8h-2.7V9.2Z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.25" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-layout">
        <div>
          <p className="eyebrow">{organizationName}</p>
          <p>Boston College student organization</p>
        </div>

        <div className="footer-links">
          {siteLinks.contactEmail ? (
            <a className="social-link" href={`mailto:${siteLinks.contactEmail}`} aria-label="Email GCC">
              <SocialIcon platform="email" />
              <span>Email</span>
            </a>
          ) : null}
          {siteLinks.linkedin ? (
            <a className="social-link" href={siteLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <SocialIcon platform="linkedin" />
              <span>LinkedIn</span>
            </a>
          ) : null}
          {siteLinks.instagram ? (
            <a className="social-link" href={siteLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <SocialIcon platform="instagram" />
              <span>Instagram</span>
            </a>
          ) : null}
          {!siteLinks.contactEmail && !siteLinks.linkedin && !siteLinks.instagram ? (
            <span>Contact information coming soon</span>
          ) : null}
        </div>
      </div>
    </footer>
  )
}
