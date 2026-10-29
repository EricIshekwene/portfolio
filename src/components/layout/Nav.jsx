import { useRef, useState } from 'react'
import { Popover } from '@base-ui/react/popover'
import { nav, sections, site } from '../../content/site'
import useActiveSection from '../../hooks/useActiveSection'
import cx from '../ui/cx'
import { NEW_TAB_PROPS } from '../ui/externalLink'
import { ArrowUpRightIcon, CloseIcon, LinkedinIcon, MenuIcon } from '../ui/icons'
import ThemeToggle from '../ui/ThemeToggle'

const SECTION_IDS = sections.map((section) => section.id)

/**
 * Site chrome (DECISIONS-2 #3A, T1 Energy reference): a plain text wordmark top left and one 40px glass pill
 * top right with section links, the theme toggle and a LinkedIn chip. The current section is marked with
 * aria-current="location". Below md the links move into a Base UI Popover opened by "Menu".
 * A soft page-colored fade behind the bar keeps the plain wordmark legible over the hero wall and content.
 * Fixed, so html { scroll-padding-top } keeps anchors and focus targets clear of it.
 */
export default function Nav() {
  const activeId = useActiveSection(SECTION_IDS)
  const activeHref = nav.find((item) => item.sections.includes(activeId))?.href ?? null

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 before:absolute before:inset-x-0 before:top-0 before:h-20 before:bg-linear-to-b before:from-bg/85 before:to-transparent">
      <div className="relative mx-auto flex max-w-wide items-center justify-between gap-3 px-gutter pt-3 md:pt-4">
        <a
          href="#top"
          className="pointer-events-auto flex h-10 items-center rounded-control px-1 text-[0.9375rem] font-semibold tracking-tight whitespace-nowrap text-fg"
        >
          {site.name}
        </a>

        <div className="glass pointer-events-auto flex h-10 items-center gap-0.5 rounded-full border border-line p-1">
          <nav aria-label="Primary" className="hidden md:block">
            <NavLinks activeHref={activeHref} />
          </nav>
          <MobileMenu activeHref={activeHref} />
          <span aria-hidden="true" className="mx-1 h-4 w-px bg-line-strong" />
          <ThemeToggle className="size-8" />
          <a
            href={site.links.linkedin}
            {...NEW_TAB_PROPS}
            aria-label="LinkedIn, opens in a new tab"
            className="ml-0.5 flex h-8 items-center gap-1.5 rounded-full bg-inverse px-2.5 font-mono text-meta font-medium tracking-[0.06em] text-on-inverse uppercase transition-colors duration-150 hover:bg-inverse/85 min-[400px]:pr-2.5 min-[400px]:pl-3"
          >
            <LinkedinIcon size={14} className="min-[400px]:hidden" />
            <span className="max-[399px]:hidden">LinkedIn</span>
            <ArrowUpRightIcon size={12} strokeWidth={2} />
          </a>
        </div>
      </div>
    </header>
  )
}

function NavLinks({ activeHref, onNavigate, stacked = false }) {
  return (
    <ul className={cx('flex', stacked ? 'flex-col gap-0.5' : 'items-center gap-0.5')}>
      {nav.map((item) => {
        const current = item.href === activeHref
        return (
          <li key={item.href}>
            <a
              href={item.href}
              aria-current={current ? 'location' : undefined}
              onClick={onNavigate ? () => onNavigate(item.href) : undefined}
              className={cx(
                'flex items-center rounded-full transition-colors duration-150',
                stacked ? 'text-sm' : 'text-[0.8125rem]',
                stacked ? 'h-11 justify-between rounded-control px-3' : 'h-8 px-3',
                current ? 'bg-fg/10 text-fg' : 'text-muted hover:bg-fg/[0.06] hover:text-fg',
              )}
            >
              {item.label}
              {stacked && current && <span aria-hidden="true" className="size-1.5 rounded-full bg-fg" />}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

function MobileMenu({ activeHref }) {
  const [open, setOpen] = useState(false)
  const targetRef = useRef(null)

  // After choosing a link, move focus to that section instead of back to the trigger,
  // so keyboard and screen reader users continue from where they jumped.
  const finalFocus = () => {
    const target = targetRef.current
    targetRef.current = null
    if (!target) return true
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1')
    return target
  }

  const handleNavigate = (href) => {
    targetRef.current = document.getElementById(href.slice(1))
    setOpen(false)
  }

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger className="flex h-8 items-center gap-1.5 rounded-full pr-3 pl-2.5 text-[0.8125rem] text-fg transition-colors duration-150 hover:bg-fg/10 data-popup-open:bg-fg/10 md:hidden">
        {open ? <CloseIcon size={16} /> : <MenuIcon size={16} />}
        <span className="max-[359px]:sr-only">Menu</span>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner side="bottom" align="end" sideOffset={10} collisionPadding={16} positionMethod="fixed" className="z-50">
          <Popover.Popup
            finalFocus={finalFocus}
            className="w-60 origin-(--transform-origin) rounded-card border border-line bg-surface-2 p-1.5 shadow-2xl shadow-black/40 transition-[opacity,scale] duration-150 ease-standard data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0"
          >
            <Popover.Title className="meta px-3 pt-2 pb-1.5">Sections</Popover.Title>
            <nav aria-label="Primary">
              <NavLinks activeHref={activeHref} onNavigate={handleNavigate} stacked />
            </nav>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  )
}
