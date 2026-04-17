import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { AnimatedGroup } from '@/components/ui/animated-group.jsx'

const smoothEase = [0.22, 1, 0.36, 1]

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      y: 14,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: smoothEase,
      },
    },
  },
}

/** @typedef {{ src: string; alt: string; height: number }} CustomerLogo */

/**
 * @param {object} props
 * @param {CustomerLogo[]} [props.customers]
 * @param {string} [props.className]
 * @param {string} [props.ctaTo] — react-router `to` for the hover CTA
 */
export function CustomersSection({
  customers = [],
  className,
  ctaTo = '#reviews',
}) {
  return (
    <section
      className={`border-t border-black/10 bg-white/20 py-12 backdrop-blur-[2px] md:py-16 ${className ?? ''}`}
    >
      <div className="group relative m-auto max-w-5xl px-6 md:px-8">
        <div className="pointer-events-none absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100">
          <Link
            to={ctaTo}
            className="block text-sm font-medium text-[#111] duration-150 hover:opacity-75"
          >
            <span>Meet our partners</span>
            <ChevronRight className="ml-1 inline-block size-3" aria-hidden />
          </Link>
        </div>
        <AnimatedGroup
          variants={{
            container: {
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.07,
                  delayChildren: 0.04,
                },
              },
            },
            item: transitionVariants.item,
          }}
          viewport={{ once: true, margin: '0px 0px 140px 0px' }}
          className="relative z-0 mx-auto mt-2 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-8 transition-opacity duration-500 group-hover:opacity-50 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-10 md:mt-4 lg:grid-cols-4"
        >
          {customers.map((logo) => (
            <div
              key={logo.src}
              className="flex h-16 items-center justify-center sm:h-[4.5rem]"
            >
              <img
                className="max-h-full w-full max-w-[10.5rem] object-contain object-center"
                src={logo.src}
                alt={logo.alt}
                height={logo.height}
                loading="eager"
                decoding="async"
              />
            </div>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  )
}
