import Section from '../components/ui/Section'
import Tag from '../components/ui/Tag'
import { Picture } from '../components/ui/Media'
import { about } from '../content/about'
import { media } from '../content/media'
import { skillGroups, skillsTitle } from '../content/skills'

/** The small square that marks every eyebrow on the site (same as SectionHeader). */
function Square() {
  return <span aria-hidden="true" className="inline-block size-1.5 shrink-0 bg-fg" />
}

/**
 * About (DECISIONS-2 #11A, #12A, #15A; ref R2 Aurora, a large photo beside short text).
 * lg: the PBA photo on the left (7 of 12 columns) with a mono caption; the bio and a facts list on the right.
 * Skills run the full width underneath as four chip groups. Phones: photo, then text, then skills (DOM order).
 */
export default function About() {
  return (
    <Section id="about" aria-labelledby="about-title" spacing="compact">
      <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-10 xl:gap-x-16">
        {/* @container: the frame's height limit below is set in units of the figure's own width. */}
        <figure className="@container flex flex-col lg:col-span-7">
          {/*
            The spacer keeps at least the full 3:2 photo. At lg the frame also grows to the text column's height,
            so photo and text end on one line, but never past square (the crop only trims the empty stage at the sides).
          */}
          <div className="relative overflow-hidden rounded-card border border-line bg-surface-2 lg:max-h-[100cqw] lg:flex-1">
            <div aria-hidden="true" className="aspect-[3/2]" />
            <Picture
              image={media.about.pba}
              sizes="(min-width: 76rem) 42rem, (min-width: 64rem) 56vw, 100vw"
              className="absolute inset-0"
              imgClassName="h-full object-cover"
            />
          </div>
          <figcaption className="meta mt-3 flex items-center justify-between gap-4">
            <span className="flex items-center gap-2">
              <Square />
              {about.photo.caption}
            </span>
            <time dateTime={about.photo.date.iso}>{about.photo.date.label}</time>
          </figcaption>
        </figure>

        <div className="lg:col-span-5">
          <p className="meta flex items-center gap-2">
            <Square />
            {about.eyebrow}
          </p>
          <h2
            id="about-title"
            className="mt-4 text-[clamp(1.625rem,1.3rem+0.9vw,2rem)] leading-[1.15] font-semibold tracking-[-0.03em] text-fg"
          >
            {about.title}
          </h2>
          <p className="mt-5 text-lead text-muted">{about.bio}</p>

          <dl className="mt-7 border-t border-line">
            {about.facts.map((fact) => (
              <div
                key={fact.label}
                className="grid grid-cols-[6.25rem_minmax(0,1fr)] gap-x-4 border-b border-line py-2.5 sm:grid-cols-[7.5rem_minmax(0,1fr)]"
              >
                <dt className="meta pt-[0.1875rem]">{fact.label}</dt>
                <dd className="text-[0.9375rem] leading-6 text-fg">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-12">
          <h3 className="meta flex items-center gap-2 border-b border-line pb-4">
            <Square />
            {skillsTitle}
          </h3>
          {/* Other languages takes only the width it needs, so the three wider groups fit their chips in two lines. */}
          <dl className="mt-5 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1.15fr)_minmax(0,1fr)_auto] lg:gap-x-7">
            {skillGroups.map((group) => (
              <div key={group.id}>
                <dt className="text-sm font-medium text-fg">{group.title}</dt>
                <dd className="mt-3">
                  <ul className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <Tag key={skill} as="li">
                        {skill}
                      </Tag>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  )
}
