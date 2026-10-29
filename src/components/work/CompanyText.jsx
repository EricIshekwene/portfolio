import cx from '../ui/cx'
import LinkButton from '../ui/LinkButton'
import Tag from '../ui/Tag'
import MetaRow from './MetaRow'

/**
 * The text side of every company block (DECISIONS-2 #7A): Coachable's intro, eero and Kino use this one column, so
 * they read as one family. Order: optional heading slot (Coachable's logo), meta, title, body or bullets,
 * proof chips, stack tags, link.
 *
 * heading: node rendered first (the section's h2 for Coachable). Company blocks put their heading on the logo panel.
 * meta: string[] joined with middots. title + titleAs: the large line (a <p> or a heading).
 * body: one short paragraph. bullets: up to three strings. proof: [{ value, label }]. tags: string[].
 * link: { href, label }.
 */
export default function CompanyText({
  heading,
  meta,
  title,
  titleAs = 'p',
  titleId,
  body,
  bullets,
  proof,
  tags,
  link,
  className,
}) {
  const Title = titleAs
  return (
    <div className={cx('flex min-w-0 flex-col', className)}>
      {heading}
      {meta && <MetaRow items={meta} className={heading ? 'mt-6' : undefined} />}
      {title && (
        <Title
          id={titleId}
          className="mt-3 max-w-[30ch] text-[clamp(1.25rem,1.1rem+0.6vw,1.625rem)] leading-[1.25] font-semibold tracking-[-0.02em] text-fg"
        >
          {title}
        </Title>
      )}
      {body && <p className="mt-4 max-w-[52ch] text-muted">{body}</p>}
      {bullets?.length > 0 && (
        <ul className="mt-5 flex max-w-[58ch] flex-col gap-2.5">
          {bullets.map((item) => (
            <li key={item} className="flex gap-3 text-muted">
              <span aria-hidden="true" className="mt-[0.7em] size-1.5 shrink-0 bg-fg/60" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      {proof?.length > 0 && (
        <ul aria-label="Proof" className="mt-6 flex flex-wrap gap-2">
          {proof.map((item) => (
            <li
              key={item.value}
              className="inline-flex max-w-full flex-wrap items-baseline gap-x-2 rounded-[1.25rem] border border-line-strong bg-surface px-3.5 py-1.5 text-caption"
            >
              <span className="font-mono font-medium text-fg tabular-nums">{item.value}</span>
              <span className="text-muted">{item.label}</span>
            </li>
          ))}
        </ul>
      )}
      {tags?.length > 0 && (
        <ul aria-label="Stack" className="mt-6 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <Tag as="li" key={tag}>
              {tag}
            </Tag>
          ))}
        </ul>
      )}
      {link && (
        <div className="mt-7">
          <LinkButton href={link.href} variant="secondary" size="sm">
            {link.label}
          </LinkButton>
        </div>
      )}
    </div>
  )
}
