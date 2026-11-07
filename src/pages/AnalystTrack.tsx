import { Link } from 'react-router-dom'

import { JoinLink } from '../components/JoinLink'
import { PageIntro } from '../components/PageIntro'
import { analystTrack } from '../content/tracks'
import { siteLinks } from '../content/site'

export function AnalystTrack() {
  return (
    <main id="main-content" className="page-shell narrow-shell">
      <PageIntro
        eyebrow="Analyst Track"
        title="Research with depth. Evaluate what matters."
        description={analystTrack.summary}
        primaryAction={<Link to="/join" className="button">Express interest</Link>}
      />

      <section className="container section-block">
        <div className="info-panel track-detail">
          <p className="eyebrow">Expected work</p>
          <h2>What analysts do.</h2>
          <p>
            Members work in research teams led by team leads and share feedback with studio teams.
            Analysts learn to research industries, assess businesses, and translate geopolitical change
            into clear recommendations. The work combines financial modeling, market assessment, and structured reasoning.
          </p>
          <ul className="check-list">
            {analystTrack.activities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="note-block">
            Team lead description: {analystTrack.teamLeadDescription}
          </p>
        </div>
      </section>

      <section className="container section-block">
        <div className="cta-box">
          <h2>Interest in the Analyst Track?</h2>
          <JoinLink href={siteLinks.analystInterestForm} label="Analyst interest form" className="button" />
        </div>
      </section>
    </main>
  )
}
