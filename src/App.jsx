import Nav from './components/layout/Nav'
import SkipLink from './components/layout/SkipLink'
import About from './sections/About'
import Coachable from './sections/Coachable'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Hero from './sections/Hero'
import Projects from './sections/Projects'

// Page order is fixed by DECISIONS-2 (ids in content/site.js). The session parent owns this file;
// task parents edit only their own sections.
export default function App() {
  return (
    <>
      <SkipLink />
      <Nav />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Coachable />
        <Experience />
        <Projects />
        <About />
      </main>
      <Contact />
    </>
  )
}
