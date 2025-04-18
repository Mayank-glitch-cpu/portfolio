"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

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
    image: '/images/hackathons/original.png', // Placeholder - replace with actual image
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
    image: '/images/hackathons/zoom.jpeg', // Placeholder - replace with actual image
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
    image: '/images/hackathons/honeywell-2.png', // Placeholder - replace with actual image
  }
];

const Hackathons = () => {
  return (
    <section id="hackathons" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold gradient-text">Hackathon Adventures</h2>
          <p className="text-muted-foreground mt-2">
            From concept to creation in hours—showcasing innovation under pressure
          </p>
        </motion.div>

        {/* Timeline View */}
        <div className="relative">
          {/* Timeline Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30 rounded-full" />
          
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-16 ${index % 2 === 0 ? 'lg:ml-0 lg:mr-[50%]' : 'lg:ml-[50%] lg:mr-0'}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary z-10 shadow-glow hidden lg:block" />
              
              {/* Timeline Date Badge */}
              <div className={`absolute top-0 hidden lg:block ${index % 2 === 0 ? 'lg:right-0 lg:-mr-36' : 'lg:left-0 lg:-ml-36'}`}>
                <Badge variant="outline" className="py-2 px-3 text-sm font-medium bg-muted shadow-sm">
                  {hackathon.period}
                </Badge>
              </div>
              
              <Card className={`overflow-hidden border-l-4 border-primary shadow-md mx-4 lg:mx-12 ${index % 2 === 0 ? 'lg:mr-4' : 'lg:ml-4'}`}>
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                    {/* Mobile Date Badge (visible only on mobile) */}
                    <div className="md:hidden p-4 bg-muted/30">
                      <Badge variant="outline" className="py-1 px-2 text-xs">
                        {hackathon.period}
                      </Badge>
                    </div>
                    
                    {/* Image Column */}
                    {hackathon.image && (
                      <div className="relative h-60 md:h-full md:col-span-4">
                        <Image
                          src={hackathon.image}
                          alt={hackathon.title}
                          fill
                          className="object-cover"
                          style={{ objectPosition: 'center' }}
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <div className="text-center px-4">
                            <h3 className="text-white font-bold text-xl mb-1">{hackathon.event}</h3>
                            <p className="text-white/80 text-sm">{hackathon.organizer}</p>
                            {hackathon.award && (
                              <Badge variant="secondary" className="mt-2 bg-primary/80">
                                {hackathon.award}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Content Column */}
                    <div className="p-6 md:col-span-8">
                      <h3 className="text-2xl font-bold mb-3">{hackathon.title}</h3>
                      
                      <div className="space-y-3 mb-4">
                        {hackathon.description.map((para, i) => (
                          <p key={i} className="text-muted-foreground">
                            {para}
                          </p>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {hackathon.technologies.map((tech, i) => (
                          <Badge key={i} variant="outline" className="bg-muted/50">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      {hackathon.projectLink && (
                        <div className="mt-4">
                          <a 
                            href={hackathon.projectLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:underline text-sm inline-flex items-center"
                          >
                            View Project
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;