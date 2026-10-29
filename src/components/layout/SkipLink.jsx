/** First focusable element on the page. Jumps past the nav to <main id="main">. Visible only on focus. */
export default function SkipLink({ href = '#main', children = 'Skip to content' }) {
  return (
    <a
      href={href}
      className="fixed top-3 left-3 z-[60] -translate-y-[calc(100%+1rem)] rounded-full bg-inverse px-4 py-2.5 text-sm font-medium text-on-inverse focus:translate-y-0"
    >
      {children}
    </a>
  )
}
