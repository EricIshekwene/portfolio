import { Fragment } from 'react'
import cx from '../ui/cx'

/**
 * Mono meta line: "Founder · Aug 2024 to now · Columbus, OH". Sentence case (not .meta's uppercase) so brand names
 * like eero keep their spelling. Each item stays on one line; the line wraps between items. The middots are hidden
 * from screen readers, which hear commas instead.
 */
export default function MetaRow({ items, className }) {
  return (
    <p className={cx('font-mono text-meta text-subtle tabular-nums', className)}>
      {items.map((item, i) => (
        <Fragment key={item}>
          {i > 0 && (
            <>
              <span className="sr-only">,</span>
              <span aria-hidden="true" className="px-1 text-fg/30">
                {'\u00a0· '}
              </span>
            </>
          )}
          <span className="whitespace-nowrap">{item}</span>
        </Fragment>
      ))}
    </p>
  )
}
