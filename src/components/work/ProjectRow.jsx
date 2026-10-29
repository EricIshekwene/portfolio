import { Picture } from '../ui/Media'
import Tag from '../ui/Tag'
import TextLink from '../ui/TextLink'
import Panel from './Panel'

/**
 * A compact project row (DECISIONS-2 #10A): the old site's image beside text, at about half its size.
 * Title, kind, one sentence, tags and an optional link. With no image, a typographic tile takes its place.
 */
export default function ProjectRow({ project }) {
  const titleId = `project-${project.id}-title`
  return (
    <article
      aria-labelledby={titleId}
      className="grid gap-5 sm:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] sm:items-center sm:gap-8 lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] lg:gap-10"
    >
      {project.image ? (
        <Panel className="aspect-[16/10]">
          <Picture
            image={project.image}
            alt={project.alt}
            sizes="(min-width: 1024px) 16rem, (min-width: 640px) 15rem, 100vw"
            className="block h-full"
            imgClassName="h-full object-cover"
          />
        </Panel>
      ) : (
        <Panel dots aria-hidden="true" className="flex aspect-[16/10] flex-col items-center justify-center gap-2">
          <span className="text-[clamp(1.75rem,1.4rem+1.4vw,2.5rem)] leading-none font-semibold tracking-[-0.04em] text-fg">
            {project.title}
          </span>
          <span className="font-mono text-meta text-subtle">{project.kind}</span>
        </Panel>
      )}

      <div className="flex min-w-0 flex-col">
        <h3 id={titleId} className="text-title font-semibold text-fg">
          {project.title}
        </h3>
        <p className="mt-1 font-mono text-meta text-subtle">{project.kind}</p>
        <p className="mt-3 max-w-[56ch] text-[0.9375rem] leading-relaxed text-muted">{project.description}</p>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-3">
          <ul aria-label="Stack" className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Tag as="li" key={tag}>
                {tag}
              </Tag>
            ))}
          </ul>
          {project.link && (
            <TextLink href={project.link.href} className="text-sm">
              {project.link.label}
              <span className="sr-only">: {project.title}</span>
            </TextLink>
          )}
        </div>
      </div>
    </article>
  )
}
