import Section from '../components/ui/Section'
import SectionHeader from '../components/ui/SectionHeader'
import MedcheckRow from '../components/work/MedcheckRow'
import ProjectRow from '../components/work/ProjectRow'
import { medcheck, projects } from '../content/projects'

/**
 * #projects (DECISIONS-2 #9A, #10A): MedCheck as the first row (block id "medcheck"), then compact rows for
 * Joey's Place, TCuts, Buckeye Connect and MUSEPedal, divided by hairlines.
 */
export default function Projects() {
  return (
    <Section id="projects" aria-labelledby="projects-title">
      <SectionHeader
        titleId="projects-title"
        eyebrow="Projects"
        title="A hackathon and side projects"
        lead="MedCheck from HackOHI/O 2026, then smaller builds for a bar, a barbershop, Ohio State students and musicians."
      />
      <MedcheckRow project={medcheck} />
      <ul className="mt-section-sm flex flex-col border-b border-line">
        {projects.map((project) => (
          <li key={project.id} className="border-t border-line py-6">
            <ProjectRow project={project} />
          </li>
        ))}
      </ul>
    </Section>
  )
}
