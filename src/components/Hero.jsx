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
            Run the business from one dashboard.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-full border-2 border-[#111] bg-[#111] px-6 py-2.5 text-sm font-medium text-white transition hover:bg-[#222]"
          >
            View demo
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full border-2 border-[#111] bg-transparent px-6 py-2.5 text-sm font-medium text-[#111] transition hover:bg-black/[0.04]"
          >
            Sign up
          </Link>
        </div>
      </div>
      <div className="rounded-2xl border border-black/10 bg-[#f5f7fa] p-5 shadow-inner md:p-6">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-4 border-b border-black/10 pb-4">
          <div>
            <p className="text-xs text-[#555]">This month</p>
            <p className="mt-1 text-lg font-semibold text-[#111]">Dashboard</p>
          </div>
          <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-[#555]">
            Signed in
          </span>
        </div>
        <div className="mb-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-black/10 bg-white p-4">
            <p className="text-[10px] uppercase tracking-wide text-[#555]">
              Revenue
            </p>
            <p className="mt-1 text-2xl font-bold tracking-tight text-[#111]">
              $84.2k
            </p>
          </div>
          <div className="rounded-xl border border-black/10 bg-white p-4">
            <p className="text-[10px] uppercase tracking-wide text-[#555]">
              Net profit
            </p>
            <p className="mt-1 text-2xl font-bold tracking-tight text-[#111]">
              $19.4k
            </p>
          </div>
          <div className="rounded-xl border border-black/10 bg-[#d4f542] p-4">
            <p className="text-[10px] font-medium uppercase tracking-wide text-[#111]/80">
              Outstanding AR
            </p>
            <p className="mt-1 text-2xl font-bold tracking-tight text-[#111]">
              $12.1k
            </p>
          </div>
        </div>
        <div className="grid gap-3 lg:grid-cols-[1fr_minmax(0,200px)]">
          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-[#555]">
              Revenue vs expenses
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
              Expense breakdown
            </p>
            <ul className="mt-3 space-y-2 text-xs text-[#111]">
              <li className="flex justify-between border-b border-black/5 pb-1">
                <span>Payroll</span>
                <span className="font-medium">38%</span>
              </li>
              <li className="flex justify-between border-b border-black/5 pb-1">
                <span>Software</span>
                <span className="font-medium">14%</span>
              </li>
              <li className="flex justify-between">
                <span>Ops</span>
                <span className="font-medium">22%</span>
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
    yRange: 28,
    scrollPull: 0.06,
    xRange: -6,
  })
  const washBRef = useParallax({
    yRange: -22,
    scrollPull: 0.08,
    xRange: 8,
  })
  const mockShellRef = useParallax({
    yRange: 24,
    scrollPull: 0.04,
    rotate: 0.35,
    scale: -0.015,
  })
  const mockInnerRef = useParallax({
    yRange: -14,
    rotate: -0.25,
    scale: 0.012,
    scrollPull: 0.025,
  })

  return (
    <section
      ref={ref}
      className={`relative overflow-x-hidden px-6 pb-20 pt-14 transition-opacity duration-700 md:px-12 md:pb-28 md:pt-20 lg:px-24 ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
    >
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
          <div className="mb-8 inline-flex rounded-full bg-[#d4f542] px-4 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-[#111]">
            Explore before signup
          </div>
          <h1 className="font-sans text-[2.75rem] font-semibold leading-[1.05] tracking-tight text-[#111] md:text-6xl lg:text-7xl xl:text-[4.5rem]">
            Know your pipeline, own your runway.
          </h1>
          <div>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#555] md:text-xl">
              Your money, clients, and calendar all in one place
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#111] bg-[#111] px-8 py-3.5 text-sm font-medium text-white shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition hover:bg-[#222]"
              >
                View demo
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#111] bg-transparent px-8 py-3.5 text-sm font-medium text-[#111] transition hover:bg-black/[0.04]"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
        <div
          ref={mockShellRef}
          data-parallax
          className="relative z-10 mx-auto mt-16 max-w-5xl transform-gpu"
        >
          <div ref={mockInnerRef} data-parallax className="transform-gpu">
            <BrowserChrome>
              <HeroProductMock />
            </BrowserChrome>
          </div>
        </div>
      </div>
    </section>
  )
}
