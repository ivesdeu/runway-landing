import { Check, LayoutDashboard, LineChart, FileDown } from 'lucide-react'
import useInView from '../hooks/useInView.js'
import useParallax from '../hooks/useParallax.js'

const FEATURE_MOCK_WORDMARK_SRC = `${import.meta.env.BASE_URL}runway-wordmark-mock-sm.png`

function MockShell({ children }) {
  return (
    <div className="overflow-hidden rounded-2xl border-2 border-[#111] bg-white shadow-[0_20px_48px_rgba(0,0,0,0.1)]">
      <div className="bg-gradient-to-b from-white to-[#f0f4f8] p-5 md:p-6">
        {children}
      </div>
    </div>
  )
}

function DashboardKpiMockup() {
  return (
    <MockShell>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-semibold text-[#111]">GA4 dashboard</p>
        <span className="rounded-full border border-black/10 bg-white px-2 py-0.5 text-[10px] font-medium text-[#555]">
          Refreshed hourly
        </span>
      </div>
      <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {[
          { k: 'Sessions', v: '128k' },
          { k: 'Users', v: '42.1k' },
          { k: 'Conv. rate', v: '3.2%' },
          { k: 'Cost / lead', v: '$48' },
        ].map((x) => (
          <div
            key={x.k}
            className="rounded-xl border border-black/10 bg-white p-3"
          >
            <p className="text-[10px] uppercase tracking-wide text-[#555]">
              {x.k}
            </p>
            <p className="mt-1 text-lg font-bold text-[#111]">{x.v}</p>
          </div>
        ))}
      </div>
      <div className="grid gap-3 lg:grid-cols-2">
        <div className="rounded-xl border border-black/10 bg-[#f5f7fa] p-3">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-[#555]">
            Channel performance
          </p>
          <div className="mt-2 flex h-20 items-end gap-1">
            {[30, 45, 40, 55, 50, 60, 48].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-[#111]/75"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <p className="mt-2 text-[10px] text-[#555]">
            Organic · Paid · Email · Referral
          </p>
        </div>
        <div className="rounded-xl border border-black/10 bg-white p-3">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-[#555]">
            Leads by channel
          </p>
          <ul className="mt-2 space-y-1.5 text-xs text-[#111]">
            <li className="flex justify-between">
              <span>Paid search</span>
              <span className="font-medium">412</span>
            </li>
            <li className="flex justify-between">
              <span>Organic</span>
              <span className="font-medium">268</span>
            </li>
            <li className="flex justify-between">
              <span>Email</span>
              <span className="font-medium">94</span>
            </li>
          </ul>
        </div>
      </div>
    </MockShell>
  )
}

function AgencyDeliveryMockup() {
  return (
    <MockShell>
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="min-w-0 text-sm font-semibold text-[#111]">
          Campaigns & leads
        </p>
        <img
          src={FEATURE_MOCK_WORDMARK_SRC}
          alt=""
          className="h-3 w-auto max-w-16 shrink-0 object-contain object-right md:h-3.5 md:max-w-18"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="mb-3 overflow-hidden rounded-xl border border-black/10 bg-white p-3">
        <p className="text-[10px] font-semibold uppercase text-[#555]">
          Active campaigns
        </p>
        <div className="mt-2 space-y-2 text-[11px] text-[#111]">
          {[
            { c: 'Q2 demand gen', ch: 'Paid', b: '$12k', leads: '186', st: 'Live' },
            { c: 'Webinar series', ch: 'Email', b: '$3k', leads: '94', st: 'Live' },
            { c: 'Brand search', ch: 'Organic', b: '—', leads: '268', st: 'Live' },
          ].map((row) => (
            <div
              key={row.c}
              className="flex flex-wrap items-center justify-between gap-2 border-b border-black/5 pb-2 last:border-0 last:pb-0"
            >
              <span className="font-medium">{row.c}</span>
              <span className="text-[#555]">{row.ch}</span>
              <span className="text-[#555]">{row.b}</span>
              <span>{row.leads} leads</span>
              <span className="rounded bg-[#d4f542]/50 px-1.5 py-0.5 text-[10px] font-semibold">
                {row.st}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-xl border border-black/10 bg-[#f5f7fa] p-3">
        <p className="text-[10px] font-semibold uppercase text-[#555]">
          Recent leads · UTM capture
        </p>
        <ul className="mt-2 space-y-2 text-xs text-[#111]">
          <li className="rounded-lg border border-black/10 bg-white px-2 py-1.5">
            <span className="font-medium">jordan@acme.co</span>
            <span className="mt-0.5 block text-[10px] text-[#555]">
              utm_source=google · utm_medium=cpc · utm_campaign=q2-demand
            </span>
          </li>
          <li className="rounded-lg border border-black/10 bg-white px-2 py-1.5">
            <span className="font-medium">casey@northwind.io</span>
            <span className="mt-0.5 block text-[10px] text-[#555]">
              utm_source=newsletter · utm_medium=email · utm_campaign=webinar-3
            </span>
          </li>
        </ul>
      </div>
    </MockShell>
  )
}

function WorkflowCrmMockup() {
  return (
    <MockShell>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-semibold text-[#111]">Export &amp; AI advisor</p>
        <span className="rounded-full border border-black/10 bg-white px-2 py-0.5 text-[10px] text-[#555]">
          Salesforce-ready
        </span>
      </div>
      <div className="mb-3 rounded-xl border border-black/10 bg-white p-3">
        <p className="text-[10px] font-semibold uppercase text-[#555]">
          Lead export
        </p>
        <p className="mt-1 text-xs text-[#111]">
          CSV mapped to Salesforce native lead import · mark as exported · history
          retained.
        </p>
        <p className="mt-2 rounded-md border border-dashed border-black/20 bg-[#f5f7fa] py-2 text-center text-[10px] font-medium text-[#111]">
          Download leads_export.csv
        </p>
      </div>
      <div className="space-y-2 rounded-xl border border-black/10 bg-[#f5f7fa] p-3">
        <p className="text-[10px] font-semibold uppercase text-[#555]">
          AI advisor
        </p>
        <div className="rounded-lg border border-black/10 bg-white p-2.5 text-xs text-[#111]">
          Conversion rate dipped 0.4% vs last week on paid search — suggest
          reviewing the Q2 demand gen ad set and landing page alignment.
        </div>
        <p className="text-[10px] leading-relaxed text-[#555]">
          Reads GA4 trends and campaign data to flag anomalies and suggest next
          actions — you stay in control.
        </p>
      </div>
    </MockShell>
  )
}

const blocks = [
  {
    headline: 'GA4 dashboard without the Friday spreadsheet ritual',
    bullets: [
      'Sessions, users, conversion rate, and cost per lead — refreshed hourly, no manual exports.',
      'Channel performance reports: sessions, CVR, and leads for organic, paid, email, and referral so you know what is working.',
    ],
    Mock: DashboardKpiMockup,
  },
  {
    headline: 'Campaign tracking and lead management with full attribution',
    bullets: [
      'Manage every active campaign with budget, channel, lead count, and status in one table.',
      'Every lead tagged with UTM source, medium, and campaign at capture — attribution from first click through export.',
    ],
    Mock: AgencyDeliveryMockup,
  },
  {
    headline: 'Salesforce-ready export and an AI copilot on your marketing data',
    bullets: [
      'One-click CSV export mapped to Salesforce’s native lead import template — mark leads exported and keep your history intact.',
      'AI Advisor reads GA4 trends and campaign data to surface anomalies, flag drops in conversion rate, and suggest next actions.',
    ],
    Mock: WorkflowCrmMockup,
  },
]

function ScrollBlock({ headline, bullets, Mock, reverse }) {
  const [ref, inView] = useInView()
  // No yRange / scrollPull: translateY shifts the painted mock vs. layout box vs. copy.
  // Stronger x / rotate / orbit / scale for depth without vertical drift.
  const mockRef = useParallax({
    yRange: 0,
    xRange: reverse ? 26 : -26,
    rotate: reverse ? 1.35 : -1.35,
    scale: 0.048,
    scrollPull: 0,
    orbit: reverse ? -22 : 22,
    rotatePull: reverse ? 0.028 : -0.028,
  })

  return (
    <div
      ref={ref}
      className={`grid gap-12 py-24 transition-opacity duration-700 md:grid-cols-2 md:items-stretch md:gap-16 lg:gap-20 ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        className={`relative z-10 flex flex-col justify-center ${reverse ? 'md:order-2' : ''}`}
      >
        <h2 className="font-sans text-3xl font-semibold tracking-tight text-[#111] md:text-4xl lg:text-5xl">
          {headline}
        </h2>
        <ul className="mt-8 space-y-4">
          {bullets.map((b) => (
            <li key={b} className="flex gap-3 text-[#555]">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-[#111]">
                <Check className="h-3.5 w-3.5" aria-hidden />
              </span>
              <span className="text-base leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
      </div>
      <div
        ref={mockRef}
        data-parallax
        className={`relative z-0 flex transform-gpu items-center ${reverse ? 'md:order-1' : ''}`}
      >
        <div className="w-full">
          <Mock />
        </div>
      </div>
    </div>
  )
}

export default function FeatureScroll() {
  return (
    <section
      id="features"
      className="scroll-mt-24 overflow-x-hidden border-t border-black/10 bg-white/25 px-6 backdrop-blur-[2px] md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-7xl pt-12 md:pt-16 lg:pt-20">
        {blocks.map((b, i) => (
          <ScrollBlock
            key={b.headline}
            {...b}
            reverse={i % 2 === 1}
          />
        ))}
        <div className="border-t border-black/10 py-16 md:py-24">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[#111]">
            How it works
          </p>
          <h3 className="mt-2 max-w-xl font-sans text-2xl font-semibold tracking-tight text-[#111] md:text-3xl lg:text-4xl">
            Connect GA4. Track leads. Export when you scale.
          </h3>
          <p className="mt-3 max-w-2xl text-sm text-[#555] md:text-base">
            Three steps from raw analytics to Salesforce-ready leads — without
            losing history along the way.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              {
                n: 1,
                title: 'Connect GA4',
                line: 'Runway pulls sessions, conversions, and channel data from your property automatically.',
                Icon: LayoutDashboard,
              },
              {
                n: 2,
                title: 'Track leads & campaigns',
                line: 'Tag every lead with UTM data and manage campaigns by channel and budget in one place.',
                Icon: LineChart,
              },
              {
                n: 3,
                title: 'Export to Salesforce',
                line: 'One click generates a Salesforce-ready CSV — your data stays yours.',
                Icon: FileDown,
              },
            ].map(({ n, title, line, Icon }) => (
              <div
                key={n}
                className="group flex h-full flex-col rounded-2xl border-2 border-[#111] bg-white/90 p-5 shadow-[0_8px_28px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_14px_40px_rgba(0,0,0,0.1)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#d4f542] font-mono text-xs font-bold text-[#111]">
                    {n}
                  </span>
                  <Icon
                    className="h-5 w-5 shrink-0 text-[#555] opacity-80 transition group-hover:text-[#111] group-hover:opacity-100"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </div>
                <p className="mt-4 font-sans text-base font-semibold leading-snug tracking-tight text-[#111]">
                  {title}
                </p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#555]">
                  {line}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
