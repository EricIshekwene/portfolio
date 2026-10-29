import { AmazonLogo, EeroLogo } from '../logos'
import { Picture } from '../ui/Media'
import { media } from '../../content/media'
import CompanyText from './CompanyText'
import Panel from './Panel'

/**
 * A company block (DECISIONS-2 #7A, #8A): a large logo on a quiet panel, and beside it the shared text column
 * (meta, role, up to three bullets, stack tags). Full width; eero and Kino stack in #experience.
 * The logo panel holds the block's h3, so heading navigation lands on the company name.
 */
export default function CompanyBlock({ company }) {
  const titleId = `${company.id}-title`
  return (
    <article
      id={company.id}
      aria-labelledby={titleId}
      className="grid items-center gap-6 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-10 lg:gap-16"
    >
      <Panel dots className="flex aspect-[2/1] items-center justify-center md:aspect-[16/10]">
        <h3 id={titleId} className="flex flex-col items-center gap-4 text-fg">
          <span className="sr-only">{company.name}</span>
          <Logo kind={company.logo} />
        </h3>
      </Panel>
      <CompanyText meta={company.meta} title={company.role} bullets={company.bullets} tags={company.tags} />
    </article>
  )
}

function Logo({ kind }) {
  if (kind === 'eero') {
    return (
      <span aria-hidden="true" className="flex flex-col items-center gap-4">
        <EeroLogo aria-hidden="true" className="h-11 w-auto md:h-14" />
        <span className="flex items-center gap-3 text-muted">
          <span className="h-px w-6 bg-line-strong" />
          <AmazonLogo aria-hidden="true" className="h-5 w-auto translate-y-[3px] md:h-6" />
          <span className="h-px w-6 bg-line-strong" />
        </span>
      </span>
    )
  }
  return (
    <Picture
      image={media.logos.kinoWhite}
      alt=""
      sizes="13rem"
      className="logo-mono block w-40 md:w-52"
    />
  )
}
