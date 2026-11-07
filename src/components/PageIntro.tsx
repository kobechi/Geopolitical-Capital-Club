import type { ReactNode } from 'react'

type PageIntroProps = {
  eyebrow?: string
  title: string
  description?: string
  primaryAction?: ReactNode
  secondaryAction?: ReactNode
}

export function PageIntro({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
}: PageIntroProps) {
  return (
    <section className="page-intro">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h1>{title}</h1>
      {description ? <p className="intro-copy">{description}</p> : null}
      {(primaryAction || secondaryAction) && (
        <div className="intro-actions">
          {primaryAction}
          {secondaryAction}
        </div>
      )}
    </section>
  )
}
