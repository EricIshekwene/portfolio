import cx from './cx'

/**
 * Mono eyebrow, title and lead. Give the title an id and point the Section's aria-labelledby at it.
 *
 * <SectionHeader titleId="experience-title" eyebrow="Experience" title="Where I have built things" lead="..." />
 *
 * Props: titleId, eyebrow, title, lead, as (heading tag, default h2), size (heading | display),
 * align (start | center), wrapper (outer tag, default header; use div inside a <footer>), className,
 * children (rendered under the lead, e.g. a meta row).
 */
export default function SectionHeader({
  titleId,
  eyebrow,
  title,
  lead,
  as = 'h2',
  size = 'heading',
  align = 'start',
  wrapper = 'header',
  className,
  children,
}) {
  const Heading = as
  const Wrapper = wrapper
  return (
    <Wrapper className={cx('mb-stack flex flex-col gap-4', align === 'center' && 'items-center text-center', className)}>
      {eyebrow && (
        <p className="meta flex items-center gap-2">
          <span aria-hidden="true" className="inline-block size-1.5 bg-fg" />
          {eyebrow}
        </p>
      )}
      <Heading
        id={titleId}
        className={cx(
          'max-w-[22ch] text-fg',
          size === 'display' ? 'text-display font-semibold' : 'text-heading font-semibold',
        )}
      >
        {title}
      </Heading>
      {lead && <p className="max-w-text text-lead text-muted">{lead}</p>}
      {children}
    </Wrapper>
  )
}
