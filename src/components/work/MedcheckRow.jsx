import LinkButton from '../ui/LinkButton'
import TextLink from '../ui/TextLink'
import MetaRow from './MetaRow'
import Panel from './Panel'
import PhoneFan from './PhoneFan'

/**
 * MedCheck, the first row of #projects (DECISIONS-2 #9A): three small phones on a quiet panel beside four short
 * answers. A hackathon project, so it stays one row, not a case study. The credit follows DECISIONS #22.
 */
export default function MedcheckRow({ project }) {
  const titleId = `${project.id}-title`
  const [demo, repo] = project.links
  return (
    <article
      id={project.id}
      aria-labelledby={titleId}
      className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center lg:gap-16"
    >
      <Panel dots className="lg:self-stretch">
        <PhoneFan
          phones={project.phones}
          sizes="(min-width: 1024px) 9.5rem, 33vw"
          className="mx-auto aspect-[20/17] w-full max-w-md lg:h-full lg:max-w-none lg:aspect-auto lg:min-h-[26rem]"
        />
      </Panel>

      <div className="flex min-w-0 flex-col">
        <MetaRow items={project.meta} />
        <h3 id={titleId} className="mt-3 text-[clamp(1.25rem,1.1rem+0.6vw,1.625rem)] leading-[1.25] font-semibold tracking-[-0.02em] text-fg">
          {project.name}
        </h3>
        <dl className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {project.answers.map((item) => (
            <div key={item.question} className="border-t border-line pt-4">
              <dt className="font-medium text-fg">{item.question}</dt>
              <dd className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted">{item.answer}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
          <LinkButton href={demo.href} variant="secondary" size="sm">
            {demo.label}
          </LinkButton>
          <TextLink href={repo.href} className="text-sm">
            {repo.label}
          </TextLink>
        </div>
      </div>
    </article>
  )
}
