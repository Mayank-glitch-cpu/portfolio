import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import GitHubContributions from '@/components/github-contributions'
import Education from '@/components/education'
import Experience from '@/components/experience'
import Projects from '@/components/projects'
import Contact from '@/components/contact'
import Dashboards from '@/components/dashboards'
import YouTubeVideos from '@/components/youtube-videos'
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
        <section id="dashboards">
          <Dashboards />
        </section>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <section id="videos">
          <YouTubeVideos />
        </section>
      </Suspense>
      <About />
      <GitHubContributions />
      <Education />
      <Contact />
    </main>
  )
}

export default Page