"use client"

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import {
  SiPython,
  SiR,
  SiJavascript,
  SiHtml5,
  SiCplusplus,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiOpencv,
  SiKeras,
  SiApachespark,
  SiMongodb,
  SiPostgresql,
  SiFlask,
  SiDjango,
  SiReact,
  SiGithub,
  SiSelenium,
  SiStreamlit,
  SiFastapi,
  SiPostman,
} from 'react-icons/si'
import { DiJava } from 'react-icons/di'
import { FaWindows } from 'react-icons/fa'

const skills = [
  { icon: SiPython, name: "Python" },
  { icon: SiR, name: "R" },
  { icon: DiJava, name: "Java" },
  { icon: SiJavascript, name: "JavaScript" },
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
  { icon: SiFlask, name: "Flask" },
  { icon: SiDjango, name: "Django" },
  { icon: SiReact, name: "React" },
  { icon: SiGithub, name: "GitHub" },
  { icon: FaWindows, name: "Azure" },
  { icon: SiSelenium, name: "Selenium" },
  { icon: SiStreamlit, name: "Streamlit" },
  { icon: SiFastapi, name: "FastAPI" },
  { icon: SiPostman, name: "Postman" },
]

const About = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])

  return (
    <section id="about" className="py-20 bg-muted/50" ref={containerRef}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center gradient-text"
        >
          About Me
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-20"
        >
          <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
          <div className="space-y-4 text-lg text-muted-foreground">
          
<p>  
I’m Hrishikesh Magadum, a driven technologist with a passion for harnessing data and technology to create impactful solutions. As a Master's student in Data Science and Analytics at Arizona State University, I blend academic rigor with practical expertise to tackle real-world challenges and deliver measurable results.  
</p>  
<p>  
My journey began with a B.Tech in Computer Science from Vellore Institute of Technology, where I graduated with a strong 3.71 CGPA. This foundation has enabled me to excel in machine learning, data analytics, and full-stack development, giving me the versatility to work across domains and technologies.  
</p>  
<p>  
I thrive on developing solutions that improve workflows, enable smarter decision-making, and provide businesses with actionable insights. Whether building data pipelines, crafting intuitive user experiences, or deploying machine learning models, I focus on delivering solutions that drive value and make a difference.  
</p>  
<p>  
With a passion for innovation and a commitment to continuous learning, I’m eager to contribute to teams that value creativity and technology as tools for growth and transformation.  
</p>  
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ opacity }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                  ease: "easeOut"
                }}
                className="group relative"
              >
                <Card className="bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors">
                  <CardContent className="p-4 flex flex-col items-center justify-center">
                    <skill.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="mt-2 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

