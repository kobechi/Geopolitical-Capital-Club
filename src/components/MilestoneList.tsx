import type { Milestone } from '../content/program'

export function MilestoneList({ milestones }: { milestones: Milestone[] }) {
  return (
    <div className="milestone-shell">
      {milestones.map((milestone) => (
        <article key={milestone.name} className="milestone-item">
          <p className="milestone-name">{milestone.name}</p>
          <div className="milestone-copy">
            <div>
              <p className="label">Studio contribution</p>
              <p>{milestone.studio}</p>
            </div>
            <div>
              <p className="label">Analyst contribution</p>
              <p>{milestone.analyst}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
