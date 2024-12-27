"use client"

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const experiences = [
  {
    title: "Database Developer",
    company: "Winsoft Technologies",
    logo: "/images/logos/winsoft_logo.svg",
    period: "January 2024 - July 2024",
    description: "Improved database performance and data integrity for banking systems.",
    points: [
      "Created and revamped 20+ complex SQL stored procedures, improving data integrity by 8%.",
      "Designed and executed 50+ advanced SQL queries, reducing execution time by 12%.",
      "Collaborated with QA team to implement automated backup strategies, reducing downtime by 30%.",
      "Resolved 100% of critical backend issues and troubleshot 15+ stored procedures."
    ]
  },
  {
    title: "Software Developer Intern",
    company: "Worldline",
    logo: "/images/logos/worldline_logo.svg",
    period: "February 2023 - July 2023",
    description: "Developed core modules for a Chargeback Automation system.",
    points: [
      "Constructed modules using MongoDB, Node.js, and RabbitMQ, eliminating manual email-based validation.",
      "Reduced dispute resolution time by 25%, processing 6,000+ monthly chargeback transactions.",
      "Engineered callback functions for microservices using Kubernetes, increasing system efficiency by 20%.",
      "Developed a throttle-level validation plugin with JavaScript, enhancing transaction security."
    ]
  },
  {
    title: "Data Analytics Intern",
    company: "Reliance Jio",
    logo: "/images/logos/reliance_jio_logo.svg",
    period: "May 2022 - August 2022",
    description: "Optimized crowd detection models for real-time scenarios.",
    points: [
      "Improved real-time object detection accuracy by 1.25% through camera angle optimization.",
      "Deployed PeopleNet v2.6 model, achieving 91.82% precision and 88.60% recall.",
      "Enhanced performance by 10% using Nvidia DeepStream SDK's GPU for containerized models."
    ]
  }
]

const Experience = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  return (
    <section id="experience" className="py-20 bg-background" ref={containerRef}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center gradient-text"
        >
          Professional Experience
        </motion.h2>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/20 via-primary to-primary/20"></div>
          <div className="space-y-12 md:space-y-20">
            {experiences.map((exp, index) => {
              const targetScale = useTransform(
                scrollYProgress,
                [0, 0.5, 1],
                [0.8, 1, 0.8]
              )
              const targetOpacity = useTransform(
                scrollYProgress,
                [0, 0.5, 1],
                [0.6, 1, 0.6]
              )

              return (
                <motion.div
                  key={index}
                  style={{
                    scale: targetScale,
                    opacity: targetOpacity
                  }}
                  initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} items-start md:items-center`}>
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} pl-12 md:pl-0`}>
                      <Card className="w-full">
                        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 sm:p-6">
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            width={60}
                            height={60}
                            className="rounded-full"
                          />
                          <div>
                            <CardTitle className="text-xl sm:text-2xl mb-1">{exp.title}</CardTitle>
                            <p className="font-semibold text-primary text-base sm:text-lg">{exp.company}</p>
                            <p className="text-muted-foreground text-sm">{exp.period}</p>
                          </div>
                        </CardHeader>
                        <CardContent className="p-4 sm:p-6 pt-2">
                          <p className="mb-4 text-base sm:text-lg">{exp.description}</p>
                          <ul className="list-disc pl-5 space-y-2">
                            {exp.points.map((point, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: i * 0.1 }}
                                className="text-sm sm:text-base text-foreground/80"
                              >
                                {point}
                              </motion.li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  <div className="absolute top-0 md:top-1/2 left-4 md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background"></div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience