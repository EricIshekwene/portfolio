// T6 content: the hero's logo row (DECISIONS-2 #2A). It replaces the round 1 socials row and the proof strip.
// Order and captions are fixed by DECISIONS-2. `href` targets are ids from site.js (a contract with T5's sections).
// `name` is the company as a screen reader hears it; the logos themselves are decorative.

export const heroWork = {
  label: "Where I've worked",
  items: [
    {
      id: 'eero',
      name: 'eero (Amazon)',
      role: 'Software Engineering Intern',
      dates: '2026',
      href: '#eero',
    },
    {
      id: 'coachable',
      name: 'Coachable',
      role: 'Founder',
      dates: '2024 to now',
      href: '#work',
    },
    {
      id: 'kino',
      name: 'Kino',
      role: 'Software Engineering Intern',
      dates: '2025',
      href: '#kino',
    },
  ],
}
