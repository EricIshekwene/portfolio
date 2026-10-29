import cx from './cx'

const base =
  'inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap select-none ' +
  'transition-[background-color,color,border-color,scale] duration-150 ease-standard active:scale-[0.98] ' +
  'motion-reduce:active:scale-100 disabled:pointer-events-none disabled:opacity-50'

const variants = {
  primary: 'bg-inverse text-on-inverse hover:bg-inverse/85',
  secondary: 'border border-line-strong text-fg hover:bg-fg/[0.06]',
  ghost: 'text-muted hover:bg-fg/[0.06] hover:text-fg',
  glass: 'glass border border-line text-fg hover:bg-fg/10',
}

const sizes = {
  sm: 'h-9 px-3.5 text-sm',
  md: 'h-11 px-5 text-[0.9375rem]',
  lg: 'h-12 px-6 text-base',
  icon: 'size-11',
  'icon-sm': 'size-9',
}

/** Shared by Button and LinkButton. variant: primary | secondary | ghost | glass. size: sm | md | lg | icon | icon-sm. */
export default function buttonClasses({ variant = 'primary', size = 'md', className } = {}) {
  return cx(base, variants[variant], sizes[size], className)
}
