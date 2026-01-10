"use client"

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiTensorflow,
  SiPytorch,
  SiReact,
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiAmazon,
  SiApachekafka,
  SiGrafana,
  SiGit,
  SiLinux,
  SiNextdotjs,
} from "react-icons/si";
import { DiJava } from 'react-icons/di'
import { HeroBackground } from './hero-background';
import { MapPin, GraduationCap, Briefcase, Heart, Camera, Mountain, Gamepad2, Trophy, Github, ExternalLink } from 'lucide-react'

// Skills data organized by category
type Skill = {
  icon: React.ElementType;
  name: string;
};

const programmingSkills: Skill[] = [
  { icon: SiPython, name: "Python" },
  { icon: DiJava, name: "Java" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiCplusplus, name: "C++" },
  { icon: SiJavascript, name: "JavaScript" },
];

const aiMlSkills: Skill[] = [
  { icon: SiPytorch, name: "PyTorch" },
  { icon: SiTensorflow, name: "TensorFlow" },
];

const webFrameworkSkills: Skill[] = [
  { icon: SiReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiDjango, name: "Django" },
];

const infraSkills: Skill[] = [
  { icon: SiDocker, name: "Docker" },
  { icon: SiKubernetes, name: "Kubernetes" },
  { icon: SiAmazon, name: "AWS" },
  { icon: SiApachekafka, name: "Kafka" },
  { icon: SiGrafana, name: "Grafana" },
];

const databaseSkills: Skill[] = [
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiPostgresql, name: "PostgreSQL" },
];

const toolsSkills: Skill[] = [
  { icon: SiGit, name: "Git" },
  { icon: SiLinux, name: "Linux" },
];

// Photo gallery data
const travelPhotos = [
  {
    src: "/images/me/canyon.jpeg",
    alt: "Grand Canyon",
    caption: "Grand Canyon, Arizona",
    size: "large" as const,
  },
  {
    src: "/images/headshot/mayank_vyas.jpeg",
    alt: "Mayank Vyas",
    caption: "That's me!",
    size: "small" as const,
  },
  {
    src: "/images/me/goldenGate.jpeg",
    alt: "Golden Gate Bridge",
    caption: "San Francisco, California",
    size: "medium" as const,
  },
  {
    src: "/images/me/goldenGatebridge.jpeg",
    alt: "On Golden Gate Bridge",
    caption: "Walking the iconic bridge",
    size: "small" as const,
  },
  {
    src: "/images/me/trees.jpeg",
    alt: "Trail to Water Wheels Bridge",
    caption: "Water Wheels Bridge, Payson",
    size: "medium" as const,
  },
];

const hobbyPhotos = [
  {
    src: "/images/me/golf.jpeg",
    alt: "Playing Golf",
    caption: "Golf days",
    size: "medium" as const,
  },
  {
    src: "/images/me/8ball.jpeg",
    alt: "Playing Pool",
    caption: "8-ball enthusiast",
    size: "small" as const,
  },
  {
    src: "/images/me/trekking.jpeg",
    alt: "Trekking",
    caption: "Mountain adventures",
    size: "medium" as const,
  },
  {
    src: "/images/me/friends.jpeg",
    alt: "With Friends",
    caption: "Good times with great people",
    size: "large" as const,
  },
];

// Hackathon highlights data
const hackathonHighlights = [
  {
    title: "GamED-AI",
    event: "HackASU 2025 - Anthropic Claude AI",
    image: "/images/me/claude.jpeg",
    description: "Built a 4-layer AI pipeline that transforms educational questions into interactive, story-based visualizations with 18 game templates and intelligent caching reducing processing time by 80%.",
    award: "1st Place Winner",
    githubLink: "https://github.com/Mayank-glitch-cpu/Claude_Hackathon/tree/main",
    projectLink: "https://youtu.be/0q3TwJJ7xrA",
  },
  {
    title: "Hire Smart",
    event: "DevHacks x Strategy Hackathon",
    image: "/images/me/firstSolo.jpeg",
    description: "Designed an end-to-end NLP candidate search engine using BERT and FAISS for semantic matching across 10,000+ profiles with <100ms latency.",
    projectLink: "https://youtu.be/CKlaSQfaLH4?si=dY8mIRTTya8_Ve58",
  },
  {
    title: "Interview Unlocked",
    event: "Agentic AI Hackathon - SODA ASU",
    image: "/images/me/interviewprep.jpeg",
    description: "Built an Agentic AI system using LangChain and LangGraph for automated, personalized interview prep—cut manual effort by 90% via modular orchestration.",
    githubLink: "https://github.com/Mayank-glitch-cpu/interview-unlocked",
  },
  {
    title: "Gamify",
    event: "Zoom App Hackathon",
    description: "Developed a Zoom application leveraging real-time transcription to automatically generate interactive quizzes using Gemini AI with seamless platform integration.",
  },
  {
    title: "TwinGenius",
    event: "Devils Invent - Honeywell & ASU",
    description: "Revolutionized industrial digital twin creation by generating complete environments from natural language prompts in under 60 seconds using Gemini AI and AWS IoT TwinMaker.",
  },
];

