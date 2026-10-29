import { useSyncExternalStore } from 'react'

// The inline script in index.html sets data-theme before paint. This hook reads and changes it.
const STORAGE_KEY = 'theme'
const THEME_COLOR = { dark: '#0a0a0a', light: '#fafafa' }
const listeners = new Set()

function read() {
  return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark'
}

function apply(theme) {
  document.documentElement.setAttribute('data-theme', theme)
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', THEME_COLOR[theme])
  listeners.forEach((listener) => listener())
}

export function setTheme(theme) {
  const next = theme === 'light' ? 'light' : 'dark'
  try {
    window.localStorage.setItem(STORAGE_KEY, next)
  } catch {
    // Storage blocked: the choice lasts for this page view only.
  }
  apply(next)
}

function subscribe(listener) {
  listeners.add(listener)
  // Keep tabs in sync.
  const onStorage = (event) => {
    if (event.key === STORAGE_KEY && (event.newValue === 'light' || event.newValue === 'dark')) apply(event.newValue)
  }
  window.addEventListener('storage', onStorage)
  return () => {
    listeners.delete(listener)
    window.removeEventListener('storage', onStorage)
  }
}

/** [theme, setTheme], where theme is 'dark' | 'light'. */
export default function useTheme() {
  const theme = useSyncExternalStore(subscribe, read, () => 'dark')
  return [theme, setTheme]
}
