import cx from './cx'
import { isExternal, NEW_TAB_PROPS } from './externalLink'
import { ArrowUpRightIcon } from './icons'

/** Inline text link with a quiet underline. External links behave like LinkButton's. */
export default function TextLink({ href, className, external, newTabLabel = 'opens in a new tab', children, ...rest }) {
  const ext = external ?? isExternal(href)
  return (
    <a
      href={href}
      className={cx(
        'inline-flex items-center gap-0.5 text-fg underline decoration-line-strong decoration-1 underline-offset-4 transition-colors duration-150 hover:decoration-fg',
        className,
      )}
      {...(ext ? NEW_TAB_PROPS : {})}
      {...rest}
    >
      {children}
      {ext && (
        <>
          <ArrowUpRightIcon size={14} className="text-subtle" />
          <span className="sr-only">, {newTabLabel}</span>
        </>
      )}
    </a>
  )
}
