import { useEffect, useRef, useState } from 'react'
import useInView from '../../hooks/useInView'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import cx from './cx'
import { PauseIcon, PlayIcon } from './icons'

/**
 * Responsive WebP image. Pass an entry from src/content/media.js (or any { src, srcSet, width, height }).
 *
 * <Picture image={media.coachable.scheduleV2} alt="..." sizes="(min-width: 1024px) 60vw, 100vw" />
 *
 * - width/height come from the entry, so the browser reserves space (no layout shift).
 * - Lazy-loaded unless `priority` (then eager + fetchpriority high). Use priority only above the fold.
 * - alt: defaults to the entry's alt. Pass alt="" for decorative images (hero tiles).
 * - className styles the <picture>, imgClassName the <img> (default: block, full width, auto height).
 */
export function Picture({ image, alt, sizes = '100vw', priority = false, className, imgClassName, ...rest }) {
  const resolvedAlt = alt ?? image.alt
  if (import.meta.env.DEV && resolvedAlt === undefined) {
    console.warn(`Picture: missing alt for ${image.src}. Pass alt="" if it is decorative.`)
  }
  return (
    <picture className={className}>
      <source type="image/webp" srcSet={image.srcSet} sizes={sizes} />
      <img
        src={image.src}
        width={image.width}
        height={image.height}
        alt={resolvedAlt ?? ''}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        className={cx('block h-auto w-full', imgClassName)}
        {...rest}
      />
    </picture>
  )
}

function prefersSavingData() {
  return typeof navigator !== 'undefined' && navigator.connection?.saveData === true
}

/**
 * Muted, looping, inline video that only plays while it is on screen.
 * Pass an entry from src/content/media.js (or any { sources: [{ src, type }], poster, width, height, label }).
 *
 * <Video video={media.coachable.productDemo} className="rounded-media overflow-hidden" />
 *
 * - The poster is only requested once the video is within about one screen of the viewport,
 *   so below-the-fold posters never compete with the hero for bandwidth.
 * - Autoplays only when in view AND the visitor has not asked for reduced motion (or Save-Data).
 *   Otherwise it shows the poster. Always pauses off-screen.
 * - A visible play/pause button (WCAG 2.2.2). The visitor's choice wins over autoplay until reload.
 * - label: accessible name (defaults to the entry's label). Add a caption in a <figcaption> if useful.
 * - paused: force pause from outside.
 * - decorative: aria-hidden, no button. Only when a parent offers its own pause control.
 * - controls={false} hides the button; only do that if a parent control pauses this video.
 * - Crop: put an aspect-* class plus h-full in videoClassName (object-cover is on by default).
 * - className styles the wrapper (a one-cell grid); buttonClassName moves or restyles the button.
 */
export function Video({
  video,
  label,
  paused = false,
  decorative = false,
  controls = true,
  threshold = 0.25,
  className,
  videoClassName,
  buttonClassName,
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { threshold })
  const near = useInView(ref, { rootMargin: '100% 0px', once: true })
  const reducedMotion = usePrefersReducedMotion()
  const [choice, setChoice] = useState(null) // null | 'play' | 'pause'
  const [playing, setPlaying] = useState(false)
  const name = label ?? video.label

  const autoplayAllowed = !reducedMotion && !prefersSavingData()
  const shouldPlay = !paused && inView && (choice === 'play' || (choice === null && autoplayAllowed))

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.muted = true
    if (shouldPlay) {
      const attempt = el.play()
      if (attempt) attempt.catch(() => setPlaying(false))
    } else {
      el.pause()
    }
  }, [shouldPlay])

  const showButton = controls && !decorative
  // Reserve space before the poster loads. Skipped when the caller crops with its own aspect-* class.
  const ownRatio = /(^|\s)aspect-/.test(videoClassName ?? '')

  // Video and button share one grid cell, so the button stays on the video even if the wrapper is stretched.
  return (
    <div className={cx('relative grid content-start', className)}>
      <video
        ref={ref}
        width={video.width}
        height={video.height}
        poster={near ? video.poster : undefined}
        muted
        loop
        playsInline
        preload="none"
        aria-label={decorative ? undefined : name}
        aria-hidden={decorative || undefined}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        style={ownRatio ? undefined : { aspectRatio: `${video.width} / ${video.height}` }}
        className={cx('col-start-1 row-start-1 block h-auto w-full bg-surface-2 object-cover', videoClassName)}
      >
        {video.sources.map((source) => (
          <source key={source.src} src={source.src} type={source.type} />
        ))}
      </video>
      {showButton && (
        <button
          type="button"
          onClick={() => setChoice(playing ? 'pause' : 'play')}
          aria-label={playing ? `Pause video: ${name}` : `Play video: ${name}`}
          className={cx(
            'glass col-start-1 row-start-1 m-3 inline-flex size-10 items-center justify-center self-end justify-self-end rounded-full border border-line text-fg transition-colors duration-150 hover:bg-fg/15',
            buttonClassName,
          )}
        >
          {playing ? <PauseIcon size={14} /> : <PlayIcon size={14} />}
        </button>
      )}
    </div>
  )
}
