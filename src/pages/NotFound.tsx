import { Link } from 'react-router-dom'

import { PageIntro } from '../components/PageIntro'

export function NotFound() {
  return (
    <main id="main-content" className="page-shell narrow-shell">
      <PageIntro
        eyebrow="Page not found"
        title="This page is not available right now."
        description="The link you followed may be outdated or the page may not have been published yet."
        primaryAction={<Link to="/" className="button">Return home</Link>}
      />
    </main>
  )
}
