import { useEffect, useRef, useState } from 'react'

/**
 * @param {{ threshold?: number; rootMargin?: string; once?: boolean }} [options]
 */
export default function useInView(options = {}) {
  const { threshold = 0.12, rootMargin = '0px 0px -8% 0px', once = true } =
    options
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            if (once) observer.disconnect()
          }
        })
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return [ref, inView]
}
