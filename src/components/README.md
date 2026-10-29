# Foundation: tokens, primitives, hooks

The shared layer every section builds on. Round 1 (T1) built it; round 2 (DECISIONS-2) reshaped the page on top of it.
Section owners don't edit `ui/*`, `layout/*`, `hooks/*`, `index.css`, `App.jsx` or `site.js`. If a primitive is missing something, wrap it in your own folder and note the gap.

## Ownership (round 2)

| Owner | Files |
|---|---|
| Session parent | `index.html`, `src/main.jsx`, `src/App.jsx`, `src/index.css`, `src/components/{ui,layout,logos}/*`, `src/hooks/*`, `src/content/site.js`, `src/content/media.js` (generated, pruned at integration), `public/*` |
| T5 Work | `src/sections/{Coachable,Experience,Projects}.jsx`, `src/components/work/*`, `src/content/{coachable,companies,projects}.js` |
| T6 Me | `src/sections/{Hero,About,Contact}.jsx`, `src/components/hero/*`, `src/content/{about,skills,hero}.js` |

## Page contract

`App.jsx` renders `SkipLink`, `Nav`, then `<main id="main">` with the sections in this order. `Contact` comes after `</main>` as the footer.

| Section file | id | Notes |
|---|---|---|
| Hero | `top` | The page's only `<h1>`. The wordmark links here. The logo row links to `#eero`, `#work` and `#kino`. |
| Coachable | `work` | Nav "Work". Company block beside the product video, then the feature viewer. |
| Experience | `experience` | Nav "Experience". Company blocks `#eero` and `#kino`. |
| Projects | `projects` | Nav "Projects". MedCheck row `#medcheck`, then compact project rows. |
| About | `about` | Nav "About". PBA photo, bio, facts, skill chips. |
| Contact | `contact` | `as="footer"`, outside `<main>`. |

**Keep these ids.** The nav's active state, the hero logo row, the skip link and deep links depend on them (`src/content/site.js` → `sections`, `nav`). Use `<h2>` for section titles and `<h3>` and below inside sections.

## Tokens (`src/index.css`)

