"use client"

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, GraduationCap, Calendar, Trophy, BarChart3, TrendingUp, Database } from 'lucide-react'
import Image from 'next/image'
import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCplusplus,
  SiTensorflow,
  SiPytorch,
  SiReact,
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiPowerbi,
  SiTableau,
} from "react-icons/si";
import { DiJava } from 'react-icons/di'
import { HeroBackground } from './hero-background';

// Skills data
type Skill = {
  icon: React.ElementType;
  name: string;
  category: string;
};

const skills: Skill[] = [
  { icon: SiPython, name: "Python", category: "Programming" },
  { icon: DiJava, name: "Java", category: "Programming" },
  { icon: SiHtml5, name: "HTML", category: "Web" },
  { icon: SiCplusplus, name: "C++", category: "Programming" },
  { icon: SiTensorflow, name: "TensorFlow", category: "AI/ML" },
  { icon: SiPytorch, name: "PyTorch", category: "AI/ML" },
  { icon: SiMongodb, name: "MongoDB", category: "Database" },
  { icon: SiPostgresql, name: "PostgreSQL", category: "Database" },
  { icon: SiReact, name: "React", category: "Web" },
  { icon: SiDjango, name: "Django", category: "Framework" },
  { icon: SiPowerbi, name: "Power BI", category: "Analytics" },
  { icon: SiTableau, name: "Tableau", category: "Analytics" },
];

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
          className="text-3xl font-bold mb-12 text-center gradient-text"
        >
          About Me
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          {/* Left Column - About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card className="bg-card/70 backdrop-blur-md border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
              <CardContent className="p-8">
                <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    As a Data Science master's student at ASU, I architect intelligent systems by specializing in <span className="text-primary font-semibold">RAG (Retrieval-Augmented Generation)</span> pipelines for LLMs and developing sophisticated <span className="text-primary font-semibold">AI Agents</span>. My core expertise lies in <span className="text-primary font-semibold">Natural Language Processing</span>, where I design high-performance <span className="text-primary font-semibold">retrieval algorithms</span> to power next-generation AI applications.
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    I translate complex theory into real-world impact. My project experience includes analyzing <span className="text-primary font-semibold">Time Series data</span> to build robust <span className="text-primary font-semibold">IoT Pipelines</span> for smart agriculture and engineering a production-ready, dockerized pipeline for <a href="https://github.com/Mayank-glitch-cpu/automated-self-checkout" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 transition-colors">Intel's automated self-checkout system</a> to visualize critical data on Grafana.
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    I also engineered a <span className="text-primary font-semibold">Masked R-CNN</span> pipeline to intelligently detect the <span className="text-primary font-semibold">primary root length</span> of plant species like wheat, brassica napus, and arabidopsis thaliana, enabling biologists to study the <span className="text-primary font-semibold">root phenome</span> more effectively.
                  </motion.p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Technical Stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="bg-card/70 backdrop-blur-md border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-center gradient-text">
                  Technical Stack
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={`${skill.name}-${index}`}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="group"
                    >
                      <Card className="bg-background/30 backdrop-blur-sm border-border/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 h-full">
                        <CardContent className="p-4 flex flex-col items-center justify-center text-center space-y-2">
                          <skill.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                          <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">
                            {skill.name}
                          </span>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
                
                <div className="text-center mt-6">
                  <Badge variant="outline" className="bg-primary/10 border-primary/30 text-primary">
                    {skills.length}+ Technologies & Growing
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default About;