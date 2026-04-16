import { useState } from 'react'
import useInView from '../hooks/useInView.js'
import useParallax from '../hooks/useParallax.js'

const tabs = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    body: 'KPIs and charts for the current period: revenue, a recurring-style view where shown, net profit, expenses, outstanding AR, revenue vs expenses, and expense breakdown. Performance, Retention, Insights, and Marketing are analytics views over the same underlying data—each page shows what its title implies, not generic “AI insights.”',
    preview: 'dashboard',
  },
  {
    id: 'customers',
    label: 'Customers',
    body: 'Light CRM for the people and companies you work with. Tie delivery to Projects and money to Income, Expenses, and Transactions as implemented in the app—when signed in for server-backed CRM events.',
    preview: 'customers',
  },
  {
    id: 'money',
    label: 'Income & expenses',
    body: 'Track money in and out with category-aware views. Transactions add to your totals as the modals describe. Invoices support line items and PDF/export; collect online payments with Stripe Checkout when you are signed in, Stripe is connected, and the create-checkout edge path is deployed—not “Stripe always on.”',
    preview: 'money',
  },
  {
    id: 'projects',
    label: 'Projects & timesheet',
    body: 'Projects organize delivery alongside financials. Timesheet logs hours against your work—built with agencies and consultancies in mind.',
    preview: 'projects',
  },
  {
    id: 'advisor',
    label: 'Advisor',
    body: 'When Supabase and edge AI are configured, task-style help: daily brief, follow-up drafts, variance and month-over-month, weekly recap, and general Q&A. CRM-oriented flows can merge a contact request and CRM proposal drafts into a client shape—marketed as turning a conversation into a draft you confirm, not silent auto-writes. Optional logging to ai_usage_events, ai_feedback, and ai_action_outcomes when those tables exist.',
    preview: 'advisor',
  },
]

