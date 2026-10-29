import { media } from '../../content/media'

// Hero wall tiles (DECISIONS-2 hero tiles; FEEDBACK-1 hero). UI screens only: Coachable app screens from the rugby
// tour and the v2 set, neutral MedCheck phone screens and Joey's Place pages. No field or slate close-ups and no
// videos. The tour's flashcard still is not shipped: it is almost all field.
// All decorative (alt="", aria-hidden on the wall). Aspect boxes are fixed in CSS, so nothing shifts while images load.

const DESKTOP = 'aspect-[64/45]' // desktop screens, and the 64:45 phone crops
const PHONE = 'aspect-[3/4]' // phone screens, cropped to the top of the screen
const WIDE = 'aspect-[8/5]' // full desktop pages

// Where the image sits in its box. The tour stills are 16:9 in a 64:45 box: keep the app sidebar at the left,
// as the phone crops do. Phone screenshots keep their top. Joey's Place pages stay centered.
const LEFT = 'object-left'
const TOP = 'object-top'
const CENTER = 'object-center'

const c = media.coachable
const s = media.coachableStills
const m = media.medcheck
const j = media.joeys

/**
 * Phone-only source: one 400 px WebP cropped to exactly what the tile shows (public/media/sections/hero).
 * Phones ship only these small files; desktop keeps the regular srcset.
 */
const phone = (name) => `/media/sections/hero/${name}-400.webp`

const tile = (key, image, aspect, fit, phoneSrc) => ({ key, image, aspect, fit, phone: phoneSrc })

const T = {
  // Coachable, rugby tour stills
  library: tile('library', s.library, DESKTOP, LEFT, phone('coachable-library')),
  plan: tile('plan', s.plan, DESKTOP, LEFT, phone('coachable-plan')),
  schedule: tile('schedule', s.schedule, DESKTOP, LEFT, phone('coachable-schedule')),
  roster: tile('roster', s.roster, DESKTOP, LEFT, phone('coachable-roster')),
  assignment: tile('assignment', s.assignment, DESKTOP, LEFT, phone('coachable-assignment')),
  // Coachable, v2 screens (1280x900, already 64:45)
  v2Schedule: tile('v2-schedule', c.scheduleV2, DESKTOP, TOP, phone('schedule')),
  v2Plans: tile('v2-plans', c.plansV2, DESKTOP, TOP, phone('plans')),
  v2PlanEditor: tile('v2-plan-editor', c.planEditorV2, DESKTOP, TOP, phone('plan-editor')),
  v2Library: tile('v2-library', c.playsLibraryV2, DESKTOP, TOP),
  v2Assignments: tile('v2-assignments', c.assignmentsV2, DESKTOP, TOP),
  v2Notifications: tile('v2-notifications', c.notificationsV2, DESKTOP, TOP),
  v2SchedulePhone: tile('v2-schedule-phone', c.scheduleV2Phone, PHONE, TOP, phone('schedule-phone')),
  // MedCheck, neutral screens only and kept to three tiles placed low (a hackathon project, not the headline).
  // No red "do not use" results, report drafts or confirm screens that name a real product.
  mcLanding: tile('mc-landing', m.s01Landing, PHONE, TOP, phone('mc-landing')),
  mcGreen: tile('mc-green', m.s08GreenCompare, PHONE, TOP, phone('mc-green')),
  mcDesktop: tile('mc-desktop', m.d01LandingDesktop, WIDE, TOP),
  // Joey's Place (its events page is not shipped: it still has template copy)
  joeysHero: tile('joeys-hero', j.desktopHero, DESKTOP, CENTER, phone('joeys-1')),
  joeysMenuPhone: tile('joeys-menu-phone', j.phoneMenu, PHONE, TOP, phone('joeys-2')),
  joeysRooms: tile('joeys-rooms', j.desktopRooms, WIDE, CENTER),
  joeysMenu: tile('joeys-menu', j.desktopMenu, WIDE, CENTER),
  joeysHomePhone: tile('joeys-home-phone', j.phoneHome, PHONE, TOP, phone('joeys-3')),
}

/**
 * Columns, left to right. Odd columns drift up, even columns drift down.
 * Each group must be taller than the visible part of the hero on its own (the track moves by one group), so every
 * column has 7 tiles with at least two phone-shaped ones. Repeats reuse the same files, so they cost no downloads.
 * The first three columns are all a phone shows, and every tile in them has a cropped 400w phone source.
 * `desktopOnly` columns are display:none below md, so their images never load on phones.
 * `offset` staggers the starting height; `duration` is seconds per loop (slow on purpose).
 */
export const heroColumns = [
  {
    tiles: [T.library, T.joeysMenuPhone, T.v2Plans, T.schedule, T.mcLanding, T.plan, T.v2PlanEditor],
    offset: '-2rem',
    duration: 150,
  },
  {
    tiles: [T.roster, T.joeysHomePhone, T.v2Schedule, T.plan, T.v2SchedulePhone, T.library, T.joeysHero],
    offset: '-9rem',
    duration: 170,
  },
  {
    tiles: [T.v2PlanEditor, T.v2SchedulePhone, T.joeysHero, T.library, T.assignment, T.mcGreen, T.v2Schedule],
    offset: '-5rem',
    duration: 160,
  },
  {
    tiles: [T.v2Library, T.v2SchedulePhone, T.joeysRooms, T.v2Notifications, T.mcDesktop, T.joeysHomePhone, T.roster],
    offset: '-11rem',
    duration: 180,
    desktopOnly: true,
  },
  {
    tiles: [T.joeysMenu, T.v2Assignments, T.joeysMenuPhone, T.plan, T.joeysHomePhone, T.v2Notifications, T.v2Library],
    offset: '-4rem',
    duration: 165,
    desktopOnly: true,
  },
]
