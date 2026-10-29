import { useEffect, useState } from 'react'

/**
 * True once the page has loaded, the web fonts are in, and two frames have painted the text with them.
 * Media gated on this is requested after the hero text's final paint (the LCP), so it never competes with it.
 * Used for the hero wall. Reserve the media's box before it mounts (no layout shift).
 */
export default function useAfterFirstPaint() {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    let cancelled = false
    const loaded = new Promise((resolve) => {
      if (document.readyState === 'complete') resolve()
      else window.addEventListener('load', resolve, { once: true })
    })
    const fonts = document.fonts?.ready ?? Promise.resolve()
    Promise.all([loaded, fonts]).then(() =>
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          if (!cancelled) setReady(true)
        }),
      ),
    )
    return () => {
      cancelled = true
    }
  }, [])
  return ready
}
