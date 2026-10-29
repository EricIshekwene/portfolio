import cx from '../ui/cx'

/**
 * The quiet surface every asset in Work sits on: logo panels, the video frames, the MedCheck phones and the
 * MUSEPedal tile. A hairline border on the raised surface, with an optional dot grid that fades toward the edges.
 * as: wrapper tag. dots: show the dot grid. The dot grid is drawn in CSS, so it follows the theme.
 */
export default function Panel({ as = 'div', dots = false, className, children, ...rest }) {
  const Component = as
  return (
    <Component
      className={cx('relative isolate overflow-hidden rounded-panel border border-line bg-surface', className)}
      {...rest}
    >
      {dots && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle,var(--line-strong)_1px,transparent_1.5px)] bg-[length:18px_18px] [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_72%)]"
        />
      )}
      {children}
    </Component>
  )
}
