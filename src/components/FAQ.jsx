import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import useInView from '../hooks/useInView.js'

const faqs = [
  {
    q: 'Do I need to sign in to try Runway?',
    a: 'No. You can explore the UI in demo mode, then sign in when you want cloud sync across browsers. Stripe Checkout, server-backed CRM events, workflow runs, and Advisor need your Supabase project and deployed edge paths configured.',
  },
  {
    q: 'How does cloud sync work?',
    a: 'When signed in with the same email, use Sync to pull the same account on another browser. Until then, you are in local exploration and demo-first territory—the UI is built to stay usable when optional backend pieces are off.',
  },
  {
    q: 'Does Runway connect to my bank automatically?',
    a: 'No live two-way bank sync is claimed here. The app supports CSV import into the transaction log, with an undo for the last import. Journal CSV export is there for your accountant.',
  },
  {
    q: 'What is workflow automation in Runway?',
    a: 'After you provision workflow tables (workflow_rules, workflow_runs, workflow_outbox) and related setup, you can define automation you control—rules that create tasks, log CRM events, or queue notifications. Some outbound actions may be stubs until you complete integrations; this is not “Zapier included.”',
  },
  {
    q: 'What does Advisor do?',
    a: 'When Advisor is configured (Supabase plus edge AI), you get task-style help such as daily briefs, follow-up drafts, variance and month-over-month explanations, weekly recap, and general Q&A. CRM flows merge drafts into a shape you confirm—they do not silently rewrite your CRM everywhere. Optional tables like ai_usage_events, ai_feedback, and ai_action_outcomes support logging when they exist.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  const [ref, inView] = useInView()

  return (
    <section
      id="faq"
      ref={ref}
      className={`relative scroll-mt-24 overflow-x-hidden px-6 py-24 transition-opacity duration-700 md:px-12 lg:px-24 ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="pointer-events-none absolute -right-[12%] top-1/4 z-0 h-[min(360px,60vw)] w-[min(360px,60vw)] rounded-full bg-white/40 blur-[90px]" />
      <div className="relative z-10 mx-auto max-w-3xl">
        <h2 className="text-center font-sans text-3xl font-semibold tracking-tight text-[#111] md:text-4xl lg:text-5xl">
          Straight answers
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-[#555] md:text-base">
          Runway is not a black-box magic platform. Cloud sync, Stripe, AI
          Advisor, and workflow automation depend on your Supabase configuration
          and deployed functions. The product stays calm when those pieces are
          off—explore first, turn on production features when you wire them up.
        </p>
        <div className="mt-12 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={item.q}
                className="rounded-2xl border-2 border-[#111] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-medium text-[#111] md:text-base">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#555] transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden
                  />
                </button>
                {isOpen ? (
                  <div className="border-t border-black/10 px-5 pb-4 pt-0">
                    <p className="pt-3 text-sm leading-relaxed text-[#555]">
                      {item.a}
                    </p>
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
