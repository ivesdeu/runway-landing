import { Link } from 'react-router-dom'
import useInView from '../hooks/useInView.js'
import useParallax from '../hooks/useParallax.js'
import RunwayLogo from './RunwayLogo.jsx'

function BrowserChrome({ children }) {
  return (
    <div className="overflow-hidden rounded-2xl border-2 border-[#111] bg-white shadow-[0_24px_64px_rgba(0,0,0,0.15)]">
      <div className="flex items-center gap-3 border-b border-black/10 bg-white px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#e8dcc0]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#d4e4ef]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#c5d9e8]" />
        </div>
        <div className="flex-1 rounded-md border border-black/10 bg-[#f5f7fa] px-3 py-1 text-center text-[11px] text-[#555]">
          app.runway
        </div>
      </div>
      <div className="bg-gradient-to-b from-white to-[#eef3f8]">{children}</div>
    </div>
  )
}

function HeroProductMock() {
  return (
    <div className="p-6 md:p-10">
      <div className="mb-8 flex flex-col gap-6 border-b border-black/10 pb-8 md:flex-row md:items-center md:justify-between">
        <div>
          <RunwayLogo className="h-4 w-auto md:h-5" alt="Runway" />
          <p className="mt-2 max-w-xl font-sans text-2xl font-semibold leading-tight tracking-tight text-[#111] md:text-3xl lg:text-4xl">
            GA4 insights. Lead tracking. Salesforce-ready. All in one dashboard.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:justify-end">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full border-2 border-[#111] bg-[#111] px-6 py-2.5 text-sm font-medium text-white transition hover:bg-[#222]"
          >
            Get early access
          </Link>
        </div>
      </div>
      <div className="rounded-2xl border border-black/10 bg-[#f5f7fa] p-5 shadow-inner md:p-6">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-4 border-b border-black/10 pb-4">
          <div>
            <p className="text-xs text-[#555]">GA4 · refreshed hourly</p>
            <p className="mt-1 text-lg font-semibold text-[#111]">Marketing dashboard</p>
          </div>
          <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-[#555]">
            Live property
          </span>
        </div>
        <div className="mb-6 grid gap-3 sm:grid-cols-4">
          {[
            { k: 'Sessions', v: '128k' },
            { k: 'Users', v: '42.1k' },
            { k: 'Conv. rate', v: '3.2%' },
            { k: 'Cost / lead', v: '$48' },
          ].map((x) => (
            <div
              key={x.k}
              className="rounded-xl border border-black/10 bg-white p-4"
            >
              <p className="text-[10px] uppercase tracking-wide text-[#555]">
                {x.k}
              </p>
              <p className="mt-1 text-xl font-bold tracking-tight text-[#111] md:text-2xl">
                {x.v}
              </p>
            </div>
          ))}
        </div>
        <div className="grid gap-3 lg:grid-cols-[1fr_minmax(0,200px)]">
          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-[#555]">
              Sessions by channel
            </p>
            <div className="flex h-24 items-end gap-1 rounded-xl border border-black/10 bg-white p-3">
              {[35, 52, 48, 70, 55, 62, 58].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-[#111]/80"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-dashed border-black/15 bg-white/80 p-4">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-[#555]">
              Top campaigns
            </p>
            <ul className="mt-3 space-y-2 text-xs text-[#111]">
              <li className="flex justify-between border-b border-black/5 pb-1">
                <span>Search · Brand</span>
                <span className="font-medium">412 leads</span>
              </li>
              <li className="flex justify-between border-b border-black/5 pb-1">
                <span>LinkedIn</span>
                <span className="font-medium">186 leads</span>
              </li>
              <li className="flex justify-between">
                <span>Email nurture</span>
                <span className="font-medium">94 leads</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const [ref, inView] = useInView()
  const washRef = useParallax({
    yRange: 32,
    scrollPull: 0.075,
    xRange: -10,
    orbit: 8,
  })
  const washBRef = useParallax({
    yRange: -30,
    scrollPull: 0.085,
    xRange: 12,
    orbit: 7,
  })
  const mockShellRef = useParallax({
    yRange: 30,
    scrollPull: 0.048,
    rotate: 0.58,
    scale: -0.026,
    rotatePull: 0.022,
  })
  const mockInnerRef = useParallax({
    yRange: -22,
    rotate: -0.48,
    scale: 0.024,
    scrollPull: 0.042,
    rotatePull: -0.02,
  })

  return (
    <section
      ref={ref}
      className={`relative overflow-x-clip px-6 pb-10 pt-14 transition-opacity duration-700 md:px-12 md:pb-14 md:pt-20 lg:px-24 lg:pb-16 ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        className="hero-glow-mesh pointer-events-none absolute z-1"
        aria-hidden
      />
      <div
        className="hero-glow-orb hero-glow-orb--a z-1"
        aria-hidden
      />
      <div
        className="hero-glow-orb hero-glow-orb--b z-1"
        aria-hidden
      />
      <div className="pointer-events-none absolute left-[8%] top-[12%] z-0 opacity-50">
        <div
          ref={washRef}
          data-parallax
          className="h-[min(420px,55vw)] w-[min(420px,55vw)] rounded-full bg-white/40 blur-3xl"
        />
      </div>
      <div className="pointer-events-none absolute bottom-[5%] right-[5%] z-0 opacity-40">
        <div
          ref={washBRef}
          data-parallax
          className="h-[min(380px,50vw)] w-[min(380px,50vw)] rounded-full bg-[#e8dcc0]/60 blur-3xl"
        />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <div className="hero-eyebrow-soft mb-8 inline-flex rounded-full bg-[#d4f542] px-4 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-[#111]">
            Your marketing data, finally in one place.
          </div>
          <h1 className="font-sans text-[2.75rem] font-semibold leading-[1.05] tracking-tight text-[#111] md:text-6xl lg:text-7xl xl:text-[4.5rem]">
            See every campaign, lead, and channel in one marketing dashboard.
          </h1>
          <div>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#555] md:text-xl">
              Runway pulls your GA4 data, tracks leads from first touch to export,
              and gets you Salesforce-ready the moment you outgrow it. Built for
              marketers who need answers, not spreadsheets.
            </p>
            <div className="mt-10 flex justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#111] bg-[#111] px-8 py-3.5 text-sm font-medium text-white shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition hover:bg-[#222]"
              >
                Get early access
              </Link>
            </div>
          </div>
        </div>
        <div
          ref={mockShellRef}
          data-parallax
          className="relative z-10 mx-auto mt-10 max-w-5xl transform-gpu md:mt-12"
        >
          <div ref={mockInnerRef} data-parallax className="transform-gpu">
            <div className="hero-mock-sway transform-gpu">
              <BrowserChrome>
                <HeroProductMock />
              </BrowserChrome>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
