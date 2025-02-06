import { Suspense, lazy } from 'react'
import Script from 'next/script'
import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'

const Experience = lazy(() => import('@/components/experience'))
const Projects = lazy(() => import('@/components/projects'))
const Contact = lazy(() => import('@/components/contact'))
const Footer = lazy(() => import('@/components/footer'))

export default function Home() {
  return (
    <>
      {/* Include external scripts with desired loading strategy */}
      <Script
        src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://files.bpcontent.cloud/2025/01/08/20/20250108201732-E9DTWJ7F.js"
        strategy="afterInteractive"
      />
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
    </>
  )
}

