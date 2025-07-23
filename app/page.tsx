import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Education from '@/components/education'
import Experience from '@/components/experience'
import Projects from '@/components/projects'
import Contact from '@/components/contact'
import Dashboards from '@/components/dashboards'
import Hackathons from '@/components/hackathons'
import { Suspense } from 'react'

const Page = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <Experience />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <section id="projects">
          <Projects />
        </section>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <section id="hackathons">
          <Hackathons />
        </section>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <section id="dashboards">
          <Dashboards />
        </section>
      </Suspense>
      <About />
      <Education />
      <Contact />
    </main>
  )
}

export default Page