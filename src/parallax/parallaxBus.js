const listeners = new Set()
let rafId = null

function flush() {
  rafId = null
  const scrollY = window.scrollY || 0
  const vh = window.innerHeight || 1
  const vw = window.innerWidth || 1
  listeners.forEach((fn) => {
    try {
      fn(scrollY, vh, vw)
    } catch {
      /* ignore listener errors */
    }
  })
}

function schedule() {
  if (rafId != null) return
  rafId = requestAnimationFrame(flush)
}

let started = false

function onScrollOrResize() {
  schedule()
}

function startParallaxBus() {
  if (started) return
  started = true
  window.addEventListener('scroll', onScrollOrResize, { passive: true })
  window.addEventListener('resize', onScrollOrResize)
  schedule()
}

/**
 * @param {(scrollY: number, vh: number, vw: number) => void} fn
 */
export function subscribeParallax(fn) {
  startParallaxBus()
  listeners.add(fn)
  schedule()
  return () => {
    listeners.delete(fn)
  }
}
