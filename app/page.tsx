import { Suspense, lazy } from 'react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'

const Experience = lazy(() => import('@/components/experience'))
const Projects = lazy(() => import('@/components/projects'))
const Contact = lazy(() => import('@/components/contact'))
const Footer = lazy(() => import('@/components/footer'))

export default function Home() {
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
        <section id="contact">
          <Contact />
        </section>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </main>
  )
}

