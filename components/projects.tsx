"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, ChevronDown } from 'lucide-react'
import Image from 'next/image'

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  achievements: string[];
  period: string;
  githubUrl: string;
  liveUrl?: string;
  category: string;
};

const projects: Project[] = [
  {
    title: 'AI-Powered Gamified Learning Platform',
    description: 'Transform educational questions into interactive, story-based visualizations using AI. Features a 4-layer pipeline that intelligently routes content from documents (PDF/DOCX) to 18 distinct game templates with intelligent caching and real-time progress tracking.',
    image: '/images/projects/claude.webp',
    technologies: ['Next.js', 'FastAPI', 'Claude AI', 'Zustand'],
    achievements: [
      '1st Place Winner at HackASU 2025 (Anthropic Sponsored)',
      'Built 18 game templates with template-aware story generation',
      'Implemented intelligent caching reducing processing time by 80%'
    ],
    period: 'Dec 2025',
    githubUrl: 'https://github.com/Mayank-glitch-cpu/Claude_Hackathon',
    liveUrl: 'https://youtu.be/0q3TwJJ7xrA',
    category: 'AI & LLM'
  },
  {
    title: 'Code Completion Model: Multi-Dimensional LLM Analysis',
    description: 'Research project investigating efficiency, scalability, and linguistic adaptability of Fine-Tuned LLMs for code generation. Explores LoRA rank optimization, data scaling effects, and cross-language generalization using GPT-2.',
    image: '/images/projects/Fine Tuning.png',
    technologies: ['PyTorch', 'GPT-2', 'LoRA/PEFT', 'Transformers'],
    achievements: [
      'Identified optimal LoRA rank 16 achieving 30% syntax pass rate',
      'Discovered "Complexity Trap" in data scaling behavior',
      'Demonstrated language-agnostic learning across Python, Java, JavaScript'
    ],
    period: 'Nov 2025',
    githubUrl: 'https://github.com/Mayank-glitch-cpu/Code-Completion-ModeL/tree/main',
    liveUrl: 'https://docs.google.com/presentation/d/19YUKdk89ZhGiziEwFF0n-UEtvHQRzPUxMawx2kLWktQ/edit?usp=sharing',
    category: 'AI & LLM'
  },
  {
    title: 'TREC Report Generator',
    description: 'Python pipeline to convert inspection JSON data into populated TREC (Texas Real Estate Commission) HTML reports. Features smart mapping across 6 TREC sections, automatic empty section removal, and proper formatting for comments, images, and videos.',
    image: '/images/projects/TREC.png',
    technologies: ['Python', 'BeautifulSoup4', 'HTML/CSS', 'JSON'],
    achievements: [
      'Automated mapping of line items to TREC sections I-VI',
      'Smart filtering removes empty sections automatically',
      'Proper media embedding with images and video controls'
    ],
    period: 'Nov 2025',
    githubUrl: 'https://github.com/Mayank-glitch-cpu/TREC-Report-Generator',
    category: 'Data'
  },
  // {
  //   title: 'Job Tracker: AI-Powered Career Automation',
  //   description: 'End-to-end AI automation pipeline using Elasticsearch for semantic search and knowledge graphs to map job requirements with user skills.',
  //   image: '/images/projects/AI Job Tracker Overview.png',
  //   technologies: ['Elasticsearch', 'LLM Agents', 'Knowledge Graphs', 'Chrome Extension'],
  //   achievements: [
  //     'Improved job match relevance by 92% through AI automation',
  //     'Launched Chrome extension with 12 active users across US and India',
  //     'Reduced manual search time by 98%'
  //   ],
  //   period: 'Present',
  //   githubUrl: 'https://github.com/Mayank-glitch-cpu/Job-Tracker',
  //   liveUrl: 'https://chromewebstore.google.com/detail/job-tracker/jglalknjiibgaggndnicpaiigbgjfgha',
  //   category: 'AI & LLM'
  // },
  {
    title: 'Enterprise Sales Analytics Dashboard',
    description: 'Power BI dashboard with DAX measures and advanced data modeling for actionable business intelligence.',
    image: '/images/projects/dashboard.png',
    technologies: ['Power BI', 'DAX', 'Data Modeling', 'ETL'],
    achievements: [
      'Achieved 99.8% accuracy in YoY growth calculations',
      'Reduced query time by 40% through star schema optimization',
      'Revealed $1.2M revenue opportunity via geo-spatial analysis'
    ],
    period: 'Feb 2025',
    githubUrl: 'https://github.com/intel-retail/automated-self-checkout/pull/652',
    liveUrl: 'https://app.powerbi.com/reportEmbed?reportId=28cfe113-229a-461c-a719-cc7ce42fd44d&autoAuth=true&ctid=41f88ecb-ca63-404d-97dd-ab0a169fd138',
    category: 'Data Analytics'
  },
  {
    title: 'Intel Automated Checkout System (Open Source Contribution)',
    description: 'Automated data extraction and real-time visualization pipeline for Intel\'s retail edge computing platform. Built Python scripts to extract metrics from results logs and publish to an MQTT broker, integrated with Grafana dashboards via the MQTT plugin. Created custom Docker images for Grafana and MQTT configured to communicate on the same Docker network using Docker Compose.',
    image: '/images/projects/intel.png',
    technologies: ['Docker', 'Grafana', 'MQTT', 'Docker Compose'],
    achievements: [
      'Reduced MTTR by 73% through custom alerting',
      'Implemented JWT-based OAuth 2.0 with RBAC for SOC2 compliance',
      'Automated data extraction pipeline with real-time MQTT streaming'
    ],
    period: 'Jan 2025',
    githubUrl: 'https://github.com/intel-retail/automated-self-checkout/pull/652',
    liveUrl: 'https://drive.google.com/file/d/18ah7F6vSt54jlHsKUM9YT-EHUG1ZWRzg/view?usp=sharing',
    category: 'DevOps'
  },
  {
    title: 'MaskRoot: CV for Agricultural Phenomics',
    description: "This project is part of a Bachelor's Research Thesis, aiming to detect and segment primary roots in plant images using a customized version of the Mask R-CNN model adapted for TensorFlow 2.0 and Keras 2.2.8. The original codebase from Matterport's Mask R-CNN was modified for compatibility and to support training and inference on annotated root datasets.",
    image: '/images/projects/root.png',
    technologies: ['TensorFlow', 'OpenCV', 'Mask R-CNN', 'FPN'],
    achievements: [
      'Achieved 96.5% IoU accuracy through transfer learning',
      'Reduced annotation workload by 90%',
      'Published in Springer\'s CV in Plant Phenotyping conference'
    ],
    period: 'Apr 2023 — Apr 2024',
    githubUrl: 'https://github.com/Mayank-glitch-cpu/Root_phenotyping',
    category: 'ML'
  },
    // {
    //   title: 'DASA: Distributed Agricultural Sensing',
    //   description: 'Hierarchical IoT architecture using LoRaWAN for agricultural monitoring with fog computing layer.',
    //   image: '/images/projects/dasa.jpg',
    //   technologies: ['Apache Spark', 'LoRaWAN', 'Edge Computing', 'Time Series'],
    //   achievements: [
    //     'Achieved 57.39% data compression without information loss',
    //     'Reduced cloud costs by 38% through edge analytics',
    //     'Published in IEEE AINA 2023'
    //   ],
    //   period: 'May 2022 — Aug 2022',
    //   githubUrl: 'https://github.com/Mayank-glitch-cpu/AINA_Code',
    //   category: 'IoT'
    // },
  // {
  //   title: 'Deep RL for Urban Traffic Control',
  //   description: 'Adaptive traffic signal control using Deep Q-Networks in SUMO simulation environment.',
  //   image: '/images/projects/sumo_rl.jpg',
  //   technologies: ['RLlib', 'SUMO', 'TensorFlow', 'DQN'],
  //   achievements: [
  //     'Reduced vehicle waiting time by 35%',
  //     'Improved traffic throughput by 22%',
  //     'Implemented double DQN with dueling architecture'
  //   ],
  //   period: 'Jan 2024 — Apr 2024',
  //   githubUrl: 'https://github.com/Mayank-glitch-cpu/Intersection-Control-using-Reinforcement-learning-and-SUMO',
  //   category: 'ML'
  // },
  {
    title: 'MLP from First Principles',
    description: 'This projects implementation of a Multi-Layer Perceptron (MLP) from scratch using Python. It demonstrates the fundamental concepts of building and training a neural network, including forward propagation, backward propagation, and parameter optimization.',
    image: '/images/projects/mlp.png',
    technologies: ['NumPy', 'Backpropagation', 'Gradient Descent', 'Jupyter'],
    achievements: [
      'Achieved 92% accuracy on MNIST using only NumPy',
      'Implemented automatic differentiation for gradients',
      'Created interactive weight matrix visualizations'
    ],
    period: 'Aug 2024 — Nov 2024',
    githubUrl: 'https://github.com/Mayank-glitch-cpu/MLP-from-Scratch',
    category: 'ML'
  },
  // {
  //   title: 'RPDM: Resource-efficient IoT ML',
  //   description: 'Ultra-lightweight ML inference for resource-constrained IoT devices with model quantization.',
  //   image: '/images/projects/rpdm.png',
  //   technologies: ['TensorFlow Lite', 'Model Quantization', 'Raspberry Pi', 'Arduino'],
  //   achievements: [
  //     'Achieved 99.97% accuracy with 22MB to 480KB model compression',
  //     'Decreased power consumption by 82.89%',
  //     'Deployed to Raspberry Pi Zero and Arduino'
  //   ],
  //   period: 'Aug 2023 — Jan 2024',
  //   githubUrl: 'https://github.com/Mayank-glitch-cpu/Ml_predictions_framework_for_Smart_Farming',
  //   category: 'IoT'
  // },
  // {
  //   title: 'Scalable Data Processing Pipeline',
  //   description: 'Distributed ETL pipeline for high-frequency sensor data with data lineage for compliance.',
  //   image: '/images/projects/DP.jpg',
  //   technologies: ['PySpark', 'Pandas', 'SQL', 'Streaming'],
  //   achievements: [
  //     'Reduced processing runtime by 40%',
  //     'Scaled to 10,000+ rows/sec with sub-second latency',
  //     'Implemented automated data quality checks'
  //   ],
  //   period: 'Aug 2024 — Oct 2024',
  //   githubUrl: 'https://github.com/Mayank-glitch-cpu/Data-Processing',
  //   category: 'Data'
  // }
]

