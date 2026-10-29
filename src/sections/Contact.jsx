import { useEffect, useRef, useState } from 'react'
import Section from '../components/ui/Section'
import SectionHeader from '../components/ui/SectionHeader'
import TextLink from '../components/ui/TextLink'
import cx from '../components/ui/cx'
import { CheckIcon, CopyIcon } from '../components/ui/icons'
import { site } from '../content/site'

const groups = [
  {
    label: 'Write to me',
    rows: [{ label: 'Email', value: site.email, href: `mailto:${site.email}`, copy: true }],
  },
  {
    label: 'Elsewhere',
    rows: [
      { label: 'LinkedIn', value: 'in/ericishekwene', href: site.links.linkedin },
      { label: 'GitHub', value: 'EricIshekwene', href: site.links.github },
    ],
  },
]

/**
 * Contact and footer (DECISIONS #19A, #21A; DECISIONS-2 removes the Resume row; refs S10 Feather label/value list +
 * Structured wordmark). Rendered after </main> as the page's contentinfo landmark. Email has a copy button with a live
 * status. lg: the header and the list sit side by side; below lg they stack.
 */
export default function Contact() {
  const year = new Date().getFullYear()
  return (
    <Section id="contact" as="footer" aria-labelledby="contact-title" className="border-t border-line" spacing="none">
      <div className="grid pt-section-sm lg:grid-cols-12 lg:gap-x-12">
        <SectionHeader
          wrapper="div"
          titleId="contact-title"
          eyebrow="Contact"
          title="The fastest way to reach me is email"
          lead="Internships, Coachable or something you are building. LinkedIn and GitHub work too."
          className="lg:col-span-6"
        />

        <div className="flex flex-col gap-8 lg:col-span-6 lg:pt-9">
          {groups.map((group) => (
            <div key={group.label}>
              <h3 className="meta">{group.label}</h3>
              <dl className="mt-3 border-t border-line">
                {group.rows.map((row) => (
                  <div
                    key={row.label}
                    className="flex min-h-14 flex-wrap items-center justify-between gap-x-6 gap-y-1 border-b border-line py-2.5"
                  >
                    <dt className="text-[0.9375rem] text-muted">{row.label}</dt>
                    <dd className="flex min-w-0 items-center gap-2">
                      <TextLink href={row.href} className="min-w-0 text-body break-all">
                        {row.value}
                      </TextLink>
                      {row.copy && <CopyButton text={row.value} />}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>

      {/* Sign-off: the name set full width, mirroring the hero. Decorative repeat, so hidden from screen readers. */}
      {/* Sized in container units so the name spans the column exactly at every width (text-mega overflows at 390). */}
      <div className="@container mt-section-sm">
        <p
          aria-hidden="true"
          className="text-[length:15.5cqi] leading-[0.88] font-semibold tracking-[-0.06em] whitespace-nowrap text-fg select-none"
        >
          {site.name}
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-line py-6 text-caption text-subtle md:flex-row md:items-start md:justify-between md:gap-10">
        <p className="max-w-[70ch]">
          <span className="text-muted">How this site is built: </span>
          React, Vite, Tailwind, Base UI and Geist. Designed from Mobbin layout references and a decision page, then
          checked at phone and desktop sizes in dark and light.
        </p>
        <p className="flex shrink-0 items-center gap-4">
          <span>
            © {year} {site.name}
          </span>
          <a href="#top" className="text-muted underline decoration-line-strong underline-offset-4 hover:text-fg">
            Back to top
          </a>
        </p>
      </div>
    </Section>
  )
}

/**
 * Copies `text` to the clipboard. The icon and visible label switch to "Copied", and a polite live region
 * announces the result, including a failure message if the clipboard is blocked.
 */
function CopyButton({ text }) {
  const [status, setStatus] = useState('idle') // idle | copied | failed
  const timer = useRef(0)

  useEffect(() => () => clearTimeout(timer.current), [])

  const copy = async () => {
    let ok = false
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text)
        ok = true
      }
    } catch {
      ok = false
    }
    if (!ok) ok = legacyCopy(text)
    setStatus(ok ? 'copied' : 'failed')
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setStatus('idle'), 2500)
  }

  const copied = status === 'copied'
  return (
    <>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? 'Email address copied' : 'Copy email address'}
        className={cx(
          'inline-flex h-8 shrink-0 items-center gap-1.5 rounded-full border border-line-strong px-2.5 font-mono text-meta tracking-[0.04em] uppercase transition-colors duration-150',
          copied ? 'bg-inverse text-on-inverse' : 'text-muted hover:bg-fg/[0.06] hover:text-fg',
        )}
      >
        {copied ? <CheckIcon size={13} /> : <CopyIcon size={13} />}
        {copied ? 'Copied' : 'Copy'}
      </button>
      <span role="status" aria-live="polite" className="sr-only">
        {status === 'copied' && 'Email address copied to the clipboard.'}
        {status === 'failed' && 'Could not copy. Select the address and copy it instead.'}
      </span>
    </>
  )
}

/** Fallback for browsers or contexts without the async clipboard API. */
function legacyCopy(text) {
  const previousFocus = document.activeElement
  try {
    const field = document.createElement('textarea')
    field.value = text
    field.setAttribute('readonly', '')
    field.style.position = 'fixed'
    field.style.opacity = '0'
    document.body.appendChild(field)
    field.select()
    const ok = document.execCommand('copy')
    field.remove()
    return ok
  } catch {
    return false
  } finally {
    // select() moved focus into the hidden field; give it back to the button.
    if (previousFocus instanceof HTMLElement) previousFocus.focus()
  }
}
