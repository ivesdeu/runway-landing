import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Mail, Send } from 'lucide-react'

export default function ContactPage() {
  const [status, setStatus] = useState('idle')
  const [submitError, setSubmitError] = useState(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitError(null)
    setStatus('sending')
    const formEl = e.currentTarget
    try {
      const body = new URLSearchParams(new FormData(formEl)).toString()
      const res = await fetch('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })
      if (!res.ok) throw new Error('Submit failed')
      setStatus('sent')
    } catch {
      setStatus('idle')
      setSubmitError(
        'We could not send that just now. Please try again or email us below.',
      )
    }
  }

  return (
    <main className="relative overflow-x-hidden px-6 pb-24 pt-12 md:px-12 md:pt-16 lg:px-24">
      <div className="mx-auto max-w-2xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#555] transition hover:text-[#111]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Back to home
        </Link>

        <p className="mt-10 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[#111]">
          Contact
        </p>
        <h1 className="mt-3 font-sans text-4xl font-bold tracking-tight text-[#111] md:text-5xl">
          Request access or a demo
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-[#555]">
          Tell us about your GA4 properties, how you track leads today, and when you
          might need Salesforce-ready export. We reply within one business day with
          next steps for early access.
        </p>

        <div className="mt-8 rounded-2xl border border-black/10 bg-white/80 p-6 shadow-[0_16px_48px_rgba(0,0,0,0.08)] md:p-8">
          {status === 'sent' ? (
            <div className="py-8 text-center">
              <p className="text-lg font-semibold text-[#111]">
                Thanks — your message is in.
              </p>
              <p className="mt-2 text-sm text-[#555]">
                We&apos;ll reply shortly. You can also email us directly below.
              </p>
              <Link
                to="/"
                className="mt-8 inline-block text-sm font-medium text-[#111] underline underline-offset-4 hover:opacity-80"
              >
                Return to the homepage
              </Link>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden" aria-hidden="true">
                <label>
                  Do not fill this out:{' '}
                  <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>
              {submitError ? (
                <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">
                  {submitError}
                </p>
              ) : null}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#111]"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-[#111] outline-none ring-0 transition placeholder:text-[#888] focus:border-[#111]"
                  placeholder="Alex Rivera"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#111]"
                >
                  Work email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-[#111] outline-none focus:border-[#111]"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-[#111]"
                >
                  Business name{' '}
                  <span className="font-normal text-[#888]">(optional)</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={form.company}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-[#111] outline-none focus:border-[#111]"
                  placeholder="Your studio or firm"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#111]"
                >
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="mt-1.5 w-full resize-y rounded-xl border border-black/15 bg-white px-4 py-3 text-[#111] outline-none focus:border-[#111]"
                  placeholder="GA4 property IDs, how you track campaigns and leads today, number of clients or brands, and when you might need Salesforce export."
                />
              </div>
              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#111] bg-[#111] px-8 py-3 text-sm font-medium text-white transition hover:bg-[#222] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Send className="h-4 w-4" aria-hidden />
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </button>
                <a
                  href="mailto:contact@ivesdeu.com?subject=Runway%20inquiry"
                  className="inline-flex items-center justify-center gap-2 text-sm font-medium text-[#555] transition hover:text-[#111]"
                >
                  <Mail className="h-4 w-4" aria-hidden />
                  contact@ivesdeu.com
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}