const categories = ['All', 'AI & LLM', 'ML', 'Data', 'Data Analytics', 'IoT', 'DevOps']

const Projects = () => {
  const [filter, setFilter] = useState<string>('All')
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const filteredProjects = projects.filter(project => {
    if (filter === 'All') return true
    return project.category === filter
  })

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl font-medium mb-8 text-foreground"
        >
          Projects
        </motion.h2>

        {/* Minimal Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-3 py-1.5 text-sm rounded-full transition-all duration-200 ${
                filter === category
                  ? 'bg-foreground text-background'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects List */}
        <div className="space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                layout
                className="group"
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  {/* Image + Date Column */}
                  <div className="sm:w-44 flex-shrink-0">
                    <div className="relative w-full h-24 sm:h-20 rounded-lg overflow-hidden bg-muted/30 mb-2">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 176px"
                      />
                    </div>
                    <span className="text-xs text-muted-foreground font-light">
                      {project.period}
                    </span>
                  </div>

                  {/* Content Column */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base font-medium text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-md hover:bg-muted/50 transition-colors"
                          aria-label="View on GitHub"
                        >
                          <Github className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
                        </a>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-md hover:bg-muted/50 transition-colors"
                            aria-label="View live demo"
                          >
                            <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground/80 mt-1.5 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs text-muted-foreground/60 px-2 py-0.5 rounded-full border border-border/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Expandable Achievements */}
                    <div className="mt-3">
                      <button
                        onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                        className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <motion.div
                          animate={{ rotate: expandedProject === index ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-3 h-3" />
                        </motion.div>
                        {expandedProject === index ? 'Hide' : 'Show'} achievements
                      </button>

                      <AnimatePresence>
                        {expandedProject === index && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-2 space-y-1 overflow-hidden"
                          >
                            {project.achievements.map((achievement, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="text-xs text-muted-foreground/70 leading-relaxed pl-3 relative before:content-['·'] before:absolute before:left-0 before:text-muted-foreground/50"
                              >
                                {achievement}
                              </motion.li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {index < filteredProjects.length - 1 && (
                  <div className="border-b border-border/30 mt-8" />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">No projects in this category.</p>
            <button
              onClick={() => setFilter('All')}
              className="mt-3 text-sm text-primary hover:underline"
            >
              Show all projects
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects
