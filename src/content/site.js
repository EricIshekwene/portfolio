// Shared site data. T1 owns this file. Section content lives in each team's own content files.

export const site = {
  name: 'Eric Ishekwene',
  identity: 'Founder, developer, creative. I design and build products people use.',
  location: 'Columbus, OH',
  email: 'ishekwene.1@osu.edu',
  url: 'https://ericishekwene.org',
  links: {
    linkedin: 'https://www.linkedin.com/in/ericishekwene/',
    github: 'https://github.com/EricIshekwene',
  },
}

// Page order and anchor ids (DECISIONS-2). These ids are a contract: the nav, the hero logo row, skip targets and deep
// links use them. Listed in document order; nested blocks (eero, kino, medcheck) follow their section.
export const sections = [
  { id: 'top', label: 'Intro' },
  { id: 'work', label: 'Coachable' },
  { id: 'experience', label: 'Experience' },
  { id: 'eero', label: 'eero (Amazon)' },
  { id: 'kino', label: 'Kino' },
  { id: 'projects', label: 'Projects' },
  { id: 'medcheck', label: 'MedCheck' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

// Primary nav. `sections` lists every section id that marks the item as current.
export const nav = [
  { label: 'Work', href: '#work', sections: ['work'] },
  { label: 'Experience', href: '#experience', sections: ['experience', 'eero', 'kino'] },
  { label: 'Projects', href: '#projects', sections: ['projects', 'medcheck'] },
  { label: 'About', href: '#about', sections: ['about'] },
  { label: 'Contact', href: '#contact', sections: ['contact'] },
]