function TabPreview({ kind }) {
  const shell =
    'rounded-2xl border-2 border-[#111] bg-gradient-to-b from-white to-[#f0f4f8] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.08)]'
  if (kind === 'dashboard') {
    return (
      <div className={shell}>
        <div className="mb-3 flex items-center justify-between">
          <p className="text-xs font-semibold text-[#111]">Dashboard</p>
          <span className="text-[10px] text-[#555]">This month</span>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {['Revenue', 'Expenses', 'Net', 'AR'].map((k) => (
            <div
              key={k}
              className="rounded-xl border border-black/10 bg-white p-2.5"
            >
              <p className="text-[9px] uppercase tracking-wide text-[#555]">
                {k}
              </p>
              <div className="mt-1 h-5 w-14 rounded bg-black/10" />
            </div>
          ))}
        </div>
        <div className="mt-3 flex gap-2">
          <div className="flex-1 rounded-xl border border-black/10 bg-[#f5f7fa] p-2">
            <p className="text-[9px] text-[#555]">Revenue vs expenses</p>
            <div className="mt-2 flex h-14 items-end gap-0.5">
              {[40, 55, 48, 62, 50, 58, 52].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-[#111]/70"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
          <div className="w-[38%] rounded-xl border border-black/10 bg-white p-2">
            <p className="text-[9px] text-[#555]">Expense breakdown</p>
            <div className="mt-2 space-y-1">
              <div className="h-2 rounded-full bg-black/10">
                <div className="h-2 w-[60%] rounded-full bg-[#111]" />
              </div>
              <div className="h-2 rounded-full bg-black/10">
                <div className="h-2 w-[35%] rounded-full bg-[#111]/60" />
              </div>
            </div>
          </div>
        </div>
        <p className="mt-3 text-[10px] leading-relaxed text-[#555]">
          Analytics: Performance · Retention · Insights · Marketing
        </p>
      </div>
    )
  }
  if (kind === 'customers') {
    return (
      <div className={shell}>
        <p className="text-xs font-semibold text-[#111]">Customers</p>
        <div className="mt-3 space-y-2">
          {[
            { n: 'Acme Design Co.', t: 'Company' },
            { n: 'Jordan Lee', t: 'Contact' },
          ].map((row) => (
            <div
              key={row.n}
              className="flex items-center justify-between rounded-xl border border-black/10 bg-white px-3 py-2.5"
            >
              <div>
                <p className="text-xs font-medium text-[#111]">{row.n}</p>
                <p className="text-[10px] text-[#555]">{row.t}</p>
              </div>
              <span className="text-[10px] text-[#555]">View</span>
            </div>
          ))}
        </div>
      </div>
    )
  }
  if (kind === 'money') {
    return (
      <div className={shell}>
        <p className="text-xs font-semibold text-[#111]">Income & expenses</p>
        <div className="mt-3 space-y-2">
          <div className="rounded-xl border border-black/10 bg-white px-3 py-2">
            <p className="text-[10px] text-[#555]">Category</p>
            <p className="text-xs text-[#111]">Software · $420</p>
          </div>
          <div className="rounded-xl border border-black/10 bg-[#f5f7fa] px-3 py-2">
            <p className="text-[10px] text-[#555]">Transactions</p>
            <p className="text-xs text-[#111]">Rolls into your totals</p>
          </div>
          <div className="rounded-xl border border-dashed border-black/20 bg-white px-3 py-2">
            <p className="text-[10px] text-[#555]">Invoice INV-2201</p>
            <p className="text-xs text-[#111]">
              Line items · Stripe Checkout when connected
            </p>
          </div>
        </div>
      </div>
    )
  }
  if (kind === 'projects') {
    return (
      <div className={shell}>
        <div className="grid gap-2 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold text-[#111]">Projects</p>
            <div className="mt-2 space-y-2">
              {['Brand sprint', 'Ongoing retainer'].map((p) => (
                <div
                  key={p}
                  className="rounded-lg border border-black/10 bg-white px-2.5 py-2 text-xs text-[#111]"
                >
                  {p}
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#111]">Timesheet</p>
            <div className="mt-2 space-y-1.5 text-[11px] text-[#111]">
              <div className="flex justify-between rounded-lg border border-black/10 bg-[#f5f7fa] px-2 py-1.5">
                <span>Mon</span>
                <span className="font-medium">3.5h</span>
              </div>
              <div className="flex justify-between rounded-lg border border-black/10 bg-[#f5f7fa] px-2 py-1.5">
                <span>Tue</span>
                <span className="font-medium">5.0h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  if (kind === 'advisor') {
    return (
      <div className={shell}>
        <p className="text-xs font-semibold text-[#111]">Advisor</p>
        <p className="mt-1 text-[10px] text-[#555]">When Advisor is configured</p>
        <ul className="mt-3 space-y-2 text-xs text-[#111]">
          <li className="rounded-lg border border-black/10 bg-white px-2.5 py-2">
            Daily brief
          </li>
          <li className="rounded-lg border border-black/10 bg-white px-2.5 py-2">
            Weekly recap · MoM variance
          </li>
          <li className="rounded-lg border border-black/10 bg-[#d4f542]/40 px-2.5 py-2">
            Follow-up draft — you confirm before send
          </li>
        </ul>
        <p className="mt-2 text-[10px] leading-relaxed text-[#555]">
          Optional telemetry tables when present: ai_usage_events, ai_feedback,
          ai_action_outcomes.
        </p>
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
    yRange: 24,
    scrollPull: 0.05,
    xRange: -8,
  })
  const orbR = useParallax({
    yRange: -20,
    scrollPull: 0.06,
    xRange: 10,
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
        <h2 className="mt-3 max-w-2xl font-sans text-3xl font-semibold tracking-tight text-[#111] md:text-4xl lg:text-5xl">
          What Runway actually shows in the app
        </h2>
        <div className="relative z-20 mt-10 flex flex-wrap gap-3">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActive(t.id)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                active === t.id
                  ? 'border-[#111] bg-[#111] text-white shadow-[0_8px_24px_rgba(0,0,0,0.15)]'
                  : 'border-black/10 bg-white/70 text-[#555] hover:border-black/20 hover:text-[#111]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        {/* No parallax on the preview: translateY pulls the mock up over the tab row */}
        <div className="relative z-10 mt-16 grid gap-12 lg:mt-20 lg:grid-cols-2 lg:items-start lg:gap-x-20 lg:gap-y-10">
          <div className="min-w-0">
            <p className="text-base leading-relaxed text-[#555] md:text-lg">
              {current.body}
            </p>
          </div>
          <div className="min-w-0 lg:pl-6 xl:pl-10">
            <TabPreview kind={current.preview} />
          </div>
        </div>
      </div>
    </section>
  )
}
