import { Link } from 'react-router-dom'

import { TrackCard } from '../components/TrackCard'
import { organizationName, siteLinks } from '../content/site'
import { tracks } from '../content/tracks'

const placements = [
  { name: 'CIBC', slug: 'cibc' },
  { name: 'Deloitte', slug: 'deloitte' },
  { name: 'EY', slug: 'ey' },
  { name: 'UniCredit', slug: 'unicredit' },
  { name: 'Dean Street Law', slug: 'dean-street' },
  { name: 'JPMorgan Chase', slug: 'jpmorgan' },
  { name: 'Fidelity', slug: 'fidelity' },
  { name: 'pwc', slug: 'pwc' },
]

export function Home() {
  return (
    <main id="main-content" className="page-shell">
      <section className="hero">
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">Geopolitical Capital Club · Boston College</p>
            <h1>Understand global change. Build what comes next.</h1>
            <p className="lede">
              Explore how geopolitics shapes business through research, financial analysis, and hands-on venture creation.
            </p>
            <div className="intro-actions">
              <Link to="/program" className="button">
                Explore the Tracks
              </Link>
              <Link to="/join" className="button button-secondary">
                Join GCC
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container section-block">
        <div className="section-header">
          <p className="eyebrow">About GCC</p>
          <h2>Two connected tracks, one shared lens.</h2>
        </div>
        <p className="section-copy">
          We explore how geopolitical change creates business opportunities through two connected
          tracks: analysts learn to research and evaluate businesses, while studio members develop
          startup ideas. Through shared learning and milestone reviews, members across disciplines
          build practical skills and help turn ideas into viable ventures.
        </p>
      </section>

      <section className="container section-block">
        <div className="section-header">
          <p className="eyebrow">Tracks</p>
          <h2>Choose the path that matches your interests.</h2>
        </div>
        <div className="track-grid">
          {tracks.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>
      </section>

      <section className="container section-block">
        <blockquote className="quote-block">
          “If you go into an industry that you don’t know a lot about, it forces you to ask a lot of questions and to take a fresh perspective, because you have no other perspective.”
          <footer>— Jeff Sprecher, founder of Intercontinental Exchange, the company that owns the New York Stock Exchange</footer>
        </blockquote>
      </section>

      <section className="container section-block membership-block">
        <div className="section-header narrow">
          <p className="eyebrow">General membership</p>
          <h2>Open to the Boston College community.</h2>
        </div>
        <div className="membership-grid">
          <p>
            General Membership is open to all members of the Boston College community, with no
            application or prior experience required. General members attend meetings exploring
            geopolitics, business analysis, and venture creation across GCC’s Analyst and Studio tracks.
          </p>
          <Link to="/join" className="button button-primary">
            Get Involved
          </Link>
        </div>
      </section>

      <section className="container section-block placements-section">
        <div className="section-header">
          <h2>Placements</h2>
        </div>
        <div className="placements-grid" aria-label="Current and incoming board member employers">
          {placements.map((placement) => (
            <div key={placement.slug} className={`placement-logo placement-logo-${placement.slug}`}>
              <span>{placement.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container section-block footer-callout">
        <div className="callout-box">
          <p className="eyebrow">{organizationName}</p>
          <h2>Interested in joining?</h2>
          <Link to="/join" className="button">
            Review membership info
          </Link>
          {siteLinks.generalMembershipForm ? (
            <a href={siteLinks.generalMembershipForm} target="_blank" rel="noreferrer" className="button button-secondary">
              General Membership Form
            </a>
          ) : null}
        </div>
      </section>
    </main>
  )
}
