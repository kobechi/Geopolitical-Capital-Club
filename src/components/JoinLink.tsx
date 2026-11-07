type JoinLinkProps = {
  href?: string
  label: string
  className?: string
}

export function JoinLink({ href, label, className = 'button' }: JoinLinkProps) {
  if (!href) {
    return <p className="informational-state">{label} coming soon</p>
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {label}
    </a>
  )
}
