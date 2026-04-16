import { ArrowRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import RunwayLogo from './RunwayLogo.jsx'

const NAV_WORDMARK_SRC = `${import.meta.env.BASE_URL}runway-wordmark-nav.png`

function SectionLink({ href, children }) {
  const { pathname } = useLocation()
  if (pathname === '/' && href.startsWith('#')) {
    return (
      <a href={href} className="transition-colors hover:text-[#111]">
        {children}
      </a>
    )
  }
  const to = href.startsWith('#') ? `/${href}` : href
  return (
    <Link to={to} className="transition-colors hover:text-[#111]">
      {children}
    </Link>
  )
}

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/75 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between md:px-12 lg:px-24">
        <Link
          to="/"
          className="text-[#111] outline-offset-4"
          aria-label="Runway home"
        >
          <RunwayLogo
            src={NAV_WORDMARK_SRC}
            className="h-5 w-auto md:h-6"
            alt=""
          />
        </Link>
        <div className="flex flex-wrap items-center justify-between gap-6 md:justify-end md:gap-10">
          <div className="flex flex-wrap items-center gap-8 text-sm font-normal text-[#555]">
            <SectionLink href="#features">Features</SectionLink>
            <SectionLink href="#reviews">Reviews</SectionLink>
            <SectionLink href="#faq">FAQ</SectionLink>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1 text-sm font-medium text-[#111] transition hover:opacity-70"
          >
            Get started
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </nav>
    </header>
  )
}
