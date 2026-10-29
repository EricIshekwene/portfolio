import useTheme from '../../hooks/useTheme'
import cx from './cx'
import { MoonIcon, SunIcon } from './icons'

/** Dark/light switch. A toggle button: pressed = dark theme. Persists to localStorage "theme". */
export default function ThemeToggle({ className }) {
  const [theme, setTheme] = useTheme()
  const dark = theme === 'dark'
  return (
    <button
      type="button"
      aria-pressed={dark}
      aria-label="Dark theme"
      onClick={() => setTheme(dark ? 'light' : 'dark')}
      className={cx(
        'inline-flex size-9 items-center justify-center rounded-full text-muted transition-colors duration-150 hover:bg-fg/10 hover:text-fg',
        className,
      )}
    >
      {dark ? <MoonIcon size={16} /> : <SunIcon size={17} />}
    </button>
  )
}
