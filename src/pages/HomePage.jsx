import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import { CustomersSection } from '../components/ui/customers-section.jsx'
import { customerLogos } from '../data/customerLogos.js'
import FeatureScroll from '../components/FeatureScroll.jsx'
import FeatureTabs from '../components/FeatureTabs.jsx'
import Testimonials from '../components/Testimonials.jsx'
import FAQ from '../components/FAQ.jsx'
import CTASection from '../components/CTASection.jsx'

export default function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.slice(1)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location.hash, location.pathname])

  return (
    <main className="relative overflow-x-hidden">
      <Hero />
      <CustomersSection customers={customerLogos} />
      <FeatureScroll />
      <FeatureTabs />
      <Testimonials />
      <FAQ />
      <CTASection />
    </main>
  )
}
