"use client"

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const experiences = [
  {
    title: "Research Intern - Kalman Filter",
    company: "Indian Institute of Information Technology Design & Manufacturing Kancheepuram",
    logo: "/images/logos/IIITDM.jpeg",
    period: "May 2023 - January 2024",
    description: "Improved database performance and data integrity for banking systems.",
    points: [
      "🚀 IoT Infrastructure Development: Engineered a LoRa-based fog computing framework for smart agriculture, reducing sensor energy consumption by 40% and optimizing data transmission using regression models.",
      "🚀 Data Efficiency: Deployed APAEs (Analytical Prediction Algorithm) across edge-fog-cloud layers, cutting data transmissions by 93.6% while maintaining <10% MAE.",
      "🚀 System Integration: Streamlined sensor data collection (temperature, humidity, soil moisture) using Arduino and LoRa, achieving 98% irrigation efficiency."
    ],
    // add the research publications links with thumbnails
    publications: [
      {
        title: "Optimizing Kalman Filters for Data Integrity",
        url: "https://ieeexplore.ieee.org/abstract/document/10278208",
        thumbnail: "/images/logos/IEEE.png"
      },
      // {
        // title: "LoRa-based Fog Computing Framework for Smart Agriculture",
        // url: "https://example.com/publication2",
        // thumbnail: "/images/publications/kf_thumbnail2.jpg"
      // }
    ]
  },
  {
    title: "Research Intern - Machine Learning Framework",
    company: "Indian Institute of Information Technology Design & Manufacturing Kancheepuram",
    logo: "/images/logos/IIITDM.jpeg",
    period: "April 2023 - January 2023",
    description: "Developed core modules for a Chargeback Automation system.",
    points: [
      "🚀 Designed a Regressive Prediction Data Forwarding Model (RPDM) using TensorFlow Lite, reducing bandwidth usage by 85% in IoT networks. modules using MongoDB, Node.js, and RabbitMQ, eliminating manual email-based validation.",
      "🚀 Achieved 99.97% prediction accuracy with Decision Trees, enabling real-time actuation on edge devices during internet outages.uced dispute resolution time by 25%, processing 6,000+ monthly chargeback transactions.",
      "🚀 Implemented lightweight model compression for deployment on Raspberry Pi/Arduino, reducing power consumption by 82.89%.",
    
      // "Developed a throttle-level validation plugin with JavaScript, enhancing transaction security."
    ],
    publications: [
      
      {
        title: "LoRa-based Fog Computing Framework for Smart Agriculture",
        url: "https://ieeexplore.ieee.org/abstract/document/10572197",
        thumbnail: "/images/logos/IEEE.png"
      }
    ]
  },
  {
    title: "Research Intern - IoT Innovator",
    company: "Indian Institute of Information Technology Design & Manufacturing Kancheepuram",
    logo: "/images/logos/IIITDM.jpeg",
    period: "May 2022 - August 2022",
    description: "Optimized crowd detection models for real-time scenarios.",
    points: [
      "🚀 Designed a Ward’s method clustering algorithm to compress IoT sensor data by 57.39%, deployed on fog nodes to reduce cloud transmission costs by 38%. ",
      "🚀 Integrated with The Things Network, achieving 1.1s latency for real-time field monitoring, improving response time by 35% over traditional cellular networks.",
      "🚀Published in IEEE AINA 2023 and tested on a 20-acre testbed, cutting energy consumption by 82.89% at tolerance thresholds (ε=1.0)"
    ],
    publications: [
      {
        title: "An Efficient Data Aggregation Algorithm for LoRa Enabled Fog Layer in Smart Agriculture",
        url: "https://link.springer.com/chapter/10.1007/978-3-031-28451-9_4",
        thumbnail: "/images/logos/springer.jpeg"
      }
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
                          {exp.publications && (
                            <div className="mt-4">
                              <h4 className="text-lg font-semibold mb-2">Publications:</h4>
                              {exp.publications.map((pub, i) => (
                                <a
                                  key={i}
                                  href={pub.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center space-x-4 mt-2"
                                >
                                  <Image
                                    src={pub.thumbnail}
                                    alt={pub.title}
                                    width={50}
                                    height={50}
                                    className="rounded-lg"
                                  />
                                  <span className="text-sm text-primary">{pub.title}</span>
                                </a>
                              ))}
                            </div>
                          )}
                          {/* <div className="mt-4">
                             {exp.publications && exp.publications.map((pub, i) => (
                             <a key={i} href={pub.url} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 mt-2">
                             <Image 
                              src={pub.thumbnail} 
                              alt={pub.title} 
                              width={50} 
                              height={50} 
                              className="rounded-lg"
                              />
                            <span className="text-sm text-primary">{pub.title}</span>
                            </a>
                          ))}
                          </div> */}
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