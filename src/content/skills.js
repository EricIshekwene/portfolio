// T6 content: skills as grouped chips inside About (DECISIONS-2 #12A). Names only, no "used for" lines.
// Source: the resume list (Portfolio Refresh Brief §4) and the eero stack (EERO-MAP), as in round 1.
// Four groups so the lg grid stays one row. Java, C and C# from the resume get their own small group.

export const skillsTitle = 'Skills'

export const skillGroups = [
  {
    id: 'front-end',
    title: 'Front-end',
    skills: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Jest', 'React Testing Library'],
  },
  {
    id: 'back-end',
    title: 'Back-end and data',
    skills: ['Node.js', 'Express', 'GraphQL (Apollo)', 'PostgreSQL', 'SQL', 'OAuth2', 'Python'],
  },
  { id: 'design-tools', title: 'Design and tools', skills: ['Figma', 'Git', 'GitHub', 'AWS', 'Docker'] },
  { id: 'languages', title: 'Other languages', skills: ['Java', 'C', 'C#'] },
]
