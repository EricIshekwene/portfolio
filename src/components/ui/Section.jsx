import cx from './cx'

const widths = {
  page: 'max-w-page', // 76rem, the default content column
  wide: 'max-w-wide', // 90rem, media-heavy sections
  text: 'max-w-text', // 42rem, reading column
  full: 'max-w-none',
}

const spacings = {
  default: 'py-section',
  compact: 'py-section-sm',
  none: '',
}

/**
 * Page section with a consistent column, gutters and vertical rhythm.
 *
 * <Section id="experience" aria-labelledby="experience-title">...</Section>
 *
 * Props: id, aria-labelledby (pass through), as ('section' | 'footer' | 'div'), width (page | wide | text | full),
 * spacing (default | compact | none), contained (false renders children without the inner column, for full-bleed),
 * className (outer), containerClassName (inner column).
 */
export default function Section({
  id,
  as = 'section',
  width = 'page',
  spacing = 'default',
  contained = true,
  className,
  containerClassName,
  children,
  ...rest
}) {
  const Component = as
  return (
    <Component id={id} className={cx('relative', spacings[spacing], className)} {...rest}>
      {contained ? (
        <div className={cx('mx-auto w-full px-gutter', widths[width], containerClassName)}>{children}</div>
      ) : (
        children
      )}
    </Component>
  )
}
