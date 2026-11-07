import type { BoardPosition } from '../types/content'
import { RoleCard } from './RoleCard'

export function BoardGroup({
  title,
  items,
}: {
  title: string
  items: BoardPosition[]
}) {
  return (
    <section className="board-group">
      <h2>{title}</h2>
      <div className="role-grid">
        {items.map((item) => (
          <RoleCard key={`${item.track}-${item.role}`} role={item} />
        ))}
      </div>
    </section>
  )
}
