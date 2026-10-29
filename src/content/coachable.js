// T5 content: the Coachable block (DECISIONS-2 #4A, #5A, #6A).
// Sources: Eric's resume (via BRIEF), COACHABLE-MAP §4 (live features), the old site's Coachable copy (git 51cef30)
// and PLAN-2's copy drafts. Copy rules: no exclamation points, no em dashes, no hype. "I built" lines are Eric's work.
import { media } from './media'

/**
 * The video beside the company block. One line to swap: when Eric's HF launch video lands in media.js,
 * point this at it (DECISIONS-2 #6A).
 */
export const introVideo = media.coachable.productDemo

export const company = {
  name: 'Coachable',
  logo: media.logos.coachableFull,
  url: 'https://coachableplays.com',
  linkLabel: 'coachableplays.com',
  meta: ['Founder', 'Aug 2024 to now', 'Columbus, OH'],
  summary:
    'Coachable is a sports strategy platform where coaches design plays, animate them and run their team in one place.',
  role: 'I design and build all of it, from conversations with coaches to the code that ships.',
  // Proof chips. 340+ is the resume figure (time-bound, unverified elsewhere); $50,000 is on the check photo.
  proof: [
    { value: '$50,000', label: 'President’s Buckeye Accelerator, Apr 2026' },
    { value: '340+', label: 'coaches' },
  ],
}

/**
 * Feature viewer, in tour order. `headline` is the tour caption; `built` is one line on what Eric built.
 * Media keys must stay stable: the rugby asset pack swaps the files behind them, not the keys.
 */
export const features = [
  {
    id: 'playmaker',
    name: 'Playmaker',
    headline: 'Draw a move. Watch it run.',
    built: 'I built the canvas editor and its keyframe animation, with smooth playback that runs outside React’s render loop.',
    clip: media.coachableFeatures.playmaker,
  },
  {
    id: 'library',
    name: 'Plays library',
    headline: 'Your playbook, in one place.',
    built: 'I built the library: every play as a live field thumbnail, in folders, with tags, favorites and search.',
    clip: media.coachableFeatures.library,
  },
  {
    id: 'plans',
    name: 'Practice plans',
    headline: 'Build practice plans around your plays.',
    built: 'I built the plan editor, where drills and plays sit in timed blocks with checklists.',
    clip: media.coachableFeatures.plans,
  },
  {
    id: 'schedule',
    name: 'Schedule',
    headline: 'Put the week on the calendar.',
    built: 'I built the team calendar: sessions by event type, with linked practice plans and attendance counts.',
    clip: media.coachableFeatures.schedule,
  },
  {
    id: 'roster',
    name: 'Roster',
    headline: 'Your whole squad, by position and availability.',
    built: 'I built the roster: players filtered by position, with availability, profile status and tags at a glance.',
    clip: media.coachableFeatures.roster,
  },
  {
    id: 'assignments',
    name: 'Assignments',
    headline: 'Assign plays. See who has studied them.',
    built: 'I built the two-step composer and the coach dashboard that tracks who has viewed and studied each play.',
    clip: media.coachableFeatures.assignments,
  },
  {
    id: 'flashcards',
    name: 'Flashcards',
    headline: 'Players learn every call with flashcards.',
    built: 'I built the study mode: it shows a call, runs the move on the field, and players mark it Again or Got it.',
    clip: media.coachableFeatures.flashcards,
  },
]
