import { useState } from 'react'

import { PageIntro } from '../components/PageIntro'
import { RoleCard } from '../components/RoleCard'
import { executiveBoard, teamLeadGroups } from '../content/leadership'

export function Team() {
  const [activeIndex, setActiveIndex] = useState(0)
  const currentMember = executiveBoard[activeIndex]

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? executiveBoard.length - 1 : current - 1))
  }

  const goToNext = () => {
    setActiveIndex((current) => (current === executiveBoard.length - 1 ? 0 : current + 1))
  }

  const currentTrackClass = currentMember.track === 'analyst' ? 'analyst-track' : 'studio-track'

  return (
    <main id="main-content" className="page-shell narrow-shell">
      <PageIntro
        eyebrow="Our Team"
        title="Leadership that supports the club’s two tracks."
        description="GCC has two co-presidents and six functional board leads, totaling eight executive board positions. Team leads are separate from executive board positions and support individualized research and startup work."
      />

      <section className="container section-block">
        <div className="board-layout">
          <div className="board-wrapper">
            <h2>Executive Board</h2>
            <p className="section-copy small-copy">
              The Executive Board oversees GCC’s Analyst and Studio tracks, each led by a co-president and three functional board members. The board develops educational sessions, supports team leads, and coordinates research projects, venture development, and milestone reviews.
            </p>

            <div className={`board-showcase ${currentTrackClass}`}>
              <button type="button" className="carousel-arrow" onClick={goToPrevious} aria-label="Previous board member">
                ←
              </button>

              <div className="board-slide-panel">
                <div className="slide-track-label">
                  <span className="eyebrow">{currentMember.track === 'analyst' ? 'Analyst Track' : 'Studio Track'}</span>
                </div>
                <RoleCard key={currentMember.name} role={currentMember} featured />
              </div>

              <button type="button" className="carousel-arrow" onClick={goToNext} aria-label="Next board member">
                →
              </button>
            </div>
          </div>
          <div className="team-leads-panel">
            <h2>Team Leads</h2>
            <ul className="check-list">
              {teamLeadGroups.map((group) => (
                <li key={group.title}>
                  <strong>{group.title}</strong>
                  <span>{group.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container section-block">
        <div className="info-panel">
          <p className="eyebrow">Past Members</p>
          <h2>Member history will be added here.</h2>
          <p className="informational-state">No verified past-member list is currently published.</p>
        </div>
      </section>
    </main>
  )
}
