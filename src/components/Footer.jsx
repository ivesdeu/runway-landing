import { Link } from 'react-router-dom'
import RunwayLogo from './RunwayLogo.jsx'

const groups = [
  {
    title: 'Product',
    links: [
      { to: '/#features', label: 'Features' },
      { to: '/contact', label: 'Pricing' },
    ],
  },
  {
    title: 'Account',
    links: [
      { href: '#', label: 'Sign in' },
      { to: '/contact', label: 'Request access' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '#', label: 'Privacy policy' },
      { href: '#', label: 'Terms' },
    ],
  },
]

function NavLink({ to, href, label }) {
  const className =
    'text-sm text-[#555] transition-colors duration-200 hover:text-[#111]'

  if (to) {
    return (
      <Link to={to} className={className}>
        {label}
      </Link>
    )
  }
  return (
    <a href={href} className={className}>
      {label}
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="border-t-2 border-[#111] bg-white px-6 py-16 md:px-12 md:py-20 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10 lg:items-start">
          <div className="lg:col-span-4">
            <Link
              to="/"
              className="group inline-flex flex-col gap-3 text-[#111] outline-offset-4"
              aria-label="Runway home"
            >
              <RunwayLogo
                className="h-7 w-auto opacity-100 transition-opacity group-hover:opacity-80 md:h-8"
                alt=""
              />
              <span className="max-w-xs text-sm leading-relaxed text-[#555]">
                Your marketing data, finally in one place.
              </span>
            </Link>
          </div>

          <nav
            className="grid max-w-full grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 sm:gap-x-10 lg:col-span-8 lg:max-w-max lg:justify-self-end lg:gap-x-14"
            aria-label="Footer"
          >
            {groups.map((g) => (
              <div key={g.title} className="min-w-0 space-y-4">
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#111]">
                  {g.title}
                </p>
                <ul className="space-y-3">
                  {g.links.map((item) => (
                    <li key={item.label}>
                      <NavLink
                        to={item.to}
                        href={item.href}
                        label={item.label}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-14 border-t border-black/10 pt-10">
          <ul className="grid gap-5 text-sm leading-snug text-[#555] sm:grid-cols-3 sm:gap-8">
            <li className="border-l-2 border-[#d4f542] pl-4">
              GA4 metrics refresh hourly — no manual exports.
            </li>
            <li className="border-l-2 border-[#d4f542] pl-4">
              Leads capture UTMs at first touch for full attribution.
            </li>
            <li className="border-l-2 border-[#d4f542] pl-4">
              Salesforce-ready CSV export with history preserved.
            </li>
          </ul>
        </div>

        <p className="mt-10 border-t border-black/10 pt-8 text-xs text-[#777]">
          © {new Date().getFullYear()} Runway. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
