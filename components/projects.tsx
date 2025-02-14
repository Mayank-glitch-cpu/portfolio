"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import { ProjectModal } from './project-modal'


type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  achievements: string[];
  period: string;
  githubUrl: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    title: '📌 Project Title: Sales Performance Dashboard in Power BI ',
    description: 'I created this interactive Power BI dashboard to analyze sales performance data and uncover key insights. The dashboard helps businesses track revenue trends, identify top-performing products, and compare regional sales efficiently.',
    image: '/images/projects/dataline_powerBi.png',
    technologies: ['Docker', 'Grafana', 'MQTT', 'oAuth2.0'],
    achievements: [
      '✅ Revenue Trends: Track monthly revenue growth',
      '✅ Top Products & Categories: Identify best-selling items',
      '✅ Regional Performance: Compare sales across different locations',
      '✅ Dynamic Filtering: Users can interact with the visuals for deeper insights'
    ],
    period: 'February 2025',
    githubUrl: 'https://github.com/intel-retail/automated-self-checkout/pull/652',
    liveUrl: 'https://app.powerbi.com/reportEmbed?reportId=28cfe113-229a-461c-a719-cc7ce42fd44d&autoAuth=true&ctid=41f88ecb-ca63-404d-97dd-ab0a169fd138'
  },
  {
    title: '🛒 Intel Automated Checkout System (Open-Source Contribution)',
    description: 'Objective: Optimize real-time monitoring of CPU latency and FPS.',
    image: '/images/projects/intel.jpg',
    technologies: ['Docker', 'Grafana', 'MQTT', 'oAuth2.0'],
    achievements: [
      'Deployed Dockerized Grafana dashboards for system health tracking. 💻',
      'Implemented OAuth 2.0 to secure admin access, preventing data breaches. 🔒',
      'Impact: Reduced system downtime by 25%. ⚡',
      'Containerized using Docker for easy distribution and deployment'
    ],
    period: 'January 2025 - Present',
    githubUrl: 'https://github.com/intel-retail/automated-self-checkout/pull/652',
    liveUrl: ''
  },
  {
    title: '🌱 MaskRoot: Automated Root Phenotyping',
    description: 'Deep Learning pipeline for agricultural root segmentation using Mask R-CNN',
    image: '/images/projects/root.jpg',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'Mask R-CNN'],
    achievements: [
      '96.5% segmentation accuracy using transfer learning',
      '90% reduction in manual annotation time',
      'Published in Springer Conference'
    ],
    period: 'April 2023 - April 2024',
    githubUrl: 'https://github.com/Mayank-glitch-cpu/Root_phenotyping',
    liveUrl: ''
  },
  {
    title: '📡 LoRa-Based Smart Agriculture (DASA)',
    description: 'IoT data aggregation system with fog computing',
    image: '/images/projects/dasa.jpg',
    technologies: ['Python', 'Apache Spark', 'LoRaWAN', 'Ward Clustering'],
    achievements: [
      '57.39% data compression at fog layer',
      '38% reduction in cloud transmission costs',
      'Published in IEEE AINA 2023'
    ],
    period: 'May 2022 - August 2022',
    githubUrl: 'https://github.com/Mayank-glitch-cpu/AINA_Code',
    liveUrl: ''
  },
  {
    title: '🚦 RL Traffic Control with SUMO',
    description: 'Reinforcement Learning for traffic light optimization',
    image: '/images/projects/sumo_rl.jpg',
    technologies: ['Python', 'RLlib', 'SUMO', 'TensorFlow'],
    achievements: [
      '35% reduction in vehicle waiting time',
      '22% faster average travel time',
      'DQN agent implementation'
    ],
    period: 'January 2024 - April 2024',
    githubUrl: 'https://github.com/Mayank-glitch-cpu/Intersection-Control-using-Reinforcement-learning-and-SUMO',
    liveUrl: ''
  },
  {
    title: '🧠 MLP from Scratch',
    description: 'Neural network implementation from ground up',
    image: '/images/projects/MLP.jpg',
    technologies: ['Python', 'NumPy', 'Matplotlib', 'Jupyter'],
    achievements: [
      '92% accuracy on MNIST dataset',
      'Manual implementation of backpropagation',
      'Visualization of weight matrices'
    ],
    period: 'August 2024 - November 2024',
    githubUrl: 'https://github.com/Mayank-glitch-cpu/MLP-from-Scratch',
    liveUrl: ''
  },
  {
    title: '📶 RPDM: IoT Data Forwarding Model',
    description: 'Lightweight ML model for edge devices',
    image: '/images/projects/rpdm.png',
    technologies: ['TensorFlow Lite', 'Decision Trees', 'FlatBuffers'],
    achievements: [
      '99.97% prediction accuracy',
      '82.89% power consumption reduction',
      'Raspberry Pi deployment'
    ],
    period: 'August 2023 - January 2024',
    githubUrl: 'https://github.com/Mayank-glitch-cpu/Ml_predictions_framework_for_Smart_Farming',
    liveUrl: ''
  },
  {
    title: '🛠️ Data Processing Pipeline',
    description: 'ETL pipeline for large dataset processing',
    image: '/images/projects/DP.jpg',
    technologies: ['PySpark', 'Pandas', 'SQL', 'Cron'],
    achievements: [
      '40% runtime reduction through optimization',
      '10k+ rows processed daily',
      'Automated report generation'
    ],
    period: 'August 2024 - October 2024',
    githubUrl: 'https://github.com/Mayank-glitch-cpu/Data-Processing',
    liveUrl: ''
  },
  {
    title: '📊 Tucson Business Trends Analysis',
    description: 'Identify growth patterns in Arizona\'s business landscape.',
    image: '/images/projects/BA.jpg',
    technologies: ['PySpark', 'Power Bi', 'Tableau'],
    achievements: [
      'Processed 10,000+ business records to analyze customer engagement and operational trends. 📂',
      'Built interactive dashboards revealing 20% higher weekend operations in postal code 85706. 🏙️',
      'Impact: Enabled data-driven expansion strategies for local businesses. 💼'
    ],
    period: 'August 2024 - December 2024',
    githubUrl: 'https://github.com/Mayank-glitch-cpu/Reimagined-businesses-in-Tucson',
    liveUrl: ''
  }
]

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center gradient-text"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105"
                onClick={() => setSelectedProject(project)}
              >
                <CardContent className="p-0">
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <Badge key={i} variant="secondary">{tech}</Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary">+{project.technologies.length - 3}</Badge>
                      )}
                    </div>
                    <div className="flex justify-between">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" /> GitHub
                        </a>
                      </Button>
                      <Button size="sm" onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}>
                        <ExternalLink className="mr-2 h-4 w-4" /> Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;