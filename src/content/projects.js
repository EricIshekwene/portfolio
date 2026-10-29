// T5 content: #projects (DECISIONS-2 #9A, #10A, #13, #14A).
// Sources: MEDCHECK-MAP, DECISIONS #22 (MedCheck credit: the mentee is never named), Eric's resume via BRIEF §3,
// and the old site's project copy (git 51cef30). Copy rules: no exclamation points, no em dashes, no hype.
import { media } from './media'

const mc = media.medcheck

/**
 * MedCheck, the first row. The build time stays out until Eric confirms it (DECISIONS-2 #13).
 * Phones are neutral flow screens only (start, camera, confirm): no verdict that names a real product.
 */
export const medcheck = {
  id: 'medcheck',
  name: 'MedCheck',
  meta: ['HackOHI/O 2026', 'Team of four'],
  phones: [
    { image: mc.s01Landing, alt: 'MedCheck start screen: check a medicine pack against NAFDAC’s records, by photo or by typing.' },
    { image: mc.s02Camera, alt: 'MedCheck camera screen framing a medicine pack, with room for up to three photos.' },
    { image: mc.s05Confirm, alt: 'MedCheck confirm screen listing the details read from the photos, to check before anything is looked up.' },
  ],
  answers: [
    {
      question: 'What’s MedCheck?',
      answer:
        'A web app for phones that checks a medicine pack against Nigeria’s drug registry and alerts, then says how far to trust it.',
    },
    {
      // DECISIONS #22, first half, in the first person.
      question: 'How did I build it?',
      answer:
        'Assigned the backend, I ended up building the backend, frontend and photo-reading endpoint with AI-assisted sessions, and made the product and design calls.',
    },
    {
      // DECISIONS #22, second half. "One weekend" until Eric confirms the build time.
      question: 'How did we build it in one weekend?',
      answer:
        'We split the work by layer and wrote the shared contract first. I mentored a teammate through the frontend; Michael led the pitch and submission.',
    },
    {
      question: 'What did we ship?',
      answer:
        'A working app with four result levels, a drafted report for suspected fakes, a public repo and a demo with mock results.',
    },
  ],
  links: [
    { label: 'Try the demo', href: 'https://ericishekwene.github.io/hackohio-2026/' },
    { label: 'Code on GitHub', href: 'https://github.com/EricIshekwene/hackohio-2026' },
  ],
}

/** Compact rows after MedCheck: image beside short text. `image: null` renders a typographic tile. */
export const projects = [
  {
    id: 'joeys-place',
    title: 'Joey’s Place',
    kind: 'Website for a bar and restaurant',
    description: 'A photo-led site with events, menus and contact details, built to load fast on phones.',
    tags: ['React', 'Vite', 'Tailwind'],
    image: media.joeys.desktopHero,
    alt: 'Joey’s Place website on desktop: the name in script over an evening photo of the building.',
    link: { href: 'https://github.com/EricIshekwene/Joeys-new', label: 'Code on GitHub' },
  },
  {
    id: 'tcuts',
    title: 'TCuts',
    kind: 'Barbershop booking platform',
    description:
      'Booking with email confirmations, live slot checks and an admin dashboard, built and deployed on my own for 400+ users.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Railway'],
    image: media.projects.tcutsRedacted,
    alt: 'TCuts admin dashboard on a laptop next to the booking page on a phone.',
    // tcutss.com stopped resolving (checked 2026-10-28), so there is no link.
  },
  {
    id: 'buckeye-connect',
    title: 'Buckeye Connect',
    kind: 'Link-in-bio for Ohio State students',
    description: 'Profile pages where students share their links, with sign-in, image uploads and email verification.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'EJS'],
    image: media.projects.buckeyeConnectRedacted,
    alt: 'Buckeye Connect on two phones: the Ohio State sign-in screen and a profile with link buttons.',
    link: { href: 'https://github.com/EricIshekwene/Buckeye-Connect', label: 'Code on GitHub' },
  },
  {
    id: 'musepedal',
    title: 'MUSEPedal',
    kind: 'Bluetooth page-turn pedal',
    description: 'In a team of four, we built a foot pedal that turns the pages of digital sheet music for musicians.',
    tags: ['MATLAB', 'Python', 'Onshape'],
    image: null,
  },
]
