import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import useInView from '../hooks/useInView.js'

const CTA_MOCK_WORDMARK = `${import.meta.env.BASE_URL}runway-wordmark-cta.png`

function FooterHeroMockup() {
  return (
    <div className="relative z-0 mx-auto mt-16 max-w-lg md:mt-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10 scale-110 rounded-[32px] opacity-40"
        style={{
          background:
            'radial-gradient(circle at 30% 20%, rgba(212,245,66,0.35) 0%, transparent 55%)',
        }}
      />
      <div className="overflow-hidden rounded-2xl border-2 border-[#111] bg-white shadow-[0_24px_64px_rgba(0,0,0,0.12)]">
        <div className="bg-gradient-to-b from-white to-[#f0f4f8] p-5">
          <div className="flex items-center justify-between border-b border-black/10 pb-3">
            <div>
              <img
                src={CTA_MOCK_WORDMARK}
                alt="Runway"
                className="block h-4 w-auto max-w-28 object-contain object-left md:h-5"
              />
              <p className="mt-1.5 text-sm font-semibold text-[#111]">This month</p>
            </div>
            <div className="flex gap-1">
              <span className="h-2 w-2 rounded-full bg-black/15" />
              <span className="h-2 w-2 rounded-full bg-black/15" />
              <span className="h-2 w-2 rounded-full bg-emerald-600" />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-black/10 bg-white p-3">
              <p className="text-[10px] text-[#555]">Revenue</p>
              <p className="text-2xl font-bold text-[#111]">$38k</p>
            </div>
            <div className="rounded-xl border border-black/10 bg-[#f5f7fa] p-3">
              <p className="text-[10px] text-[#555]">Outstanding AR</p>
              <p className="text-2xl font-bold text-[#111]">$9.2k</p>
            </div>
          </div>
          <div className="mt-4 space-y-2 rounded-xl border border-black/10 bg-white p-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#111]">Invoices · draft</span>
              <span className="rounded-md border border-black/10 bg-[#d4f542] px-2 py-0.5 text-[10px] font-semibold text-[#111]">
                PDF ready
              </span>
            </div>
            <p className="text-[10px] text-[#555]">
              Stripe Checkout when connected · same email sync when signed in
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CTASection() {
  const [ref, inView] = useInView()

  return (
    <section
      id="cta"
      ref={ref}
      className={`relative scroll-mt-24 overflow-x-hidden border-t border-black/10 bg-white/35 px-6 py-24 backdrop-blur-[1px] transition-opacity duration-700 md:px-12 lg:px-24 ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="relative mx-auto max-w-4xl text-center">
        <div className="relative z-20">
          <h2 className="font-sans text-4xl font-semibold tracking-tight text-[#111] md:text-5xl lg:text-6xl">
            Explore the UI, then connect your backend.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-[#555]">
            View demo for the feature walkthrough, or sign up to talk with us.
            Optional Stripe and Advisor stay off until your backend is ready.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#111] bg-[#111] px-8 py-3.5 text-sm font-medium text-white shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition hover:bg-[#222]"
            >
              View demo
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#111] bg-transparent px-8 py-3.5 text-sm font-medium text-[#111] transition hover:bg-black/[0.04]"
            >
              Sign up
            </Link>
          </div>
        </div>
        <FooterHeroMockup />
      </div>
    </section>
  )
}
