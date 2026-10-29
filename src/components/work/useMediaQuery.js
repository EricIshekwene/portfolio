import { useCallback, useSyncExternalStore } from 'react'

/**
 * Whether a CSS media query matches, kept live with matchMedia. Layout stays in CSS; this only switches
 * semantics that CSS cannot (ARIA roles, tab stops), so it is a media query, not a JS width check.
 * `fallback` is used where matchMedia is missing.
 */
export default function useMediaQuery(query, fallback = false) {
  const subscribe = useCallback(
    (onChange) => {
      if (typeof window === 'undefined' || !window.matchMedia) return () => {}
      const mql = window.matchMedia(query)
      mql.addEventListener('change', onChange)
      return () => mql.removeEventListener('change', onChange)
    },
    [query],
  )
  const getSnapshot = () => (typeof window !== 'undefined' && window.matchMedia ? window.matchMedia(query).matches : fallback)
  return useSyncExternalStore(subscribe, getSnapshot, () => fallback)
}
