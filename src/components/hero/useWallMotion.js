import { useState, useSyncExternalStore } from 'react'
import useInView from '../../hooks/useInView'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'

/**
 * Hero wall motion, gated by the visitor's device (DECISIONS-2 #1A). Returns one of:
 * - 'off':     never moves. Reduced motion, Save-Data, fewer than 4 CPU cores, or less than 4 GB of memory.
 *              Cores and memory only count where the browser reports them (deviceMemory is Chromium only).
 * - 'paused':  a capable device, but the tab is hidden or the hero is off screen. Resumes where it stopped.
 * - 'running': drifting.
 *
 * Accepted deviation, recorded on purpose: WCAG 2.2.2 (Pause, Stop, Hide) expects a pause control for motion that
 * starts on its own and lasts more than 5 seconds. Eric chose device-gated motion with no Pause button and accepted
 * that tradeoff (DECISIONS-2 #1A, 2026-10-28). Visitors who ask for reduced motion always get a static wall, and the
 * wall is decorative (aria-hidden, behind a scrim), so no content depends on it.
 */
export default function useWallMotion(ref) {
  const reducedMotion = usePrefersReducedMotion()
  const [capable] = useState(deviceCanDrift)
  const visible = usePageVisible()
  const onScreen = useInView(ref)

  if (reducedMotion || !capable) return 'off'
  return visible && onScreen ? 'running' : 'paused'
}

/** Checked once per page load. A device does not gain cores mid-visit, and Save-Data changes are rare enough. */
function deviceCanDrift() {
  if (typeof navigator === 'undefined') return false
  if (navigator.connection?.saveData === true) return false
  if (window.matchMedia?.('(prefers-reduced-data: reduce)').matches) return false
  const cores = navigator.hardwareConcurrency
  if (typeof cores === 'number' && cores > 0 && cores < 4) return false
  const memory = navigator.deviceMemory
  if (typeof memory === 'number' && memory > 0 && memory < 4) return false
  return true
}

function subscribeVisibility(onChange) {
  document.addEventListener('visibilitychange', onChange)
  return () => document.removeEventListener('visibilitychange', onChange)
}

function usePageVisible() {
  return useSyncExternalStore(
    subscribeVisibility,
    () => document.visibilityState !== 'hidden',
    () => false,
  )
}
