import { Link } from 'react-router-dom'

import { JoinLink } from '../components/JoinLink'
import { PageIntro } from '../components/PageIntro'
import { siteLinks } from '../content/site'
import { studioTrack } from '../content/tracks'

export function StudioTrack() {
  return (
    <main id="main-content" className="page-shell narrow-shell">
      <PageIntro
        eyebrow="Studio Track"
        title="Turn signals into ventures."
        description={studioTrack.summary}
        primaryAction={<Link to="/join" className="button">Express interest</Link>}
      />

      <section className="container section-block">
        <div className="info-panel track-detail">
          <p className="eyebrow">Expected work</p>
          <h2>What studio members do.</h2>
          <p>
            Members develop and test startup ideas, working across customer research, product development,
            marketing, operations, and milestone pitches. Multiple startup teams can move in parallel,
            each supported by a team lead and informed by analyst feedback. The goal is to move from signal to insight, then into a concrete next step.
          </p>
          <ul className="check-list">
            {studioTrack.activities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="note-block">
            Team lead description: {studioTrack.teamLeadDescription}
          </p>
          <p className="note-block subtle">
            Analyst feedback informs development, but analyst teams do not control studio decisions and there is no guarantee of financing or incorporation.
          </p>
        </div>
      </section>

      <section className="container section-block">
        <div className="cta-box">
          <h2>Interest in the Studio Track?</h2>
          <JoinLink href={siteLinks.studioApplicationForm} label="Studio application form" className="button" />
        </div>
      </section>
    </main>
  )
}
