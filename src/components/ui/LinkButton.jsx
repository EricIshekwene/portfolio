import buttonClasses from './buttonStyles'
import { isExternal, NEW_TAB_PROPS } from './externalLink'
import { ArrowUpRightIcon } from './icons'

/**
 * A link styled as a button. External http(s) links open in a new tab, get an arrow icon and
 * announce "opens in a new tab". Override with external={false}.
 * <LinkButton href="#work">See the work</LinkButton>
 */
export default function LinkButton({ href, variant, size, className, external, newTabLabel = 'opens in a new tab', children, ...rest }) {
  const ext = external ?? isExternal(href)
  return (
    <a href={href} className={buttonClasses({ variant, size, className })} {...(ext ? NEW_TAB_PROPS : {})} {...rest}>
      {children}
      {ext && (
        <>
          <ArrowUpRightIcon size={15} />
          <span className="sr-only">, {newTabLabel}</span>
        </>
      )}
    </a>
  )
}
