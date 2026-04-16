import { TestimonialsColumn } from '@/components/ui/testimonials-columns-1.jsx'
import useInView from '../hooks/useInView.js'

const testimonials = [
  {
    text: 'One dashboard for profit, AR, and burn by category. I stopped exporting three spreadsheets every Monday.',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=160&h=160&fit=crop&crop=faces&q=80',
    name: 'Priya N.',
    role: 'Founder-operator',
  },
  {
    text: 'Customers plus projects plus timesheet finally live next to invoices. My small agency actually uses it.',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&h=160&fit=crop&crop=faces&q=80',
    name: 'Elena V.',
    role: 'Consulting lead',
  },
  {
    text: 'CSV import with undo saved me once. Journal export goes straight to our accountant—USD today, EUR when we need it.',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=160&h=160&fit=crop&crop=faces&q=80',
    name: 'Marcus R.',
    role: 'Studio owner',
  },
  {
    text: 'Retention and Performance pages read like ops views, not generic AI fluff. Same numbers as the dashboard, different slice.',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=160&h=160&fit=crop&crop=faces&q=80',
    name: "Jamie O.",
    role: 'Ops, small team',
  },
  {
    text: 'Advisor drafts a follow-up; I edit and send. That “you confirm” flow is what I wanted—not silent writes.',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=160&h=160&fit=crop&crop=faces&q=80',
    name: 'Sofia M.',
    role: 'Account manager',
  },
  {
    text: 'Stripe Checkout only after we connected Supabase and deployed the edge path. Copy matched reality, which built trust.',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=160&h=160&fit=crop&crop=faces&q=80',
    name: 'David C.',
    role: 'Finance + delivery',
  },
  {
    text: 'Budgets per category on Expenses with progress bars—simple, and it matches how I think about burn.',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=160&h=160&fit=crop&crop=faces&q=80',
    name: 'Rachel K.',
    role: 'Founder',
  },
  {
    text: 'Workflow rules that log CRM events next to money—once the SQL was in, it finally felt like one system.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&h=160&fit=crop&crop=faces&q=80',
    name: 'Tom A.',
    role: 'Light CRM + finance',
  },
  {
    text: 'Demo first, sign in later. Sync across browsers with the same email is exactly how we onboarded the cofounder.',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=160&h=160&fit=crop&crop=faces&q=80',
    name: 'Amelia B.',
    role: 'Agency partner',
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
              Operators
            </div>
          </div>
          <h2 className="mt-5 text-center font-sans text-xl font-bold tracking-tight text-[#111] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            What teams say about Runway
          </h2>
          <p className="mt-5 text-center text-[#555]">
            Quotes from founders, agencies, and small ops leads using Runway for
            clients, money, and time—no logo wall, no enterprise theater.
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
