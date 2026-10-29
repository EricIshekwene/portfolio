import Section from '../components/ui/Section'
import SectionHeader from '../components/ui/SectionHeader'
import CompanyBlock from '../components/work/CompanyBlock'
import { companies } from '../content/companies'

/**
 * #experience (DECISIONS-2 #7A, #8A): a short header, then eero and Kino as the same full-width company block,
 * stacked. Block ids "eero" and "kino" are a contract (hero logo row, nav current state).
 */
export default function Experience() {
  return (
    <Section id="experience" aria-labelledby="experience-title">
      <SectionHeader
        titleId="experience-title"
        eyebrow="Experience"
        title="Internships"
        lead="Engineering work on product teams outside Coachable."
      />
      <div className="flex flex-col gap-12 md:gap-8">
        {companies.map((company) => (
          <CompanyBlock key={company.id} company={company} />
        ))}
      </div>
    </Section>
  )
}
