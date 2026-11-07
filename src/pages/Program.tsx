import { PageIntro } from '../components/PageIntro'
import { MilestoneList } from '../components/MilestoneList'
import { milestones, programStages } from '../content/program'
import { analystTrack, studioTrack } from '../content/tracks'

export function Program() {
  return (
    <main id="main-content" className="page-shell narrow-shell">
      <PageIntro
        eyebrow="Our Program"
        title="Shared foundations. Distinct track work. One club-wide momentum."
        description="GCC brings together students who want to understand geopolitics, evaluate business opportunities, and build ventures with disciplined thinking. Members begin with common learning and then work in the track that best matches their interests."
      />

      <section className="container section-block">
        <div className="track-columns">
          <article className="info-panel">
            <p className="eyebrow">Analyst track</p>
            <h2>{analystTrack.title}</h2>
            <p>{analystTrack.summary}</p>
            <ul className="check-list">
              {analystTrack.activities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="info-panel">
            <p className="eyebrow">Studio track</p>
            <h2>{studioTrack.title}</h2>
            <p>{studioTrack.summary}</p>
            <ul className="check-list">
              {studioTrack.activities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="container section-block">
        <div className="section-header">
          <p className="eyebrow">Milestone reviews</p>
          <h2>Joint checkpoints that bring the work together.</h2>
        </div>
        <p className="section-copy">
          These milestone labels are proposed and subject to board confirmation. They are intended to
          show how studio and analyst work can connect across opportunity, validation, business model,
          and final presentation.
        </p>
        <MilestoneList milestones={milestones} />
      </section>

      <section className="container section-block">
        <div className="section-header">
          <p className="eyebrow">How the program works</p>
          <h2>Learn together, then move with purpose.</h2>
        </div>
        <div className="stage-grid compact-grid">
          {programStages.map((stage, index) => (
            <article key={stage.title} className="info-card">
              <span className="step-number">0{index + 1}</span>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
