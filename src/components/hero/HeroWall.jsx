import { useEffect, useRef, useState } from 'react'
import cx from '../ui/cx'
import { heroColumns } from './heroTiles'
import useAfterFirstPaint from './useAfterFirstPaint'
import './heroWall.css'

// Desktop tiles are about a quarter of the viewport wide. Phones get their own 400w source (see TileImage).
const DESKTOP_SIZES = '26vw'
const PHONE_MEDIA = '(max-width: 47.99rem)' // below Tailwind's md (48rem)
const TILE_FRAME = 'overflow-hidden rounded-media border border-line bg-surface-2'

/**
 * Decorative wall of real product screens behind the hero name (DECISIONS #5B, DECISIONS-2 #1A).
 * A flat grid rotated -5deg, columns drifting in alternating directions. Everything inside is aria-hidden and
 * unfocusable. `motion` comes from useWallMotion: 'off' (static), 'paused' or 'running'. There is no Pause button
 * by design; see useWallMotion for the recorded WCAG 2.2.2 deviation.
 *
 * Tiles load after the text (DECISIONS #5). The wall starts at opacity 0 with no media. After window `load` the
 * tiles mount, and once the ones in view have loaded and decoded the wall fades in. Two consequences:
 * - Tile downloads stay off the LCP critical path.
 * - A tile is never the LCP element, because Chrome ignores images first painted inside an opacity-0 ancestor
 *   that then fades in. The hero name stays the LCP.
 * Under reduced motion the wall appears without the fade.
 */
export default function HeroWall({ motion = 'off', className }) {
  const stage = useRevealAfterLoad()
  const mounted = stage.value !== 'waiting'
  return (
    <div
      ref={stage.ref}
      aria-hidden="true"
      data-motion={motion}
      className={cx('hero-wall pointer-events-none absolute inset-0 overflow-hidden select-none', className)}
    >
      <div
        className={cx(
          'absolute inset-0 transition-opacity duration-700 ease-standard motion-reduce:transition-none',
          stage.value === 'shown' ? 'opacity-100' : 'opacity-0',
        )}
      >
        {/* Anchored above the top edge and rotated about its top, so one tile group always covers the view. */}
        <div className="absolute -top-[10%] left-1/2 flex w-[150%] origin-top -translate-x-1/2 -rotate-5 gap-3 md:w-[128%] md:gap-4">
          {heroColumns.map((column, index) => (
            <div
              key={index}
              className={cx('min-w-0 flex-1', column.desktopOnly && 'max-md:hidden')}
              style={{ marginTop: column.offset }}
            >
              <div
                className="hero-wall__track motion-reduce:animate-none"
                data-direction={index % 2 === 0 ? 'up' : 'down'}
                style={{ '--drift-duration': `${column.duration}s` }}
              >
                {/* The group is rendered twice for a seamless loop. pb matches gap so both halves are equal. */}
                {[0, 1].map((copy) => (
                  <div key={copy} className="flex flex-col gap-3 pb-3 md:gap-4 md:pb-4">
                    {column.tiles.map((tile) => (
                      <div key={`${copy}-${tile.key}`} className={TILE_FRAME}>
                        <div className={tile.aspect}>
                          {mounted && <TileImage tile={tile} />}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/**
 * 'waiting' (no media) → 'loading' after load and fonts (media mounts) → 'shown' once the in-view tiles have
 * loaded and decoded and one frame has painted them at opacity 0. Capped at 4 s so a stalled image never keeps
 * the wall hidden.
 */
function useRevealAfterLoad() {
  const ref = useRef(null)
  const mounted = useAfterFirstPaint()
  const [shown, setShown] = useState(false)

  useEffect(() => {
    if (!mounted || shown || !ref.current) return undefined
    let cancelled = false
    const inView = (el) => {
      const r = el.getBoundingClientRect()
      return r.width > 0 && r.bottom > 0 && r.right > 0 && r.top < window.innerHeight && r.left < window.innerWidth
    }
    const ready = (img) =>
      new Promise((resolve) => {
        const done = () => (img.decode ? img.decode().catch(() => {}).then(resolve) : resolve())
        if (img.complete && img.naturalWidth) done()
        else {
          img.addEventListener('load', done, { once: true })
          img.addEventListener('error', resolve, { once: true })
        }
      })
    const waits = [...ref.current.querySelectorAll('img')].filter(inView).map(ready)
    const cap = new Promise((resolve) => setTimeout(resolve, 4000))
    Promise.race([Promise.all(waits), cap]).then(() => {
      // Two frames: the decoded tiles paint once at opacity 0 before the fade starts.
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          if (!cancelled) setShown(true)
        }),
      )
    })
    return () => {
      cancelled = true
    }
  }, [mounted, shown])

  return { ref, value: !mounted ? 'waiting' : shown ? 'shown' : 'loading' }
}

/**
 * <picture> with a phone source first: a single 400w file cropped to the tile, so a phone downloads only what it
 * shows. Width and height come from the desktop entry; the aspect box sizes the tile either way, so the different
 * crop never shifts layout. `fit` positions the desktop image in its box (the phone crops already match the box).
 */
function TileImage({ tile }) {
  const { image, phone, fit } = tile
  return (
    <picture className="block h-full">
      {phone && <source media={PHONE_MEDIA} type="image/webp" srcSet={phone} />}
      <source type="image/webp" srcSet={image.srcSet} sizes={DESKTOP_SIZES} />
      <img
        src={image.src}
        width={image.width}
        height={image.height}
        alt=""
        loading="lazy"
        decoding="async"
        className={cx('block h-full w-full object-cover', fit)}
      />
    </picture>
  )
}
