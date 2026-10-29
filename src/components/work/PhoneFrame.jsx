import cx from '../ui/cx'

/**
 * A plain CSS phone: black bezel around a 390:844 screen (the MedCheck and Coachable phone captures).
 * The outer ratio includes the 2.4% bezel, so the screen keeps the capture's exact ratio and nothing is cropped
 * (MedCheck's "Not proof of authenticity" footer sits at the very bottom of every result).
 * Size it with a width (w-56) or, inside a box with a definite height, a height (h-[86%]).
 */
export default function PhoneFrame({ className, style, children }) {
  return (
    <div
      style={style}
      className={cx(
        'aspect-[1000/2108] shrink-0 rounded-[14%/6.6%] bg-black p-[2.4%] ring-1 ring-white/12',
        'shadow-[0_24px_60px_-24px_rgb(0_0_0/0.55)]',
        className,
      )}
    >
      <div className="h-full w-full overflow-hidden rounded-[11.8%/5.4%] bg-white">{children}</div>
    </div>
  )
}
