import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import useInView from '../hooks/useInView.js'

const faqs = [
  {
    q: 'How does Runway connect to GA4?',
    a: 'You connect your GA4 property during onboarding. Runway pulls sessions, conversions, and channel data on an hourly refresh cadence so dashboards stay current without manual exports.',
  },
  {
    q: 'How are leads attributed to campaigns?',
    a: 'Every lead is tagged with UTM source, medium, and campaign at capture. Attribution follows from first click through nurture so you can tie pipeline back to the initiative that sourced it.',
  },
  {
    q: 'What does the Salesforce export include?',
    a: 'One click generates a CSV mapped to Salesforce’s native lead import template. You can mark leads as exported and retain full history in Runway so nothing disappears when a client graduates to CRM.',
  },
  {
    q: 'What does AI Advisor do?',
    a: 'AI Advisor reads your GA4 trends and connected campaign data to surface anomalies, flag drops in conversion rate, and suggest next actions. It is a copilot — you review and decide what to change.',
  },
  {
    q: 'Can I manage multiple clients or brands?',
    a: 'Yes. Multi-workspace support keeps each client or brand isolated with its own team, settings, and data. White-label options let you apply custom logos and accent colors per workspace.',
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
          Questions, answered plainly
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-[#555] md:text-base">
          Runway is built for marketers who want GA4, campaigns, and leads in one
          place — with a clean path to Salesforce when you are ready. No black-box
          magic; connect data, track leads, export on your terms.
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
