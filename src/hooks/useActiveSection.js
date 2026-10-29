import { useEffect, useState } from 'react'

/**
 * Returns the id of the section the reader is in, from an ordered list of section ids.
 *
 * A section counts as current once its top has passed `line` (a fraction of the viewport height
 * from the top, default 0.35) and it still reaches that line. The last section also becomes current
 * when it is fully visible, so a short Contact section can be reached at the end of the page.
 * IntersectionObserver only; no scroll listeners.
 */
export default function useActiveSection(ids, { line = 0.35 } = {}) {
  const [active, setActive] = useState(null)
  const key = ids.join(',')

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined
    const els = key
      .split(',')
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    if (els.length === 0) return undefined

    const hits = new Map()
    let lastFullyVisible = false

    const update = () => {
      let current = null
      for (const el of els) if (hits.get(el)) current = el.id
      if (lastFullyVisible) current = els[els.length - 1].id
      if (current) setActive(current)
    }

    // The band is the top `line` of the viewport. The last intersecting section in document order wins.
    const bottom = Math.round((1 - line) * 100)
    const band = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) hits.set(entry.target, entry.isIntersecting)
        update()
      },
      { rootMargin: `0px 0px -${bottom}% 0px`, threshold: 0 },
    )
    els.forEach((el) => band.observe(el))

    const end = new IntersectionObserver(
      ([entry]) => {
        lastFullyVisible = entry.intersectionRatio >= 0.98
        update()
      },
      { threshold: [0, 0.5, 0.98, 1] },
    )
    end.observe(els[els.length - 1])

    return () => {
      band.disconnect()
      end.disconnect()
    }
  }, [key, line])

  return active
}
