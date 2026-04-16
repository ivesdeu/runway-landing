import {
  Check,
  LayoutDashboard,
  PenLine,
  SlidersHorizontal,
  RefreshCw,
  Plug,
} from 'lucide-react'
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
        <p className="text-sm font-semibold text-[#111]">Dashboard</p>
        <span className="rounded-full border border-black/10 bg-white px-2 py-0.5 text-[10px] font-medium text-[#555]">
          This period
        </span>
      </div>
      <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {[
          { k: 'Revenue', v: '$42.1k' },
          { k: 'MRR view', v: '$9.8k' },
          { k: 'Net profit', v: '$11.2k' },
          { k: 'Outstanding AR', v: '$6.4k' },
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
            Revenue vs expenses
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
        </div>
        <div className="rounded-xl border border-black/10 bg-white p-3">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-[#555]">
            Expense breakdown
          </p>
          <ul className="mt-2 space-y-1.5 text-xs text-[#111]">
            <li className="flex justify-between">
              <span>Payroll</span>
              <span className="font-medium">41%</span>
            </li>
            <li className="flex justify-between">
              <span>Software</span>
              <span className="font-medium">12%</span>
            </li>
            <li className="flex justify-between">
              <span>Ops</span>
              <span className="font-medium">19%</span>
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
          Customers & delivery
        </p>
        <img
          src={FEATURE_MOCK_WORDMARK_SRC}
          alt=""
          className="h-3 w-auto max-w-16 shrink-0 object-contain object-right md:h-3.5 md:max-w-18"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="mb-3 rounded-xl border border-black/10 bg-white p-3">
        <p className="text-[10px] font-semibold uppercase text-[#555]">
          Customers
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {['Northwind LLC', 'Harbor Studio', 'Brightline Co.'].map((n) => (
            <span
              key={n}
              className="rounded-lg border border-black/10 bg-[#f5f7fa] px-2 py-1 text-[11px] text-[#111]"
            >
              {n}
            </span>
          ))}
        </div>
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        <div className="rounded-xl border border-black/10 bg-[#f5f7fa] p-3">
          <p className="text-[10px] font-semibold uppercase text-[#555]">
            Projects
          </p>
          <ul className="mt-2 space-y-2 text-xs text-[#111]">
            <li className="flex justify-between border-b border-black/5 pb-1">
              <span>Website refresh</span>
              <span className="text-[#555]">Active</span>
            </li>
            <li className="flex justify-between">
              <span>Retainer — Q2</span>
              <span className="text-[#555]">Invoiced</span>
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/10 bg-white p-3">
          <p className="text-[10px] font-semibold uppercase text-[#555]">
            Timesheet
          </p>
          <ul className="mt-2 space-y-2 text-xs text-[#111]">
            <li className="flex justify-between">
              <span>Mon · Design</span>
              <span className="font-medium">4.5h</span>
            </li>
            <li className="flex justify-between">
              <span>Tue · Client call</span>
              <span className="font-medium">1.0h</span>
            </li>
            <li className="flex justify-between">
              <span>Wed · Build</span>
              <span className="font-medium">6.0h</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-3 rounded-xl border border-dashed border-black/15 bg-white/90 p-3">
        <p className="text-[10px] text-[#555]">Invoices</p>
        <p className="mt-1 text-xs text-[#111]">
          INV-1042 · Line items · PDF/export as shipped
        </p>
      </div>
    </MockShell>
  )
}

function WorkflowCrmMockup() {
  return (
    <MockShell>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-semibold text-[#111]">
          CRM events & automation
        </p>
        <span className="rounded-full border border-black/10 bg-white px-2 py-0.5 text-[10px] text-[#555]">
          When DB provisioned
        </span>
      </div>
      <div className="mb-3 rounded-xl border border-black/10 bg-white p-3">
        <p className="text-[10px] font-semibold uppercase text-[#555]">
          CRM event
        </p>
        <p className="mt-1 text-xs text-[#111]">
          Logged: proposal sent — tied to customer record (when signed in).
        </p>
      </div>
      <div className="space-y-2 rounded-xl border border-black/10 bg-[#f5f7fa] p-3">
        <p className="text-[10px] font-semibold uppercase text-[#555]">
          Workflow rule
        </p>
        <div className="rounded-lg border border-black/10 bg-white p-2.5 text-xs text-[#111]">
          On invoice paid → create task + queue notification (stub path may apply
          until integrations are complete).
        </div>
        <p className="text-[10px] leading-relaxed text-[#555]">
          Uses workflow_rules, workflow_runs, workflow_outbox, and crm_events
          after you run the workflow SQL (or equivalent setup). Not a separate
          Zapier product.
        </p>
      </div>
    </MockShell>
  )
}

const blocks = [
  {
    headline: 'Run the business from one dashboard',
    bullets: [
      'Track revenue, a recurring-style view where shown, net profit, expenses, and outstanding AR.',
      'Charts for revenue vs expenses and expense breakdown on the current period.',
    ],
    Mock: DashboardKpiMockup,
  },
  {
    headline: 'Agency and consultant delivery, tied to money',
    bullets: [
      'Customers for client records; Projects for delivery; Timesheet for hours against work.',
      'Invoices with line items and PDF/export; collect online when Stripe Checkout is connected and you are signed in.',
    ],
    Mock: AgencyDeliveryMockup,
  },
  {
    headline: 'Light finance plus CRM context, when you wire the backend',
    bullets: [
      'Keep CRM events and workflow notes alongside money when workflow tables are enabled.',
      'Rules that create tasks, log CRM events, or queue notifications—automation you define; some outbound actions may be stubs until you finish integrations.',
    ],
    Mock: WorkflowCrmMockup,
  },
]

function ScrollBlock({ headline, bullets, Mock, reverse }) {
  const [ref, inView] = useInView()
  // No yRange / scrollPull: translateY shifts the painted mock vs. layout box, so copy
  // looked misaligned next to text and alternated oddly per row. Keep subtle x/rotate only.
  const mockRef = useParallax({
    yRange: 0,
    xRange: reverse ? 5 : -5,
    rotate: reverse ? 0.28 : -0.28,
    scale: 0.015,
    scrollPull: 0,
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
        <p className="mb-5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[#111] md:mb-6">
          What&apos;s inside
        </p>
        <p className="max-w-3xl pb-8 text-sm leading-relaxed text-[#555] md:text-base">
          Dashboard, Customers, Income &amp; expenses, Transactions, Invoices,
          Projects, Timesheet, Performance, Retention, Insights, Marketing,
          Advisor, and Settings—each view slices the same underlying data.
        </p>
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
            From demo to a wired-up stack
          </h3>
          <p className="mt-3 max-w-2xl text-sm text-[#555] md:text-base">
            Optional pieces stay off until you configure them—Stripe, Advisor,
            and cloud sync work when your backend is ready.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                n: 1,
                title: 'Open Runway',
                line: 'Demo first, or sign in when you want sync.',
                Icon: LayoutDashboard,
              },
              {
                n: 2,
                title: 'Log what matters',
                line: 'Customers, money, and time in one place.',
                Icon: PenLine,
              },
              {
                n: 3,
                title: 'Tune Settings',
                line: 'Currency, tax, terms, budgets, logos, profile.',
                Icon: SlidersHorizontal,
              },
              {
                n: 4,
                title: 'Sync across browsers',
                line: 'Same email—use Sync after you sign in.',
                Icon: RefreshCw,
              },
              {
                n: 5,
                title: 'Add power when ready',
                line: 'Stripe, Advisor, CSV in/out—after Supabase + edges.',
                Icon: Plug,
              },
            ].map(({ n, title, line, Icon }) => (
              <div
                key={n}
                className={`group flex h-full flex-col rounded-2xl border-2 border-[#111] bg-white/90 p-5 shadow-[0_8px_28px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_14px_40px_rgba(0,0,0,0.1)] ${
                  n === 5
                    ? 'sm:col-span-2 sm:max-w-xl sm:justify-self-center lg:col-span-1 lg:max-w-none lg:justify-self-stretch'
                    : ''
                }`}
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
