import { TestimonialsColumn } from '@/components/ui/testimonials-columns-1.jsx'
import useInView from '../hooks/useInView.js'

const testimonials = [
  {
    text: 'I used to spend two hours every Friday pulling GA4 data into a spreadsheet. Runway cut that to zero.',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=160&h=160&fit=crop&crop=faces&q=80',
    name: 'Marketing Manager',
    role: 'Placeholder quote',
  },
  {
    text: 'The Salesforce export alone saved us the migration headache when our biggest client scaled up.',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&h=160&fit=crop&crop=faces&q=80',
    name: 'Agency Owner',
    role: 'Placeholder quote',
  },
  {
    text: 'UTM capture at lead creation finally matches what we report in channel reviews — one source of truth.',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=160&h=160&fit=crop&crop=faces&q=80',
    name: 'Growth lead',
    role: 'B2B SaaS',
  },
  {
    text: 'We spin up a workspace per retainer client. GA4 + campaigns in one login keeps the team sane.',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=160&h=160&fit=crop&crop=faces&q=80',
    name: 'Ops director',
    role: 'Small agency',
  },
  {
    text: 'AI Advisor caught a CVR dip on paid search before our weekly standup — swapped a few headlines and recovered.',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=160&h=160&fit=crop&crop=faces&q=80',
    name: 'Demand gen',
    role: 'In-house',
  },
  {
    text: 'Hourly GA4 refresh means Monday metrics are already there. No more “export and pray” routines.',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=160&h=160&fit=crop&crop=faces&q=80',
    name: 'Freelance marketer',
    role: 'Multi-client',
  },
  {
    text: 'White-label lets us ship dashboards that look like the client’s brand without rebuilding from scratch.',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=160&h=160&fit=crop&crop=faces&q=80',
    name: 'Account lead',
    role: 'Agency',
  },
  {
    text: 'Channel report broke out email vs paid so we could defend budget with numbers, not vibes.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&h=160&fit=crop&crop=faces&q=80',
    name: 'Marketing manager',
    role: 'Mid-market',
  },
  {
    text: 'Salesforce-ready CSV meant RevOps stopped asking “which column maps to Lead Source?”',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=160&h=160&fit=crop&crop=faces&q=80',
    name: 'RevOps',
    role: 'Series A',
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

export default function Testimonials() {
  const [headerRef, headerInView] = useInView()

  return (
    <section
      id="reviews"
      className="relative scroll-mt-24 overflow-x-hidden border-t border-black/10 bg-transparent py-20 md:py-24"
    >
      <div className="pointer-events-none absolute left-1/2 top-[8%] z-0 -translate-x-1/2">
        <div className="h-[min(420px,80vw)] w-[min(420px,80vw)] rounded-full bg-[#d4f542]/20 blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl px-4 md:px-8">
        <div
          ref={headerRef}
          className={`mx-auto flex max-w-[540px] flex-col items-center justify-center transition-all duration-700 ease-out ${
            headerInView ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}
        >
          <div className="flex justify-center">
            <div className="rounded-lg border border-black/10 bg-white/80 px-4 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[#111]">
              Social proof
            </div>
          </div>
          <h2 className="mt-5 text-center font-sans text-xl font-bold tracking-tight text-[#111] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            What marketers say about Runway
          </h2>
          <p className="mt-5 text-center text-[#555]">
            Placeholder quotes you can swap for real customers — focused on GA4,
            leads, campaigns, and Salesforce-ready workflows.
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-h-[740px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  )
}
