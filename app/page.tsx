import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Experience from '@/components/experience'
import Projects from '@/components/projects'
import Contact from '@/components/contact'
import Dashboards from '@/components/dashboards'
import { Suspense } from 'react'

const Page = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <About />
      <Suspense fallback={<div>Loading...</div>}>
        <Experience />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <section id="projects">
          <Projects />
        </section>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <section id="dashboards">
          <Dashboards />
        </section>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <section id="contact">
          <Contact />
        </section>
      </Suspense>
    </main>
  )
}

export default Page