// Skill Grid Component
const SkillGrid = ({ skills, title }: { skills: Skill[], title: string }) => (
  <div className="mb-4">
    <h4 className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">{title}</h4>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <motion.div
          key={`${skill.name}-${index}`}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          whileHover={{ scale: 1.1, y: -2 }}
          className="group"
        >
          <div className="flex items-center gap-1.5 bg-background/30 backdrop-blur-sm border border-border/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 px-2.5 py-1.5 rounded-lg">
            <skill.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">
              {skill.name}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

// Photo Gallery Component
const PhotoGallery = ({ photos, className = "" }: { photos: typeof travelPhotos, className?: string }) => (
  <div className={`grid grid-cols-4 gap-3 ${className}`}>
    {photos.map((photo, index) => {
      const sizeClasses = {
        small: "col-span-1 row-span-1 aspect-square",
        medium: "col-span-2 row-span-1 aspect-video",
        large: "col-span-2 row-span-2 aspect-square",
      };

      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          whileHover={{ scale: 1.02, zIndex: 10 }}
          className={`${sizeClasses[photo.size]} relative rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300`}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-white text-xs font-medium flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {photo.caption}
            </p>
          </div>
        </motion.div>
      );
    })}
  </div>
);

// About Section
const About = () => {
  const containerRef = useRef(null);

  return (
    <section id="about" className="py-20 relative overflow-hidden" ref={containerRef}>
      <HeroBackground />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4 text-center gradient-text"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          A glimpse into my journey, passions, and the adventures that shape who I am
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-8 items-start max-w-7xl mx-auto">
          {/* Left Column - Journey & Professional Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Introduction Card */}
            <Card className="bg-card/70 backdrop-blur-md border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span className="gradient-text">The Journey Begins</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    Hey there! I'm <span className="text-primary font-semibold">Mayank</span>, a Master's student in Data Science at <span className="text-primary font-semibold">Arizona State University</span>. My story is one of curiosity-driven pivots and bold decisions.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    I started my academic journey with a Bachelor's in <span className="text-primary font-semibold">Electrical Engineering from IITRAM</span>, where I got hands-on experience with electrical machines and power systems. But somewhere along the way, I found myself increasingly fascinated by <span className="text-primary font-semibold">Machine Learning, AI, and distributed systems</span>.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    Before ASU, I spent <span className="text-primary font-semibold">one and a half years at IIITDM Kancheepuram</span> as a research intern, diving deep into computer vision and deep learning. Then came a crossroads: a full-time offer from <span className="text-primary font-semibold">Micron as a Process Engineer</span>. It was a secure path, but my heart was set on something different.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    I took the leap—declining the offer to pursue my Master's at ASU, betting on myself to <span className="text-primary font-semibold">validate and deepen my expertise</span> in the AI/ML domain. And honestly? It's been the best decision I've made.
                  </motion.p>
                </div>
              </CardContent>
            </Card>

            {/* Technical Stack Card */}
            <Card className="bg-card/70 backdrop-blur-md border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold gradient-text">
                  Technical Arsenal
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <SkillGrid skills={programmingSkills} title="Languages" />
                <SkillGrid skills={aiMlSkills} title="AI/ML" />
                <SkillGrid skills={webFrameworkSkills} title="Web & Frameworks" />
                <SkillGrid skills={infraSkills} title="Infrastructure" />
                <SkillGrid skills={databaseSkills} title="Databases" />
                <SkillGrid skills={toolsSkills} title="Tools" />

                <div className="text-center mt-4">
                  <Badge variant="outline" className="bg-primary/10 border-primary/30 text-primary text-xs">
                    18+ Technologies & Growing
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* What I Do Card */}
            <Card className="bg-card/70 backdrop-blur-md border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <span className="gradient-text">What I Build</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    As a Data Science student at ASU, I architect <span className="text-primary font-semibold">intelligent systems</span> by specializing in <span className="text-primary font-semibold">RAG (Retrieval-Augmented Generation)</span> pipelines for LLMs and developing sophisticated <span className="text-primary font-semibold">AI Agents</span>. My core expertise lies in <span className="text-primary font-semibold">Natural Language Processing</span>, where I design high-performance retrieval algorithms to power next-generation AI applications.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    I translate complex theory into real-world impact. My projects include analyzing <span className="text-primary font-semibold">Time Series data</span> for robust <span className="text-primary font-semibold">IoT Pipelines</span> in smart agriculture, and engineering a production-ready, dockerized pipeline for <a href="https://github.com/Mayank-glitch-cpu/automated-self-checkout" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 transition-colors">Intel's automated self-checkout system</a> with Grafana visualization.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    I also engineered a <span className="text-primary font-semibold">Masked R-CNN</span> pipeline to detect the <span className="text-primary font-semibold">primary root length</span> of plant species like wheat, brassica napus, and arabidopsis thaliana—helping biologists study the <span className="text-primary font-semibold">root phenome</span> more effectively.
                  </motion.p>
                </div>
              </CardContent>
            </Card>

            {/* Hackathon Highlights Card */}
            <Card className="bg-card/70 backdrop-blur-md border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-primary" />
                  <span className="gradient-text">Hackathon Highlights</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="text-sm text-muted-foreground mb-4">
                  Building innovative solutions under pressure - here are some memorable hackathon moments.
                </p>
                <div className="space-y-5">
                  {hackathonHighlights.map((hackathon, index) => {
                    // Check if this hackathon should have horizontal layout (image left, content right)
                    const isHorizontalLayout = hackathon.title === "GamED-AI" || hackathon.title === "Hire Smart" || hackathon.title === "Interview Unlocked";
                    
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="group"
                      >
                        <div className="p-4 rounded-xl bg-background/30 border border-border/30 hover:border-primary/30 transition-all duration-300">
                          {isHorizontalLayout && 'image' in hackathon && hackathon.image ? (
                            // Horizontal layout: Image on left, content on right
                            <div className="flex gap-4">
                              <div className="relative w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                                <Image
                                  src={hackathon.image}
                                  alt={hackathon.title}
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-2 mb-2">
                                  <div className="flex-1 min-w-0">
                                    <h4 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                                      {hackathon.title}
                                    </h4>
                                    <p className="text-xs text-muted-foreground mt-0.5">{hackathon.event}</p>
                                  </div>
                                  <div className="flex items-center gap-1 flex-shrink-0">
                                    {hackathon.githubLink && (
                                      <a
                                        href={hackathon.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-1.5 rounded-md hover:bg-muted/50 transition-colors"
                                      >
                                        <Github className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                                      </a>
                                    )}
                                    {hackathon.projectLink && (
                                      <a
                                        href={hackathon.projectLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-1.5 rounded-md hover:bg-muted/50 transition-colors"
                                      >
                                        <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                                      </a>
                                    )}
                                  </div>
                                </div>
                                {hackathon.description && (
                                  <p className="text-xs text-muted-foreground/80 leading-relaxed">
                                    {hackathon.description}
                                  </p>
                                )}
                                {('award' in hackathon) && (hackathon as any).award && (
                                  <span className="inline-flex items-center gap-1 mt-2 text-xs text-yellow-600 dark:text-yellow-400 px-2 py-0.5 rounded-full bg-yellow-500/10 border border-yellow-500/20">
                                    <Trophy className="w-3 h-3" />
                                    {(hackathon as any).award}
                                  </span>
                                )}
                              </div>
                            </div>
                          ) : (
                            // Vertical layout: Image on top, content below
                            <>
                              {/* Image(s) - Enlarged */}
                              {'images' in hackathon && Array.isArray((hackathon as any).images) && (hackathon as any).images.length > 0 ? (
                                <div className="flex gap-2 mb-3">
                                  {((hackathon as any).images as string[]).map((img: string, i: number) => (
                                    <div key={i} className="relative w-28 h-28 rounded-lg overflow-hidden">
                                      <Image
                                        src={img}
                                        alt={`${hackathon.title} ${i + 1}`}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                      />
                                    </div>
                                  ))}
                                </div>
                              ) : 'image' in hackathon && hackathon.image ? (
                                <div className="relative w-full h-32 rounded-lg overflow-hidden mb-3">
                                  <Image
                                    src={hackathon.image}
                                    alt={hackathon.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                  />
                                </div>
                              ) : null}
                              {/* Content */}
                              <div className="flex items-start justify-between gap-2">
                                <div className="flex-1">
                                  <h4 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                                    {hackathon.title}
                                  </h4>
                                  <p className="text-xs text-muted-foreground mt-0.5">{hackathon.event}</p>
                                </div>
                                <div className="flex items-center gap-1 flex-shrink-0">
                                  {hackathon.githubLink && (
                                    <a
                                      href={hackathon.githubLink}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="p-1.5 rounded-md hover:bg-muted/50 transition-colors"
                                    >
                                      <Github className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                                    </a>
                                  )}
                                  {hackathon.projectLink && (
                                    <a
                                      href={hackathon.projectLink}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="p-1.5 rounded-md hover:bg-muted/50 transition-colors"
                                    >
                                      <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                                    </a>
                                  )}
                                </div>
                              </div>
                              {/* Description */}
                              {hackathon.description && (
                                <p className="text-xs text-muted-foreground/80 mt-2 leading-relaxed">
                                  {hackathon.description}
                                </p>
                              )}
                              {/* Award */}
                              {('award' in hackathon) && (hackathon as any).award && (
                                <span className="inline-flex items-center gap-1 mt-3 text-xs text-yellow-600 dark:text-yellow-400 px-2 py-0.5 rounded-full bg-yellow-500/10 border border-yellow-500/20">
                                  <Trophy className="w-3 h-3" />
                                  {(hackathon as any).award}
                                </span>
                              )}
                            </>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Personal & Hobbies */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Beyond the Code Card */}
            <Card className="bg-card/70 backdrop-blur-md border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  <span className="gradient-text">Beyond the Code</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    Life isn't just about algorithms and neural networks (though I do love those!). I believe in living fully and finding joy in diverse experiences.
                  </motion.p>
                </div>
              </CardContent>
            </Card>

            {/* Hobbies Grid */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="bg-card/70 backdrop-blur-md border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 h-full">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <Mountain className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-sm mb-1">Hiking & Trekking</h4>
                    <p className="text-xs text-muted-foreground">
                      Arizona's trails are my weekend therapy
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="bg-card/70 backdrop-blur-md border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 h-full">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <Gamepad2 className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-sm mb-1">Pool & Golf</h4>
                    <p className="text-xs text-muted-foreground">
                      Precision sports that clear my mind
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="bg-card/70 backdrop-blur-md border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 h-full">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <Camera className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-sm mb-1">Photography</h4>
                    <p className="text-xs text-muted-foreground">
                      Capturing moments and landscapes
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card className="bg-card/70 backdrop-blur-md border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 h-full">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-sm mb-1">Road Trips</h4>
                    <p className="text-xs text-muted-foreground">
                      Exploring the American Southwest
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Hobby Photos */}
            <Card className="bg-card/70 backdrop-blur-md border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  <span className="gradient-text">Life in Frames</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <PhotoGallery photos={hobbyPhotos} />
              </CardContent>
            </Card>

            {/* Philosophy Card */}
            <Card className="bg-gradient-to-br from-primary/10 to-purple-500/10 backdrop-blur-md border-primary/20 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500">
              <CardContent className="p-6">
                <motion.blockquote
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <p className="text-lg italic text-foreground/80 mb-3">
                    "The best way to predict the future is to create it."
                  </p>
                  <p className="text-sm text-muted-foreground">
                    — My guiding philosophy
                  </p>
                </motion.blockquote>
              </CardContent>
            </Card>

            {/* Fun Facts Card */}
            <Card className="bg-card/70 backdrop-blur-md border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold gradient-text">
                  Quick Facts
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="space-y-2">
                  {[
                    { emoji: "🎓", fact: "Dropped a Micron offer to follow my passion" },
                    { emoji: "🌵", fact: "Currently based in Tempe, Arizona" },
                    { emoji: "☕", fact: "Coffee enthusiast & late-night coder" },
                    { emoji: "🎱", fact: "Competitive 8-ball player" },
                    { emoji: "🏔️", fact: "Hiked the Grand Canyon rim-to-rim" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors"
                    >
                      <span className="text-lg">{item.emoji}</span>
                      <span className="text-sm text-muted-foreground">{item.fact}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Travel Photos Card - At bottom of right column */}
            <Card className="bg-card/70 backdrop-blur-md border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Camera className="w-5 h-5 text-primary" />
                  <span className="gradient-text">Places I've Explored</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="text-sm text-muted-foreground mb-4">
                  When I'm not coding, I'm exploring the beautiful landscapes of the American Southwest. From the majestic Grand Canyon to the iconic Golden Gate Bridge, every destination teaches me something new.
                </p>
                <PhotoGallery photos={travelPhotos} />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
