import { useEffect, useRef } from 'react'
import { subscribeParallax } from '../parallax/parallaxBus.js'

function clamp(v, a, b) {
  return Math.min(b, Math.max(a, v))
}

/**
 * Imperative scroll parallax: updates ref.current.style.transform on a rAF bus (no React re-renders).
 * @param {object} [options]
 * @param {number} [options.yRange] Viewport-center delta → vertical px
 * @param {number} [options.xRange] Viewport-center delta → horizontal px
 * @param {number} [options.rotate] Max extra rotate (deg) from delta
 * @param {number} [options.scale] Delta → scale offset (subtle)
 * @param {number} [options.scrollPull] Extra -scrollY * scrollPull (depth / “far” layers)
 * @param {number} [options.scrollPullX] Extra scrollY * factor for horizontal drift
 * @param {number} [options.rotatePull] scrollY * this * 0.01 → extra rotate
 * @param {number} [options.orbit] Amplitude (px) of sin/cos motion from scroll
 * @param {number} [options.scaleMin]
 * @param {number} [options.scaleMax]
 */
export default function useParallax(options = {}) {
  const ref = useRef(null)
  const optsRef = useRef(options)

  useEffect(() => {
    optsRef.current = options
  })

  useEffect(() => {
    return subscribeParallax((scrollY, vh, vw) => {
      const el = ref.current
      if (!el) return

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        el.style.transform = ''
        el.style.willChange = 'auto'
        return
      }

      const o = optsRef.current
      const rect = el.getBoundingClientRect()
      if (rect.width === 0 && rect.height === 0) return

      const delta =
        (rect.top + rect.height / 2 - vh / 2) / Math.max(vh, 1)

      const yRange = o.yRange ?? 0
      const xRange = o.xRange ?? 0
      const rotate = o.rotate ?? 0
      const scale = o.scale ?? 0

      let ty = delta * yRange - scrollY * (o.scrollPull ?? 0)
      let tx = delta * xRange + scrollY * (o.scrollPullX ?? 0)

      const orbit = o.orbit ?? 0
      if (orbit !== 0) {
        const t = scrollY * 0.0018 + vw * 0.0003
        tx += Math.sin(t) * orbit
        ty += Math.cos(t * 1.27) * orbit * 0.65
      }

      const rz = delta * rotate + scrollY * (o.rotatePull ?? 0) * 0.008
      const sc =
        1 +
        delta * scale +
        scrollY * (o.scalePull ?? 0) * 0.00012
      const clamped = clamp(sc, o.scaleMin ?? 0.9, o.scaleMax ?? 1.1)

      const rx = o.rotateX ?? 0
      if (rx !== 0) {
        el.style.transform = `translate3d(${tx}px, ${ty}px, 0) rotateX(${delta * rx}deg) rotate(${rz}deg) scale(${clamped})`
      } else {
        el.style.transform = `translate3d(${tx}px, ${ty}px, 0) rotate(${rz}deg) scale(${clamped})`
      }

      el.style.willChange = 'transform'
    })
  }, [])

  return ref
}
