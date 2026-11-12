import { Link } from 'react-router-dom'

import { JoinLink } from '../components/JoinLink'
import { PageIntro } from '../components/PageIntro'
import { siteLinks } from '../content/site'

function ContactIcon({ platform }: { platform: 'email' | 'linkedin' | 'instagram' }) {
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

export function Join() {
  return (
    <main id="main-content" className="page-shell narrow-shell">
      <PageIntro
        eyebrow="Join GCC"
        title="Choose the path that fits you."
        description="General Membership is open without an application or experience requirement. Track selection, participation capacity, application requirements, and deadlines have not been established in this brief, so the club should not assume a selective process for any track."
        primaryAction={<Link to="/" className="button">Back home</Link>}
      />

      <section className="container section-block">
        <div className="join-grid">
          <article className="info-panel">
            <p className="eyebrow">General membership</p>
            <h2>Open to all members of the Boston College community.</h2>
            <p>
              General membership is open without an application or prior experience requirement. Members can participate in educational sessions, explore club topics, and learn across GCC’s Analyst and Studio tracks.
            </p>
            <JoinLink href={siteLinks.generalMembershipForm} label="General membership form" className="button" />
          </article>

          <article className="info-panel">
            <p className="eyebrow">Track application</p>
            <h2>
              Analyst and Studio
              <br />
              pathways.
            </h2>
            <p>
              Interested members can express interest in either pathway through the same form. GCC will follow up with more details on fit, track fit, and next steps.
            </p>
            <JoinLink href={siteLinks.analystApplicationForm} label="Track application form" className="button" />
          </article>
        </div>
      </section>

      <section className="container section-block">
        <div className="meta-box">
          <h2>Upcoming events</h2>
          <p>Meetings and club updates are posted here as they are scheduled.</p>
          <div className="calendar-embed-wrap">
            <iframe
              title="GCC upcoming events"
              src={siteLinks.calendarUrl}
              className="calendar-embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <h3>Contact links</h3>
          {siteLinks.contactEmail ? (
            <a href={`mailto:${siteLinks.contactEmail}`} className="social-link social-link-inline">
              <ContactIcon platform="email" />
              <span>Email GCC</span>
            </a>
          ) : null}
          {siteLinks.linkedin ? (
            <a href={siteLinks.linkedin} target="_blank" rel="noreferrer" className="social-link social-link-inline">
              <ContactIcon platform="linkedin" />
              <span>LinkedIn</span>
            </a>
          ) : null}
          {siteLinks.instagram ? (
            <a href={siteLinks.instagram} target="_blank" rel="noreferrer" className="social-link social-link-inline">
              <ContactIcon platform="instagram" />
              <span>Instagram</span>
            </a>
          ) : null}
        </div>
      </section>

      <section className="container section-block">
        <div className="faq-box">
          <h2>Frequently asked questions</h2>
          <dl>
            <div>
              <dt>Do I need prior experience to join?</dt>
              <dd>No. General membership is open without an application or prior experience requirement.</dd>
            </div>
            <div>
              <dt>What are the two tracks?</dt>
              <dd>The Analyst Track focuses on research, financial analysis, and business evaluation. The Studio Track focuses on startup development, customer research, and execution.</dd>
            </div>
            <div>
              <dt>How do the tracks work together?</dt>
              <dd>Members learn together, then track-specific teams collaborate through milestone reviews and shared feedback loops.</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  )
}
