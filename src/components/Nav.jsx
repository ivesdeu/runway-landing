import { useState, useEffect } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import {
  motion as Motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import RunwayLogo from './RunwayLogo.jsx'

const NAV_WORDMARK_SRC = `${import.meta.env.BASE_URL}runway-wordmark-nav.png`

const NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
]

function SectionLink({ href, children, onNavigate, className = '' }) {
  const { pathname } = useLocation()
  const close = () => {
    onNavigate?.()
  }
  const cls = `transition-colors hover:text-[#111] ${className}`.trim()
  if (pathname === '/' && href.startsWith('#')) {
    return (
      <a href={href} className={cls} onClick={close}>
        {children}
      </a>
    )
  }
  const to = href.startsWith('#') ? `/${href}` : href
  return (
    <Link to={to} className={cls} onClick={close}>
      {children}
    </Link>
  )
}

function NavLinkGroup({ className, onNavigate }) {
  return (
    <ul
      className={`m-0 flex list-none flex-wrap items-center justify-center gap-x-8 gap-y-2 p-0 text-[0.9375rem] font-normal leading-snug text-[#555] md:gap-x-10 md:text-base ${className ?? ''}`}
    >
      {NAV_LINKS.map(({ href, label }) => (
        <li key={href}>
          <SectionLink href={href} onNavigate={onNavigate}>
            {label}
          </SectionLink>
        </li>
      ))}
    </ul>
  )
}

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const reduceMotion = useReducedMotion()
  const { scrollY } = useScroll()

  const yScroll = [0, 100]
  const navPyRem = useTransform(scrollY, yScroll, [1.25, reduceMotion ? 1.25 : 0.65])
  const navPaddingY = useMotionTemplate`${navPyRem}rem`

  const logoScale = useTransform(scrollY, yScroll, [1, reduceMotion ? 1 : 0.92])

  const actionsScale = useTransform(scrollY, yScroll, [1, reduceMotion ? 1 : 0.96])

  const rowMinHRem = useTransform(scrollY, yScroll, [3, reduceMotion ? 3 : 2.45])
  const rowMinHeight = useMotionTemplate`${rowMinHRem}rem`

  const headerShadowAlpha = useTransform(scrollY, yScroll, [0, reduceMotion ? 0 : 0.07])
  const headerBoxShadow = useMotionTemplate`0 12px 32px rgba(0,0,0,${headerShadowAlpha})`

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 isolate">
      <Motion.div
        className="border-b border-black/10 bg-white/75 backdrop-blur-md"
        style={{ boxShadow: headerBoxShadow }}
      >
      <Motion.nav
        className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-24"
        style={{ paddingTop: navPaddingY, paddingBottom: navPaddingY }}
      >
        <Motion.div
          className="relative flex items-center justify-between"
          style={{ minHeight: rowMinHeight }}
        >
          <Motion.div
            className="relative z-20 shrink-0"
            style={{ scale: logoScale, transformOrigin: '0% 50%' }}
          >
            <Link
              to="/"
              className="flex items-center text-[#111] outline-offset-4"
              aria-label="Runway home"
              onClick={closeMenu}
            >
              <RunwayLogo
                src={NAV_WORDMARK_SRC}
                className="h-7 w-auto md:h-8"
                alt=""
              />
            </Link>
          </Motion.div>

          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-10 hidden md:flex md:items-center md:justify-center">
            <Motion.div
              className="pointer-events-auto"
              style={{ scale: actionsScale, transformOrigin: '50% 50%' }}
            >
              <NavLinkGroup />
            </Motion.div>
          </div>

          <Motion.div
            className="relative z-20 flex shrink-0 items-center gap-2"
            style={{ scale: actionsScale, transformOrigin: '100% 50%' }}
          >
            <Link
              to="/contact"
              className="hidden items-center gap-1.5 text-[0.9375rem] font-medium text-[#111] transition hover:opacity-70 md:inline-flex md:text-base"
            >
              Request access
              <ArrowRight className="h-[1.05rem] w-[1.05rem] md:h-5 md:w-5" aria-hidden />
            </Link>

            <button
              type="button"
              className="inline-flex rounded-lg p-2 text-[#111] transition hover:bg-black/[0.06] md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-menu"
              id="mobile-nav-toggle"
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
              {menuOpen ? (
                <X className="h-6 w-6" aria-hidden strokeWidth={1.75} />
              ) : (
                <Menu className="h-6 w-6" aria-hidden strokeWidth={1.75} />
              )}
            </button>
          </Motion.div>
        </Motion.div>
      </Motion.nav>

      {menuOpen ? (
        <div
          id="mobile-nav-menu"
          className="border-t border-black/10 bg-white/95 px-6 py-4 backdrop-blur-md md:hidden"
          role="navigation"
          aria-label="Mobile"
        >
          <ul className="m-0 flex list-none flex-col gap-1 p-0 text-base font-normal text-[#555]">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <SectionLink
                  href={href}
                  onNavigate={closeMenu}
                  className="block rounded-lg px-3 py-3 transition hover:bg-black/[0.04] hover:text-[#111]"
                >
                  {label}
                </SectionLink>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            onClick={closeMenu}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#111] bg-[#111] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#222]"
          >
            Request access
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      ) : null}
      </Motion.div>
    </header>
  )
}
