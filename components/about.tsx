"use client"

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { HeroBackground } from './hero-background'
import {
  SiPython,
  SiR,
  SiJavascript,
  SiHtml5,
  SiCplusplus,
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiScikitlearn,
  SiReact,
  SiFlask,
  SiDjango,
  SiApachespark,
  SiMongodb,
  SiPostgresql,
  SiOpencv,
  SiPandas,
  SiGithub,
  SiAzuredevops,
  SiArduino,
  SiGrafana,
  SiPowerbi,
  SiTableau,
} from "react-icons/si";
import { DiJava } from 'react-icons/di'
import { FaWindows } from 'react-icons/fa'
import { SiRaspberrypi } from 'react-icons/si'
import { SiCnn } from 'react-icons/si'
import { SiApache } from 'react-icons/si'
import { SiNumpy } from 'react-icons/si'

const skills = [
  { icon: SiPython, name: "Python" },
  { icon: DiJava, name: "Java" },
  { icon: SiHtml5, name: "HTML" },
  { icon: SiCplusplus, name: "C++" },
  { icon: SiTensorflow, name: "TensorFlow" },
  { icon: SiPytorch, name: "PyTorch" },
  { icon: SiScikitlearn, name: "Scikit-learn" },
  { icon: SiPandas, name: "Pandas" },
  { icon: SiOpencv, name: "OpenCV" },
  { icon: SiKeras, name: "Keras" },
  { icon: SiApachespark, name: "PySpark" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiReact, name: "React" },
  { icon: SiGithub, name: "GitHub" },
  { icon: FaWindows, name: "Azure" },
  { icon: SiArduino, name: "Arduino" },
  { icon: SiNumpy, name: "NumPy" },
  { icon: SiCnn, name: "CNN" },
  { icon: SiApache, name: "Apache" },
  { icon: SiRaspberrypi, name: "Raspberry Pi" },
  { icon: SiGrafana, name: "Grafana" },
  { icon: SiPowerbi, name: "Power BI" },
  { icon: SiTableau, name: "Tableau" },
]

// Split skills into three columns for carousel
const col1Skills = skills.slice(0, Math.ceil(skills.length / 3))
const col2Skills = skills.slice(Math.ceil(skills.length / 3), Math.ceil(skills.length * 2 / 3))
const col3Skills = skills.slice(Math.ceil(skills.length * 2 / 3))

const VerticalSkillCarousel = ({ skills, direction = 'up' }: { skills: typeof col1Skills, direction?: 'up' | 'down' }) => {
  return (
    <div className="overflow-hidden h-96 w-full">
      <motion.div
        className="flex flex-col gap-3"
        animate={{
          y: direction === 'up' ? [0, -100 * skills.length] : [-100 * skills.length, 0],
        }}
        transition={{
          y: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
        style={{ height: `${skills.length * 200}px` }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <motion.div
            key={`${skill.name}-${index}`}
            className="flex-shrink-0 h-20"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors h-full">
              <CardContent className="p-3 flex flex-col items-center justify-center h-full">
                <skill.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="mt-1 text-xs text-muted-foreground group-hover:text-primary transition-colors text-center font-medium">
                  {skill.name}
                </span>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

const About = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])

  return (
    <section id="about" className="py-20 bg-muted/50 relative overflow-hidden" ref={containerRef}>
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
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  As a Data Science master's student at ASU, I architect intelligent systems by specializing in <span className="text-purple-500">RAG (Retrieval-Augmented Generation)</span> pipelines for LLMs and developing sophisticated <span className="text-purple-500">AI Agents</span>. My core expertise lies in <span className="text-purple-500">Natural Language Processing</span>, where I design high-performance <span className="text-purple-500">retrieval algorithms</span> to power next-generation AI applications.
                </p>
                <p>
                  I translate complex theory into real-world impact. My project experience includes analyzing <span className="text-purple-500">Time Series data</span> to build robust <span className="text-purple-500">IoT Pipelines</span> for smart agriculture and engineering a production-ready, dockerized pipeline for <a href="https://github.com/Mayank-glitch-cpu/automated-self-checkout" target="_blank" rel="noopener noreferrer" className="text-primary underline decoration-purple-500 hover:text-purple-400 transition-colors">Intel's automated self-checkout system</a> to visualize critical data on Grafana.
                </p>
                <p>
                  I also engineered a <span className="text-purple-500">Masked R-CNN</span> pipeline to intelligently detect the <span className="text-purple-500">primary root length</span> of plant species like wheat, brassica napus, and arabidopsis thaliana, enabling biologists to study the <span className="text-purple-500">root phenome</span> more effectively.
                </p>
            </div>
          </motion.div>

          {/* Right Column - Technical Stack with Three Column Vertical Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* <h3 className="text-2xl font-semibold text-center gradient-text">Technical Stack</h3> */}
            
            <div className="grid grid-cols-3 gap-3 h-96">
              {/* First Column - Moving Up */}
              <VerticalSkillCarousel skills={col1Skills} direction="up" />
              
              {/* Second Column - Moving Down */}
              <VerticalSkillCarousel skills={col2Skills} direction="down" />
              
              {/* Third Column - Moving Up */}
              <VerticalSkillCarousel skills={col3Skills} direction="up" />
            </div>
            
            <div className="text-center mt-6">
              <p className="text-sm text-muted-foreground">
                {skills.length}+ Technologies & Growing
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

