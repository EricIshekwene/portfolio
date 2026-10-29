import Section from '../components/ui/Section'
import { Picture, Video } from '../components/ui/Media'
import CompanyText from '../components/work/CompanyText'
import FeatureViewer from '../components/work/FeatureViewer'
import Panel from '../components/work/Panel'
import { company, features, introVideo } from '../content/coachable'

/**
 * #work: Coachable (DECISIONS-2 #4A, #5A, #6A).
 * 1. The company block: the shared text column (the same one eero and Kino use) beside the product video.
 *    The logo is the section's h2, so the heading reads "Coachable".
 * 2. The feature viewer: seven features, each a headline, one "I built" line and a clip.
 * Product and features only: no process story, no before and after.
 */
export default function Coachable() {
  return (
    <Section id="work" aria-labelledby="work-title">
      <p className="meta mb-stack flex items-center gap-2">
        <span aria-hidden="true" className="inline-block size-1.5 bg-fg" />
        Work
      </p>

      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <CompanyText
          heading={
            <h2 id="work-title">
              <Picture image={company.logo} alt={company.name} sizes="14rem" className="logo-mono block w-44 md:w-56" />
            </h2>
          }
          meta={company.meta}
          title={company.summary}
          body={company.role}
          proof={company.proof}
          link={{ href: company.url, label: company.linkLabel }}
        />
        <Panel className="p-1.5 sm:p-2">
          <Video video={introVideo} className="overflow-hidden rounded-[calc(var(--radius-panel)-0.5rem)]" />
        </Panel>
      </div>

      <div className="mt-section-sm">
        <h3 className="mb-6 text-title font-semibold text-fg lg:mb-8">Inside the app</h3>
        <FeatureViewer features={features} label="Coachable features" />
      </div>
    </Section>
  )
}
