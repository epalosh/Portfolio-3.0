'use client'
import { useEffect, useState } from 'react'

const SECTIONS = ['experience', 'involvements', 'about', 'graveyard']

export default function Nav() {
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const els = SECTIONS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <header className="nav" id="topnav">
      <div className={`nav__inner${menuOpen ? ' nav__inner--open' : ''}`}>
        {/* Desktop links */}
        <nav className="nav__links nav__links--desktop" aria-label="Primary">
          {SECTIONS.map((id) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''}>
              {id === 'graveyard'
                ? 'Projects/Ventures'
                : id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>

        <a className="nav__cta nav__cta--desktop" href="#contact">
          Contact Me
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M3 8H13M9 4L13 8L9 12"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        {/* Hamburger button */}
        <button
          className="nav__hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
              <path d="M3 3l10 10M13 3L3 13" />
            </svg>
          ) : (
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
              <path d="M2 4h12M2 8h12M2 12h12" />
            </svg>
          )}
        </button>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="nav__mobile" aria-label="Primary">
            {SECTIONS.map((id) => (
              <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} onClick={close}>
                {id === 'graveyard'
                  ? 'Projects/Ventures'
                  : id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
            <a className="nav__cta" href="#contact" onClick={close}>
              Contact
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M3 8H13M9 4L13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
