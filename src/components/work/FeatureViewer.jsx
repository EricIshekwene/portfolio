import { Tabs } from '@base-ui/react/tabs'
import cx from '../ui/cx'
import { Video } from '../ui/Media'
import Panel from './Panel'
import useMediaQuery from './useMediaQuery'

/**
 * Coachable feature viewer (DECISIONS-2 #5A; refs Height feature list beside video, Grain text beside video).
 *
 * One Base UI Tabs instance, laid out by CSS:
 * - lg and up: a vertical list on the left. The active item opens to show its headline and "I built" line,
 *   and the clip sits in a panel on the right.
 * - below lg: a horizontal, scrollable chip row; the panel shows the headline, the built line and the clip.
 *
 * Only the active panel is mounted (Tabs.Panel without keepMounted), so only one clip ever loads or plays.
 * The Video component handles reduced motion, Save-Data, off-screen pause and the visible play/pause button.
 * The tab's own accessible name is the feature name; the headline and built line inside it are aria-hidden
 * because the panel carries the same text for assistive tech (visually hidden at lg).
 * The only script-driven switch is orientation (arrow keys and aria-orientation follow the layout).
 */
export default function FeatureViewer({ features, label, className }) {
  const vertical = useMediaQuery('(min-width: 64rem)')

  return (
    <Tabs.Root
      defaultValue={features[0].id}
      orientation={vertical ? 'vertical' : 'horizontal'}
      className={cx('grid gap-5 lg:grid-cols-[minmax(0,21rem)_minmax(0,1fr)] lg:items-start lg:gap-12', className)}
    >
      <div className="-mx-gutter min-w-0 lg:mx-0">
        <Tabs.List
          aria-label={label}
          activateOnFocus
          className={cx(
            // Phone and tablet: one scrollable row of chips that bleeds to the screen edge.
            'flex gap-2 overflow-x-auto scroll-px-gutter px-gutter py-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
            // lg: a vertical list on a hairline rail.
            'lg:flex-col lg:gap-0 lg:overflow-visible lg:border-l lg:border-line lg:px-0 lg:py-0',
          )}
        >
          {features.map((feature, i) => (
            <Tabs.Tab
              key={feature.id}
              value={feature.id}
              className={cx(
                'group relative flex shrink-0 items-center rounded-full border border-line-strong px-4 py-2 text-left text-sm font-medium whitespace-nowrap text-muted transition-colors duration-150',
                'hover:border-fg/40 hover:text-fg',
                'data-active:border-transparent data-active:bg-inverse data-active:text-on-inverse',
                // lg: list rows. The 2px bar over the rail marks the active row.
                'lg:-ml-px lg:w-full lg:flex-col lg:items-start lg:rounded-none lg:border-0 lg:border-l-2 lg:border-transparent lg:py-3 lg:pr-0 lg:pl-6 lg:text-base lg:whitespace-normal',
                'lg:hover:border-line-strong lg:data-active:border-fg lg:data-active:bg-transparent lg:data-active:text-fg',
              )}
            >
              <span className="flex items-baseline gap-3">
                <span aria-hidden="true" className="hidden font-mono text-meta text-subtle tabular-nums lg:inline">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {feature.name}
              </span>
              <span aria-hidden="true" className="mt-2.5 hidden flex-col gap-2 pb-2 pl-8 lg:group-data-active:flex">
                <span className="text-lead leading-snug font-semibold tracking-[-0.01em] text-fg">{feature.headline}</span>
                <span className="text-[0.9375rem] leading-relaxed font-normal text-muted">{feature.built}</span>
              </span>
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </div>

      {/* Panels share one grid cell, so a panel on its way out never pushes the next one down. */}
      <div className="grid min-w-0">
        {features.map((feature) => (
          <Tabs.Panel
            key={feature.id}
            value={feature.id}
            tabIndex={-1}
            className="col-start-1 row-start-1 flex min-w-0 flex-col gap-5 rounded-panel focus-visible:outline-offset-4"
          >
            <div className="flex flex-col gap-2 lg:sr-only">
              <h4 className="text-title font-semibold text-fg">{feature.headline}</h4>
              <p className="max-w-[60ch] text-muted">{feature.built}</p>
            </div>
            <Panel className="p-1.5 sm:p-2">
              <Video
                video={feature.clip}
                className="overflow-hidden rounded-[calc(var(--radius-panel)-0.5rem)]"
              />
            </Panel>
          </Tabs.Panel>
        ))}
      </div>
    </Tabs.Root>
  )
}
