"use client"

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { ExternalLink, Code2, Award } from 'lucide-react'

import { HeroBackground } from './hero-background'

type HackathonProject = {
  title: string;
  event: string;
  organizer: string;
  period: string;
  description: string[];
  technologies: string[];
  image?: string;
  award?: string;
  projectLink?: string;
};

const hackathons: HackathonProject[] = [
  {
    title: 'Hire-Smart: AI-Powered Technical Recruitment Platform',
    event: 'DevHacks x Stratergy Hackathon',
    organizer: 'DevHacks and Stratergy',
    period: 'March 2025',
    description: [
      'Designed an end-to-end NLP candidate search engine using BERT (Hugging Face Transformers) and FAISS to convert natural-language queries into embeddings, enabling real-time semantic matching across 10,000+ profiles with <100ms latency.',
      'Engineered a scalable data pipeline using BeautifulSoup, to scrape, clean, and structure 10,000+ GitHub profiles, extracting features like project complexity, commit frequency, and tech stack relevance, which improved candidate-match accuracy by 40% for hiring teams.',
      'Developed a holistic applicant evaluation portal (React frontend + FastAPI backend) where candidates showcase GitHub activity (stars, forks, PRs) alongside resumes. Integrated a Popularity Index algorithm to auto-rank talent, cutting recruiter screening time by 60% while boosting candidate visibility for niche roles.'
    ],
    technologies: ['React', 'FastAPI', 'BERT', 'FAISS', 'Docker', 'AWS', 'GitHub API', 'BeautifulSoup', 'Pandas', 'SQL'],
    image: '/images/hackathons/original.png',
  },
  {
    title: 'Gamify: Interactive Learning through Automated Quiz Generation',
    event: 'Zoom App Hackathon',
    organizer: 'Zoom',
    period: 'April 2025',
    description: [
      'Developed an innovative Zoom application that leverages real-time transcription of lecture content to automatically generate interactive quizzes for students.',
      'Integrated Zoom\'s Real-Time Messaging System (RTMS) to capture and process lecture transcripts as they happen, ensuring immediate content relevance.',
      'Implemented Gemini AI to analyze transcriptions and intelligently generate contextually appropriate quiz questions based on the lecture material.',
      'Built an intuitive user interface using React, TypeScript, and Tailwind CSS that seamlessly integrates with the Zoom platform as pop-up quizzes.',
      'Created a backend infrastructure with Supabase for user authentication, quiz storage, and performance analytics.'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Zoom API', 'RTMS', 'Gemini AI', 'Supabase'],
    image: '/images/hackathons/zoom.jpeg',
  },
  {
    title: 'TwinGenius: AI-Powered Digital Twin Generator',
    event: 'Devils Invent Hackathon',
    organizer: 'Honeywell & Arizona State University',
    period: 'April 2025',
    description: [
      'Revolutionized industrial digital twin creation by developing a system that generates complete digital twin environments from natural language prompts in under 60 seconds.',
      'Integrated Gemini AI to interpret complex prompts like "Build a 3D model of a 10-assembly-line factory" and translate them into actionable outputs.',
      'Engineered automatic Boto3 script generation that dynamically builds assets, hierarchies, and 3D scenes within AWS IoT TwinMaker and SiteWise.',
      'Implemented real-time data monitoring through AWS SiteWise telemetry integration with LLM interaction capabilities for instant insights.',
      'Reduced digital twin setup time from hours to seconds through complete end-to-end automation.'
    ],
    technologies: ['Gemini AI', 'AWS IoT TwinMaker', 'AWS SiteWise', 'Boto3', 'Python', 'LLM', 'IoT'],
    image: '/images/hackathons/honeywell-2.png',
  }
];

const Hackathons = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  return (
    <section id="hackathons" className="py-20 relative overflow-hidden" ref={containerRef}>
      <HeroBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center gradient-text"
        >
          Hackathon Adventures
        </motion.h2>

        {/* Timeline container */}
        <div className="relative">
          {/* Enhanced center timeline matching experience */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/20 via-primary to-primary/20 shadow-lg shadow-primary/20"></div>

          <div className="space-y-24">
            {hackathons.map((hackathon, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Enhanced timeline dot matching experience */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary z-10 shadow-lg shadow-primary/50 ring-4 ring-background"></div>

                  {/* Content container */}
                  <div className="flex flex-col md:flex-row justify-center items-start">

                    {/* LEFT SIDE CONTENT */}
                    <div className="w-full md:w-[45%] md:pr-12">
                      {isEven ? (
                        <Card className="bg-card/70 backdrop-blur-md border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 w-full group">
                          <CardHeader className="flex flex-row items-start gap-4 p-6 relative overflow-hidden">
                            {/* Enhanced gradient behind title */}
                            <div className="absolute left-8 top-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-purple-500/20 via-primary/15 to-blue-500/20 blur-2xl group-hover:scale-110 transition-transform duration-500" />
                            
                            {hackathon.image && (
                              <div className="w-16 h-16 rounded-full flex-shrink-0 overflow-hidden bg-gradient-to-br from-primary/10 to-blue-500/10 flex items-center justify-center ring-2 ring-primary/20">
                                <Image
                                  src={hackathon.image}
                                  alt={hackathon.title}
                                  width={60}
                                  height={60}
                                  className="rounded-full object-cover"
                                />
                              </div>
                            )}
                            
                            <div>
                              <CardTitle className="text-xl font-bold mb-1 gradient-text relative z-10">
                                {hackathon.title}
                              </CardTitle>
                              <p className="font-medium text-base mb-1">{hackathon.event}</p>
                              <p className="text-sm text-muted-foreground mb-2">{hackathon.organizer}</p>
                              <Badge variant="outline" className="text-xs bg-primary/10 border-primary/30 hover:bg-primary/20 transition-colors">
                                {hackathon.period}
                              </Badge>
                              {hackathon.award && (
                                <Badge className="mt-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold">
                                  <Award className="w-3 h-3 mr-1" />
                                  {hackathon.award}
                                </Badge>
                              )}
                            </div>
                          </CardHeader>
                        </Card>
                      ) : (
                        <Card className="bg-card/70 backdrop-blur-md border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 w-full">
                          <CardContent className="p-6">
                            <div className="space-y-3 mb-4">
                              {hackathon.description.map((para, i) => (
                                <motion.p 
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: i * 0.1 }}
                                  className="text-sm sm:text-base text-muted-foreground"
                                >
                                  {para}
                                </motion.p>
                              ))}
                            </div>

                            {/* Tech Stack */}
                            <div className="mt-6 space-y-3">
                              <div className="flex items-center gap-2">
                                <Code2 className="w-4 h-4 text-primary" />
                                <h4 className="text-lg font-semibold gradient-text">Technologies:</h4>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {hackathon.technologies.map((tech, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                  >
                                    <Badge variant="outline" className="bg-muted/50 hover:bg-primary/10 transition-colors">
                                      {tech}
                                    </Badge>
                                  </motion.div>
                                ))}
                              </div>
                            </div>

                            {hackathon.projectLink && (
                              <div className="mt-6">
                                <motion.a
                                  href={hackathon.projectLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center space-x-2 p-3 rounded-lg bg-primary/5 hover:bg-primary/15 transition-all duration-300 border border-primary/10 hover:border-primary/20 w-fit"
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  <ExternalLink className="w-4 h-4 text-primary" />
                                  <span className="text-sm text-primary font-medium">View Project</span>
                                </motion.a>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      )}
                    </div>

                    {/* SPACER FOR TIMELINE */}
                    <div className="w-0 md:w-[10%]"></div>

                    {/* RIGHT SIDE CONTENT */}
                    <div className="w-full md:w-[45%] md:pl-12 mt-8 md:mt-0">
                      {!isEven ? (
                        <Card className="bg-card/70 backdrop-blur-md border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 w-full group">
                          <CardHeader className="flex flex-row items-start gap-4 p-6 relative overflow-hidden">
                            {/* Enhanced gradient behind title */}
                            <div className="absolute left-8 top-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/20 via-primary/15 to-purple-500/20 blur-2xl group-hover:scale-110 transition-transform duration-500" />
                            
                            {hackathon.image && (
                              <div className="w-16 h-16 rounded-full flex-shrink-0 overflow-hidden bg-gradient-to-br from-blue-500/10 to-primary/10 flex items-center justify-center ring-2 ring-primary/20">
                                <Image
                                  src={hackathon.image}
                                  alt={hackathon.title}
                                  width={60}
                                  height={60}
                                  className="rounded-full object-cover"
                                />
                              </div>
                            )}
                            
                            <div>
                              <CardTitle className="text-xl font-bold mb-1 gradient-text relative z-10">
                                {hackathon.title}
                              </CardTitle>
                              <p className="font-medium text-base mb-1">{hackathon.event}</p>
                              <p className="text-sm text-muted-foreground mb-2">{hackathon.organizer}</p>
                              <Badge variant="outline" className="text-xs bg-primary/10 border-primary/30 hover:bg-primary/20 transition-colors">
                                {hackathon.period}
                              </Badge>
                              {hackathon.award && (
                                <Badge className="mt-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold">
                                  <Award className="w-3 h-3 mr-1" />
                                  {hackathon.award}
                                </Badge>
                              )}
                            </div>
                          </CardHeader>
                        </Card>
                      ) : (
                        <Card className="bg-card/70 backdrop-blur-md border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 w-full">
                          <CardContent className="p-6">
                            <div className="space-y-3 mb-4">
                              {hackathon.description.map((para, i) => (
                                <motion.p 
                                  key={i}
                                  initial={{ opacity: 0, x: 10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: i * 0.1 }}
                                  className="text-sm sm:text-base text-muted-foreground"
                                >
                                  {para}
                                </motion.p>
                              ))}
                            </div>

                            {/* Tech Stack */}
                            <div className="mt-6 space-y-3">
                              <div className="flex items-center gap-2">
                                <Code2 className="w-4 h-4 text-primary" />
                                <h4 className="text-lg font-semibold gradient-text">Technologies:</h4>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {hackathon.technologies.map((tech, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                  >
                                    <Badge variant="outline" className="bg-muted/50 hover:bg-primary/10 transition-colors">
                                      {tech}
                                    </Badge>
                                  </motion.div>
                                ))}
                              </div>
                            </div>

                            {hackathon.projectLink && (
                              <div className="mt-6">
                                <motion.a
                                  href={hackathon.projectLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center space-x-2 p-3 rounded-lg bg-primary/5 hover:bg-primary/15 transition-all duration-300 border border-primary/10 hover:border-primary/20 w-fit"
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  <ExternalLink className="w-4 h-4 text-primary" />
                                  <span className="text-sm text-primary font-medium">View Project</span>
                                </motion.a>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathons;