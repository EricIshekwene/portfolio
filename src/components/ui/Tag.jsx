import cx from './cx'

/**
 * Mono pill for tools, stack and meta. variant: outline (default) | solid.
 * <Tag>React</Tag>   <Tag as="li">Figma</Tag>
 */
export default function Tag({ as = 'span', variant = 'outline', className, children, ...rest }) {
  const Component = as
  return (
    <Component
      className={cx(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-meta whitespace-nowrap',
        variant === 'solid' ? 'bg-surface-3 text-fg' : 'border border-line text-muted',
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  )
}