The theme is dark first and monochrome. `data-theme="light"` on `<html>` swaps every token. The default Tailwind palette is **removed**, so `bg-red-500` and similar classes generate nothing. Color comes only from project media (DECISIONS #4C).

| Utility | Use |
|---|---|
| `bg-bg` | Page background (`#0a0a0a` / `#fafafa`) |
| `bg-surface`, `bg-surface-2`, `bg-surface-3` | Raised surfaces, then hover |
| `border-line`, `border-line-strong` | Hairlines (9% and 18% of fg) |
| `text-fg`, `text-muted`, `text-subtle` | Text. `subtle` is the faintest allowed text (4.6:1 or better on every surface). |
| `bg-inverse text-on-inverse` | High-emphasis chip or primary button (white on dark, black on light) |
| `bg-glass` or the `.glass` class | Frosted floating chrome (the `.glass` class adds backdrop blur and a fallback) |
| `bg-black`, `bg-white` | Fixed absolutes only, for media scrims and masks |
| `ring-focus` / `outline-focus` | Focus color. The global `:focus-visible` already draws the ring, so don't remove outlines. |

Opacity modifiers work on all of them: `bg-fg/10`, `border-fg/20`.

**Type scale** (sizes are fluid, and each sets its own line-height and tracking):

| Class | Use |
|---|---|
| `text-meta` | Mono labels, about 12px |
| `text-caption` | About 13px |
| `text-body` | 16px |
| `text-lead` | 18 to 21px |
| `text-title` | h3, 20 to 24px |
| `text-heading` | h2, 30 to 48px |
| `text-display` | h1, 44 to 96px |
| `text-mega` | Contact sign-off name, 48 to 208px |

Fonts: `font-sans` is Geist Variable (the default everywhere) and `font-mono` is Geist Mono Variable. Use mono for dates, stack, labels and numbers.

**Spacing, widths and radii:**

| Tokens | Use |
|---|---|
| `px-gutter` | Page side padding |
| `py-section`, `py-section-sm` | Rhythm between sections |
| `mb-stack` / `gap-stack` | Header to body |
| `max-w-page` (76rem), `max-w-wide` (90rem), `max-w-text` (42rem) | Widths |
| `rounded-control`, `rounded-card`, `rounded-panel`, `rounded-media`, `rounded-full` | Radii |

Tailwind's 4px numeric scale is still there.

**Helper classes:**

| Class | What it does |
|---|---|
| `.meta` | Mono, uppercase, tracked, `text-subtle`, tabular numbers. For eyebrows and meta rows. |
| `.glass` | Frosted translucent surface |
| `.logo-mono` | For white logos (`media.logos.*White`): stays white in dark and turns black in light |

**Variants:** `light:` and `dark:` (for example `light:invert`). Prefer tokens. Use these only when a token can't express it.

**Motion and visibility rules:**
- Nothing may be hidden waiting for a scroll or JS animation. Content must render visible with JS animation off.
- Add `motion-reduce:` overrides to every animation you write. A global `prefers-reduced-motion` rule also cuts animations and transitions to 0.01ms as a safety net, but don't rely on it for looping motion. Stop it explicitly and give it a visible pause control (WCAG 2.2.2).
- `html` has `scroll-padding-top` equal to the nav height plus 1rem. Don't add your own sticky offsets for the nav. Sticky elements inside sections should use `top-(--scroll-offset)` so they clear the nav.
- No JS width checks. Use responsive CSS only (`sm:`, `md:`, `lg:`, `max-md:`).

## Primitives (`src/components/ui`)

```jsx
import Section from '../components/ui/Section'
import SectionHeader from '../components/ui/SectionHeader'
import Tag from '../components/ui/Tag'
import LinkButton from '../components/ui/LinkButton'
import TextLink from '../components/ui/TextLink'
import { Picture, Video } from '../components/ui/Media'
import { media } from '../content/media'
import { site } from '../content/site'
import cx from '../components/ui/cx'
import { ArrowUpRightIcon, CopyIcon, CheckIcon, PlayIcon, PauseIcon, LinkedinIcon } from '../components/ui/icons'
import { EeroLogo, AmazonLogo } from '../components/logos'
```

**`Section`**: a section with the shared column, gutters and rhythm.
`<Section id="experience" aria-labelledby="experience-title">…</Section>`
Props:
- `as`: `section` | `footer` | `div`
- `width`: `page` | `wide` | `text` | `full`
- `spacing`: `default` | `compact` | `none`
- `contained={false}`: full-bleed, no inner column
- `className`: the outer element
- `containerClassName`: the inner column

**`SectionHeader`**: a mono eyebrow with a small square, then the title, then the lead.
`<SectionHeader titleId="experience-title" eyebrow="Experience" title="…" lead="…" />`
Props:
- `as`: default `h2`
- `size`: `heading` | `display`
- `align`: `start` | `center`
- `children`: rendered under the lead, for example a meta row

**`Tag`**: a mono pill. `<Tag>React</Tag>`, `<Tag as="li" variant="solid">Figma</Tag>`.

**`LinkButton`**:
- `variant`: `primary` | `secondary` | `ghost` | `glass`
- `size`: `sm` (36px) | `md` (44px) | `lg` | `icon` | `icon-sm`
- Icon-only buttons need `aria-label`.
- `LinkButton` and `TextLink` handle external `http(s)` links for you: new tab, `rel="noopener noreferrer"`, an arrow icon, and a hidden ", opens in a new tab". `mailto:` and `#anchors` stay in the same tab. Override with `external`.
- Class builder for custom elements (for example a `<button>`): `buttonClasses({ variant, size, className })` from `buttonStyles.js`.

**`Picture`**: a WebP `<picture>` with `srcset`. Width and height come from the media entry, so it causes no layout shift. It is lazy unless `priority`.
`<Picture image={media.coachable.scheduleV2} sizes="(min-width: 1024px) 60vw, 100vw" />`
- `alt` defaults to the entry's alt text. Write your own when the context differs. Use `alt=""` for decorative tiles.
- Set `sizes` honestly. The default is `100vw`.
- `priority` is for above-the-fold images only. The hero tiles should **not** be priority, because the name text is the LCP element.
- `className` styles `<picture>` and `imgClassName` styles `<img>` (default `block h-auto w-full`). For a crop, use `imgClassName="h-full object-cover"` inside a sized box.

**`Video`**: muted, `playsInline`, looping, `preload="none"`, with a poster.
`<Video video={media.coachableFeatures.playmaker} className="overflow-hidden rounded-media" />`
- It plays only while at least 25% is in view, and pauses off screen.
- It never autoplays under reduced motion or Save-Data. It shows the poster instead and still offers Play.
- It has a visible Play/Pause button (labelled with the video's name). The visitor's choice beats autoplay.
- `label` overrides the accessible name.
- `paused` forces a pause from a parent control.
- `decorative` adds aria-hidden and removes the button. Use it only when a parent offers its own pause control.
- To crop: `videoClassName="aspect-[4/5] h-full"`.

**Icons**: inline SVGs (`icons.jsx`), `aria-hidden`, `currentColor`, `size` prop. No icon library.

**Lint gotcha:** core `no-unused-vars` doesn't see JSX usage of renamed destructured props. Write `function X({ as = 'div' }) { const Component = as; return <Component/> }` rather than `({ as: Component })`.

## Layout (`src/components/layout`)

- **`Nav`** (DECISIONS-2 #3A). A plain text wordmark at top left. One 40px glass pill at top right holds Work, Experience, Projects, About, Contact, then the theme toggle, then a LinkedIn chip (new tab). There is no Resume link anywhere.
  - A soft page-colored fade behind the bar keeps the wordmark legible over the hero wall.
  - The active item gets `aria-current="location"`, driven by `useActiveSection` over `sections` in `site.js`.
  - Below `md`, the links move into a Base UI Popover ("Menu"; icon only below 360px). Choosing a link moves focus to that section.
  - The nav band is `--nav-h` (4.5rem) tall. Hero content must start below it.
- **`SkipLink`**: "Skip to content", the first Tab stop. It targets `#main`.

## Section components

- **`components/work`**: `CompanyBlock` (logo panel beside `CompanyText`, used for eero and Kino), `CompanyText` (meta row, role, bullets, tags; also the Coachable intro's text side), `FeatureViewer` (Base UI Tabs; only the active panel mounts its clip), `MedcheckRow` (`PhoneFan` beside four short answers), `ProjectRow`, `Panel`, `MetaRow`, `PhoneFrame`, `useMediaQuery`.
- **`components/hero`**: `HeroWall` (tile columns; reveals after load so the h1 stays the LCP), `heroTiles.js` (UI screens only; every phone column has two or more portrait tiles with 400w crops), `useWallMotion` (drifts only on capable devices, with no pause control by the owner's choice, DECISIONS-2 #1A), `HeroWork` (the logo row), `useAfterFirstPaint`.
- **`components/logos`**: `EeroLogo` and `AmazonLogo`, inline SVG in `currentColor` with `role="img"` and an `aria-label`.

## Hooks (`src/hooks`)

- `usePrefersReducedMotion()` returns a boolean and updates live.
- `useInView(ref, { rootMargin, threshold, once })` returns a boolean. Pass a stable `threshold` (a number, or an array defined outside the component).
- `useActiveSection(ids, { line })` returns the id of the current section. It uses IntersectionObserver only. The last section wins when it is fully visible.
- `useTheme()` returns `[theme, setTheme]`. It persists to `localStorage.theme`, updates `meta[name=theme-color]`, and syncs across tabs. The inline script in `index.html` applies the theme before paint.

## Media (`public/media`, `src/content/media.js`)

All shipped media is listed in `docs/media-manifest.md`, with path, pixel size, bytes, source and what it shows. `src/content/media.js` is generated by the media pipelines and was pruned at round 2 integration; add media through `R2-build-media.mjs` (it only adds). For a one-off crop, pass your own `{ src, srcSet, width, height }` object to `Picture`.

Groups:

| Group | Contents |
|---|---|
| `media.coachable` | `productDemo` (the Coachable intro video until Eric's HF launch video arrives), v2 screens used by the hero wall (`scheduleV2`, `plansV2`, `planEditorV2`, `playsLibraryV2`, `assignmentsV2`, `notificationsV2`, `scheduleV2Phone`) |
| `media.coachableFeatures` | Seven 1280×720 clips with posters: `playmaker`, `library`, `plans`, `schedule`, `roster`, `assignments`, `flashcards`. Captions cropped, account footer covered |
| `media.coachableStills` | Clean rugby stills for the hero wall: `library`, `plan`, `schedule`, `roster`, `assignment` |
| `media.medcheck` | Neutral phone screens and `d01LandingDesktop` |
| `media.joeys` | Joey's Place captures from a local run of `Joeys-new`: `desktopHero`, `desktopRooms`, `desktopMenu`, `phoneHome`, `phoneMenu` |
| `media.projects` | `tcutsRedacted`, `buckeyeConnectRedacted` (the unredacted originals were removed: they showed customer data) |
| `media.about` | `pba` (Eric with the President's Buckeye Accelerator check, 3:2, metadata stripped) |
| `media.logos` | `coachableFull`, `kinoWhite` (white raster: use with `.logo-mono`, which inverts them in light theme) |
