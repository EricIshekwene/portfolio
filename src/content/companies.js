// T5 content: the company blocks in #experience (DECISIONS-2 #7A, #8A). Same shape for every company.
// Sources: Eric's resume (via BRIEF and PLAN-2), DECISIONS #23 and #24 for eero. Nothing beyond the PLAN-2 bullets
// about Amazon: no internal names, screens or numbers. Kino has no stack tags because the resume names none.

export const companies = [
  {
    id: 'eero',
    name: 'eero (Amazon)',
    logo: 'eero', // inline SVG lockup: EeroLogo plus a smaller AmazonLogo
    meta: ['eero (Amazon)', 'May to Aug 2026', 'San Francisco'],
    role: 'Software Engineering Intern',
    bullets: [
      'Built machine identities and API tokens for eero Insight, a partner portal serving 2,000+ organizations. The feature launched.',
      'Co-designed two core screens with the eero design system.',
      'Ran three partner interviews.',
    ],
    tags: ['TypeScript', 'React', 'Next.js', 'Jest', 'AWS'],
  },
  {
    id: 'kino',
    name: 'Kino',
    logo: 'kino', // media.logos.kinoWhite with .logo-mono
    meta: ['Kino', 'Apr to Dec 2025', 'Columbus, OH'],
    role: 'Software Engineering Intern',
    bullets: [
      'Built and optimized full-stack features for a health-tech platform with 600+ users.',
      'Contributed to an analytics dashboard that helped secure $20,000 in funding.',
    ],
    tags: [],
  },
]
