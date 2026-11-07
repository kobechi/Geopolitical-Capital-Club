import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import circleLogo from '../assets/Circle Logo.png'
import { navItems } from '../content/site'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <NavLink to="/" className="brand" aria-label="Go to the Geopolitical Capital Club home page">
          <img src={circleLogo} className="brand-mark brand-logo-image" alt="" />
          <span className="brand-copy">
            <strong>Geopolitical Capital Club</strong>
            <small>Boston College</small>
          </span>
        </NavLink>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Close main navigation' : 'Open main navigation'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          Menu
        </button>

        <nav id="primary-navigation" className={`site-nav ${menuOpen ? 'is-open' : ''}`}>
          <ul>
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => (item.primary ? 'button nav-button' : `nav-link ${isActive ? 'active' : ''}`)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
