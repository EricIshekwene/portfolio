import { useEffect, useState } from 'react'

/**
 * Whether `ref.current` intersects the viewport.
 * Options: rootMargin (default '0px'), threshold (default 0), once (stop observing after the first hit).
 * Without IntersectionObserver support it reports true, so content and media still work.
 */
export default function useInView(ref, { rootMargin = '0px', threshold = 0, once = false } = {}) {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return undefined
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
        if (entry.isIntersecting && once) observer.disconnect()
      },
      { rootMargin, threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, rootMargin, threshold, once])

  return inView
}
