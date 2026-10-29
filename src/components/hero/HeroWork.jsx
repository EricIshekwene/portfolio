import { AmazonLogo, EeroLogo } from '../logos'
import cx from '../ui/cx'
import { ArrowRightIcon } from '../ui/icons'
import { heroWork } from '../../content/hero'
import { media } from '../../content/media'

/*
 * Logo sizing. Every logo sits on one shared baseline: the bottom of the logo slot minus BASELINE_PAD, which leaves
 * room below for the two marks that descend (Amazon's smile, Coachable's swoosh). Heights are tuned by eye so the
 * three marks carry about the same visual weight: eero is light lowercase, Kino is heavy capitals, Coachable is
 * mostly its mark. Phones use slightly smaller logos so the row fits at 320 px.
 */
const SLOT = 'flex h-8 items-end pb-2.5 md:h-9'

/** Raster logos (white WebP) for Coachable and Kino. .logo-mono turns them black in the light theme. */
function RasterLogo({ image, className }) {
  return (
    <img
      src={image.src}
      srcSet={image.srcSet}
      sizes="160px"
      width={image.width}
      height={image.height}
      alt=""
      decoding="async"
      fetchPriority="low"
      className={cx('logo-mono block w-auto max-w-none', className)}
    />
  )
}

const logos = {
  // eero wordmark with a small Amazon logo. Amazon's letters end at 58% of its height; the smile hangs below.
  eero: (
    <span className="flex items-end gap-2 md:gap-2.5">
      <EeroLogo aria-hidden="true" className="block h-[1.125rem] w-auto md:h-[1.375rem]" />
      <span aria-hidden="true" className="mb-px h-3.5 w-px bg-line-strong md:h-4" />
      <AmazonLogo aria-hidden="true" className="block h-[0.875rem] w-auto translate-y-[42%] md:h-[1.0625rem]" />
    </span>
  ),
  // Full Coachable logo: the wordmark's baseline is at 67.5% of the image height; the mark descends below it.
  coachable: (
    <RasterLogo image={media.logos.coachableFull} className="h-6 translate-y-[32%] md:h-[1.875rem]" />
  ),
  kino: <RasterLogo image={media.logos.kinoWhite} className="h-[1.0625rem] md:h-5" />,
}

/**
 * Where I've worked (DECISIONS-2 #2A): eero (Amazon), Coachable and Kino, each linking to its block below.
 * Replaces the round 1 GitHub / Email / Pause row, under the same hairline (ref S2, a structured, muted logo row).
 * Phones: one row per company (logo, caption, arrow). md and up: three cells split by hairlines.
 * Each link's accessible name is the company, then the caption: "eero (Amazon): Software Engineering Intern, 2026".
 */
export default function HeroWork({ className }) {
  return (
    <div className={cx('border-t border-line pt-5', className)}>
      <p id="hero-work-label" className="meta text-muted">
        {heroWork.label}
      </p>
      <ul
        aria-labelledby="hero-work-label"
        className="mt-2 grid divide-y divide-line md:mt-4 md:grid-cols-3 md:divide-x md:divide-y-0"
      >
        {heroWork.items.map((item) => (
          <li key={item.id} className="min-w-0 md:px-6 md:first:pl-0 md:last:pr-0">
            <a
              href={item.href}
              className={cx(
                'group -mx-2 grid grid-cols-[8rem_minmax(0,1fr)_auto] items-center gap-x-3 rounded-control px-2 py-3',
                'md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-y-3 md:py-2',
              )}
            >
              <span className={cx(SLOT, 'opacity-80 transition-opacity duration-150 group-hover:opacity-100')}>
                {logos[item.id]}
              </span>
              <span className="flex min-w-0 flex-col gap-0.5 md:col-span-2 md:row-start-2">
                <span className="sr-only">{item.name}: </span>
                <span className="text-sm leading-5 text-muted transition-colors duration-150 group-hover:text-fg">
                  {item.role}
                </span>
                <span className="sr-only">, </span>
                <span className="meta">{item.dates}</span>
              </span>
              <ArrowRightIcon
                size={14}
                className="rotate-90 text-subtle transition-[color,translate] duration-150 group-hover:translate-y-0.5 group-hover:text-fg motion-reduce:group-hover:translate-y-0 md:col-start-2 md:row-start-1 md:mt-1"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
