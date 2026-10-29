import { useRef } from 'react'
import HeroWall from '../components/hero/HeroWall'
import HeroWork from '../components/hero/HeroWork'
import useWallMotion from '../components/hero/useWallMotion'
import Section from '../components/ui/Section'
import LinkButton from '../components/ui/LinkButton'
import { ArrowRightIcon, LinkedinIcon } from '../components/ui/icons'
import { site } from '../content/site'

// "Founder, developer, creative." in full contrast, the rest of the identity line muted (DECISIONS #7A).
// Split at the first ". " with indexOf, not a lookbehind regex: lookbehind throws on Safari 16.0–16.3.
const identityCut = site.identity.indexOf('. ')
const identityLead = identityCut === -1 ? site.identity : site.identity.slice(0, identityCut + 1)
const identityRest = identityCut === -1 ? '' : site.identity.slice(identityCut + 2)

/**
 * Hero (DECISIONS #5B, #7A; DECISIONS-2 #1A, #2A). The page's only <h1>; the name is the LCP element and renders
 * first. Behind it, a decorative wall of real product screens drifts slowly on capable devices only (useWallMotion).
 * Under the buttons, the logo row links to eero (Amazon), Coachable and Kino.
 */
export default function Hero() {
  const heroRef = useRef(null)
  const motion = useWallMotion(heroRef)

  return (
    <Section id="top" aria-labelledby="top-title" contained={false} spacing="none" className="isolate overflow-hidden">
      <div ref={heroRef} className="relative flex min-h-[max(38rem,100svh)] flex-col justify-end">
        {/* Tiles fade from visible at the top to nothing at the bottom (the wall's own mask). */}
        <HeroWall motion={motion} className="opacity-75 md:opacity-60 light:opacity-70 light:md:opacity-70" />

        <div className="relative mx-auto w-full max-w-page px-gutter pt-[calc(var(--nav-h)+3rem)] pb-[clamp(2rem,6vh,4.5rem)]">
          <div className="relative isolate w-fit max-w-full">
            {/* Local scrim: a soft block of page color behind the text only, so the wall stays visible elsewhere. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-14 -top-20 -bottom-12 -z-10 rounded-[4rem] bg-bg/90 blur-2xl"
            />

            {/* text-muted, not the meta default (subtle): this small label sits on the scrim's soft top edge. */}
            <p className="meta flex items-center gap-2 text-muted">
              <span aria-hidden="true" className="inline-block size-1.5 bg-fg" />
              {site.location}
            </p>

            <h1 id="top-title" className="mt-5 text-display font-semibold text-fg">
              {site.name}
            </h1>

            <p className="mt-5 max-w-[36ch] text-lead text-pretty">
              <span className="text-fg">{identityLead}</span> <span className="text-muted">{identityRest}</span>
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href="#work" size="lg">
                See the work
                <ArrowRightIcon size={16} className="rotate-90" />
              </LinkButton>
              <LinkButton href={site.links.linkedin} variant="glass" size="lg">
                <LinkedinIcon size={16} />
                LinkedIn
              </LinkButton>
            </div>
          </div>

          <HeroWork className="mt-10 md:mt-12" />
        </div>
      </div>
    </Section>
  )
}
