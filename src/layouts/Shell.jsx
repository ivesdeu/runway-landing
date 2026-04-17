import { useLayoutEffect } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import { AnimatePresence, motion as Motion, useReducedMotion } from 'framer-motion'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

const transition = {
  duration: 0.32,
  ease: [0.22, 1, 0.36, 1],
}

export default function Shell() {
  const location = useLocation()
  const outlet = useOutlet()
  const reduceMotion = useReducedMotion()

  useLayoutEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
  }, [location.pathname, location.hash])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[linear-gradient(160deg,#b8d4ea_0%,#cce0ed_35%,#e8dcc0_100%)] font-sans text-[#111] antialiased">
      <div className="page-grain" aria-hidden />
      <div className="relative z-[2] flex min-h-screen flex-col">
        <Nav />
        <div className="flex-1">
          <AnimatePresence mode="wait" initial={false}>
            {outlet ? (
              <Motion.div
                key={location.pathname}
                className="min-h-0"
                initial={
                  reduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: 12, filter: 'blur(6px)' }
                }
                animate={
                  reduceMotion
                    ? { opacity: 1 }
                    : { opacity: 1, y: 0, filter: 'blur(0px)' }
                }
                exit={
                  reduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: -10, filter: 'blur(4px)' }
                }
                transition={transition}
              >
                {outlet}
              </Motion.div>
            ) : null}
          </AnimatePresence>
        </div>
        <Footer />
      </div>
    </div>
  )
}
