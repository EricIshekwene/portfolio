import { useSyncExternalStore } from 'react'

const QUERY = '(prefers-reduced-motion: reduce)'

function subscribe(onChange) {
  if (typeof window === 'undefined' || !window.matchMedia) return () => {}
  const mql = window.matchMedia(QUERY)
  mql.addEventListener('change', onChange)
  return () => mql.removeEventListener('change', onChange)
}

function getSnapshot() {
  return typeof window !== 'undefined' && !!window.matchMedia && window.matchMedia(QUERY).matches
}

/** True when the visitor asked the OS for reduced motion. Updates live. */
export default function usePrefersReducedMotion() {
  // Server snapshot assumes reduced motion, so nothing animates before we know.
  return useSyncExternalStore(subscribe, getSnapshot, () => true)
}
