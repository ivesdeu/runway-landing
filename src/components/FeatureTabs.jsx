import { useState } from 'react'
import useInView from '../hooks/useInView.js'
import useParallax from '../hooks/useParallax.js'

const tabs = [
  {
    id: 'ga4',
    label: 'GA4 dashboard',
    body: 'Sessions, users, conversion rate, and cost per lead — refreshed hourly, no manual exports. Your GA4 property stays the source of truth; Runway surfaces the slices marketers actually use in weekly reviews.',
    preview: 'ga4',
  },
  {
    id: 'campaigns',
    label: 'Campaign tracking',
    body: 'Manage all active campaigns with budget, channel, lead count, and status in one table. See what is live, what is draining budget, and where leads are landing without hopping between ad platforms and spreadsheets.',
    preview: 'campaigns',
  },
  {
    id: 'leads',
    label: 'Lead management',
    body: 'Every lead tagged with UTM source, medium, and campaign at capture. Full attribution from first click through nurture so you can answer which initiative actually sourced the pipeline.',
    preview: 'leads',
  },
  {
    id: 'salesforce',
    label: 'Salesforce export',
    body: 'One-click CSV export mapped to Salesforce’s native lead import template. Mark leads as exported and keep your history intact — so when a client graduates to CRM, you do not lose the story in the migration.',
    preview: 'salesforce',
  },
]

function TabPreview({ kind }) {
  const shell =
    'rounded-2xl border-2 border-[#111] bg-gradient-to-b from-white to-[#f0f4f8] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.08)]'

  if (kind === 'ga4') {
    return (
      <div className={shell}>
        <div className="mb-3 flex items-center justify-between">
          <p className="text-xs font-semibold text-[#111]">GA4 overview</p>
          <span className="text-[10px] text-[#555]">Hourly sync</span>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[
            ['Sessions', '128k'],
            ['Users', '42.1k'],
            ['CVR', '3.2%'],
            ['CPL', '$48'],
          ].map(([k, v]) => (
            <div
              key={k}
              className="rounded-xl border border-black/10 bg-white p-2.5"
            >
              <p className="text-[9px] uppercase tracking-wide text-[#555]">
                {k}
              </p>
              <p className="mt-1 text-sm font-bold text-[#111]">{v}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-xl border border-black/10 bg-[#f5f7fa] p-2">
          <p className="text-[9px] text-[#555]">Sessions trend</p>
          <div className="mt-2 flex h-12 items-end gap-0.5">
            {[40, 55, 48, 62, 50, 58, 52].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-[#111]/70"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (kind === 'campaigns') {
    return (
      <div className={shell}>
        <p className="text-xs font-semibold text-[#111]">Campaigns</p>
        <div className="mt-3 space-y-2 text-[11px]">
          {[
            ['Q2 demand gen', 'Paid', '$12k', '186', 'Live'],
            ['Webinar', 'Email', '$3k', '94', 'Live'],
            ['Brand search', 'Organic', '—', '268', 'Live'],
          ].map(([name, ch, budget, leads, st]) => (
            <div
              key={name}
              className="flex flex-wrap items-center justify-between gap-1 rounded-lg border border-black/10 bg-white px-2 py-2 text-[#111]"
            >
              <span className="font-medium">{name}</span>
              <span className="text-[#555]">{ch}</span>
              <span className="text-[#555]">{budget}</span>
              <span>{leads} leads</span>
              <span className="rounded bg-[#d4f542]/60 px-1 text-[9px] font-semibold">
                {st}
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (kind === 'leads') {
    return (
      <div className={shell}>
        <p className="text-xs font-semibold text-[#111]">Leads</p>
        <div className="mt-3 space-y-2">
          <div className="rounded-lg border border-black/10 bg-white px-2.5 py-2">
            <p className="text-xs font-medium text-[#111]">jordan@acme.co</p>
            <p className="mt-1 text-[10px] text-[#555]">
              utm_source=google · utm_medium=cpc · utm_campaign=q2-demand
            </p>
          </div>
          <div className="rounded-lg border border-black/10 bg-white px-2.5 py-2">
            <p className="text-xs font-medium text-[#111]">casey@northwind.io</p>
            <p className="mt-1 text-[10px] text-[#555]">
              utm_source=newsletter · utm_medium=email · utm_campaign=webinar-3
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (kind === 'salesforce') {
    return (
      <div className={shell}>
        <p className="text-xs font-semibold text-[#111]">Export</p>
        <p className="mt-1 text-[10px] text-[#555]">
          Salesforce native lead import mapping
        </p>
        <div className="mt-4 rounded-xl border border-dashed border-black/20 bg-white p-4 text-center">
          <p className="text-xs font-medium text-[#111]">leads_export.csv</p>
          <p className="mt-2 rounded-full border border-[#111] bg-[#111] px-3 py-1.5 text-[10px] font-medium text-white">
            Download
          </p>
          <p className="mt-3 text-[10px] text-[#555]">
            Mark as exported · history retained
          </p>
        </div>
      </div>
    )
  }

  return null
}

export default function FeatureTabs() {
  const [active, setActive] = useState(tabs[0].id)
  const current = tabs.find((t) => t.id === active) ?? tabs[0]
  const [ref, inView] = useInView()
  const orbL = useParallax({
    yRange: 58,
    scrollPull: 0.13,
    xRange: -24,
    orbit: 32,
  })
  const orbR = useParallax({
    yRange: -52,
    scrollPull: 0.15,
    xRange: 26,
    orbit: 28,
  })
  const previewRef = useParallax({
    yRange: 44,
    xRange: -18,
    rotate: 1.05,
    scale: 0.042,
    orbit: 26,
  })
  return (
    <section
      ref={ref}
      className={`relative scroll-mt-24 overflow-x-hidden px-6 py-24 transition-opacity duration-700 md:px-12 lg:px-24 ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        ref={orbL}
        data-parallax
        className="pointer-events-none absolute -left-[18%] top-[8%] z-0 h-[min(480px,72vw)] w-[min(480px,72vw)] rounded-full bg-white/50 blur-[100px]"
      />
      <div
        ref={orbR}
        data-parallax
        className="pointer-events-none absolute -right-[20%] bottom-[-5%] z-0 h-[min(400px,65vw)] w-[min(400px,65vw)] rounded-full bg-[#e8dcc0]/50 blur-[90px]"
      />
      <div className="relative z-10 mx-auto max-w-7xl">
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[#111]">
          Surfaces
        </p>
        <h2 className="mt-3 max-w-3xl font-sans text-3xl font-semibold tracking-tight text-[#111] md:text-4xl lg:text-5xl">
          Everything in the Runway marketing dashboard
        </h2>
        <div className="relative z-20 mt-10 flex flex-wrap gap-2 md:gap-3">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActive(t.id)}
              className={`rounded-full border px-3 py-2 text-left text-xs font-medium transition sm:text-sm ${
                active === t.id
                  ? 'border-[#111] bg-[#111] text-white shadow-[0_8px_24px_rgba(0,0,0,0.15)]'
                  : 'border-black/10 bg-white/70 text-[#555] hover:border-black/20 hover:text-[#111]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="relative z-10 mt-16 grid gap-12 lg:mt-20 lg:grid-cols-2 lg:items-center lg:gap-x-16 lg:gap-y-10 xl:gap-x-20">
          <div className="min-w-0">
            <p className="text-base leading-relaxed text-[#555] md:text-lg">
              {current.body}
            </p>
          </div>
          <div ref={previewRef} className="min-w-0 transform-gpu" data-parallax>
            <TabPreview kind={current.preview} />
          </div>
        </div>
      </div>
    </section>
  )
}
