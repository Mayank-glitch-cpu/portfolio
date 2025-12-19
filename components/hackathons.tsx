"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, ChevronDown, Award } from 'lucide-react'
import Image from 'next/image'
import { SectionBackground } from './section-background'

type HackathonProject = {
  title: string;
  event: string;
  organizer: string;
  period: string;
  description: string;
  technologies: string[];
  image?: string;
  award?: string;
  githubLink?: string;
  projectLink?: string;
};

const hackathons: HackathonProject[] = [
  {
    title: 'GamED-AI',
    event: 'HackASU 2025',
    organizer: 'Anthropic (Claude AI Sponsor)',
    period: 'December 2025',
    description: 'Transform educational questions into interactive, story-based visualizations using AI. Built a 4-layer pipeline with 18 game templates, intelligent caching reducing processing time by 80%, and real-time progress tracking.',
    technologies: ['Next.js', 'FastAPI', 'Claude AI', 'Zustand'],
    image: '/images/projects/claude_logo.jpg',
    award: '1st Place Winner',
    githubLink: 'https://github.com/Mayank-glitch-cpu/Claude_Hackathon/tree/main',
    projectLink: 'https://youtu.be/0q3TwJJ7xrA',
  },
  {
    title: 'Interview Unlocked',
    event: 'Agentic AI Hackathon',
    organizer: 'Software Development Club at ASU',
    period: 'April 2025',
    description: 'Built an Agentic AI system using LangChain and LangGraph for automated, personalized interview prep—cut manual effort by 90% via modular orchestration, relevant question generation, and evaluation with feedback.',
    technologies: ['LangChain', 'LangGraph', 'Python', 'LLM'],
    image: '/images/hackathons/Soda_Logo_Dark_Mode.svg',
    githubLink: 'https://github.com/Mayank-glitch-cpu/interview-unlocked',
  },
  {
    title: 'Hire-Smart',
    event: 'DevHacks x Strategy Hackathon',
    organizer: 'DevHacks and Strategy',
    period: 'March 2025',
    description: 'Designed an end-to-end NLP candidate search engine using BERT and FAISS to convert natural-language queries into embeddings, enabling real-time semantic matching across 10,000+ profiles with <100ms latency.',
    technologies: ['React', 'FastAPI', 'BERT', 'FAISS'],
    image: '/images/hackathons/original.png',
    projectLink: 'https://youtu.be/CKlaSQfaLH4?si=dY8mIRTTya8_Ve58',
  },
  {
    title: 'Gamify',
    event: 'Zoom App Hackathon',
    organizer: 'Zoom',
    period: 'April 2025',
    description: 'Developed a Zoom application leveraging real-time transcription to automatically generate interactive quizzes using Gemini AI, with seamless platform integration.',
    technologies: ['React', 'TypeScript', 'Zoom API', 'Gemini AI'],
    image: '/images/projects/zoom-logo.png',
  },
  {
    title: 'TwinGenius',
    event: 'Devils Invent Hackathon',
    organizer: 'Honeywell & Arizona State University',
    period: 'April 2025',
    description: 'Revolutionized industrial digital twin creation by generating complete environments from natural language prompts in under 60 seconds using Gemini AI and AWS IoT TwinMaker.',
    technologies: ['Gemini AI', 'AWS IoT TwinMaker', 'Boto3', 'Python'],
    image: '/images/hackathons/honeywell-2.png',
  }
];

const Hackathons = () => {
  const [expandedHackathon, setExpandedHackathon] = useState<number | null>(null)

  return (
    <section id="hackathons" className="py-24 relative overflow-hidden">
      <SectionBackground variant="hackathons" />
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl font-medium mb-12 text-foreground"
        >
          Hackathons
        </motion.h2>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {hackathons.map((hackathon, index) => (
              <motion.div
                key={hackathon.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                layout
                className="group relative"
              >
                {/* Card with relative positioning for logo overflow */}
                <div className="relative pt-8">
                  {/* Floating Logo - positioned to overlap the card top */}
                  {hackathon.image && (
                    <div className="absolute -top-2 left-4 z-10">
                      <div className="relative w-16 h-16 rounded-xl bg-background shadow-lg border border-border/50 p-2 group-hover:scale-105 transition-transform duration-300">
                        <Image
                          src={hackathon.image}
                          alt={hackathon.title}
                          fill
                          className="object-contain p-1"
                          sizes="64px"
                        />
                      </div>
                    </div>
                  )}

                  {/* Main Card Content */}
                  <div className="flex flex-col gap-3 p-4 pt-10 rounded-lg border border-border/30 hover:border-border/50 transition-colors bg-card/30">
                    {/* Header: Title + Links */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-medium text-foreground group-hover:text-primary transition-colors">
                          {hackathon.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{hackathon.event}</p>
                        <p className="text-xs text-muted-foreground/60">{hackathon.organizer}</p>
                      </div>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        {hackathon.githubLink && (
                          <a
                            href={hackathon.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-md hover:bg-muted/50 transition-colors"
                            aria-label="View on GitHub"
                          >
                            <Github className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
                          </a>
                        )}
                        {hackathon.projectLink && (
                          <a
                            href={hackathon.projectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-md hover:bg-muted/50 transition-colors"
                            aria-label="View project"
                          >
                            <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Period + Award */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs text-muted-foreground/70 px-2 py-0.5 rounded-full border border-border/40">
                        {hackathon.period}
                      </span>
                      {hackathon.award && (
                        <span className="text-xs text-yellow-600 dark:text-yellow-400 px-2 py-0.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          {hackathon.award}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground/80 leading-relaxed line-clamp-2">
                      {hackathon.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5">
                      {hackathon.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs text-muted-foreground/60 px-2 py-0.5 rounded-full border border-border/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Expandable Details */}
                    <div>
                      <button
                        onClick={() => setExpandedHackathon(expandedHackathon === index ? null : index)}
                        className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <motion.div
                          animate={{ rotate: expandedHackathon === index ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-3 h-3" />
                        </motion.div>
                        {expandedHackathon === index ? 'Less' : 'More'}
                      </button>

                      <AnimatePresence>
                        {expandedHackathon === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-2 overflow-hidden"
                          >
                            <p className="text-sm text-muted-foreground/70 leading-relaxed">
                              {hackathon.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Hackathons
