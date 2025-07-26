"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Calendar, Award, Code } from 'lucide-react'
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
  techStack?: string[];
  category: string; // Added category field
};

const projects: Project[] = [
  {
    title: '📌 Enterprise Sales Analytics Dashboard',
    description: 'Developed an enterprise-grade Power BI dashboard implementing DAX measures and advanced data modeling techniques to transform raw sales data into actionable business intelligence. The solution features multi-dimensional analysis capabilities with drill-through functionality for granular insights.',
    image: '/images/projects/dataline_powerBi.png',
    technologies: ['Power BI DAX', 'Data Modeling', 'ETL Pipeline', 'Advanced Visualizations'],
    achievements: [
      '✅ Implemented complex DAX measures to calculate YoY growth and rolling averages with 99.8% accuracy',
      '✅ Engineered a star schema data model reducing query time by 40% for faster executive decision-making',
      '✅ Designed geo-spatial visualizations revealing $1.2M revenue opportunity in underserved regions',
      '✅ Created parameterized reports enabling stakeholders to perform ad-hoc analyses without technical assistance'
    ],
    period: 'February 2025',
    githubUrl: 'https://github.com/intel-retail/automated-self-checkout/pull/652',
    liveUrl: 'https://app.powerbi.com/reportEmbed?reportId=28cfe113-229a-461c-a719-cc7ce42fd44d&autoAuth=true&ctid=41f88ecb-ca63-404d-97dd-ab0a169fd138',
    category: 'Data Analytics'
  },
  {
    title: '🛒 Intel Automated Checkout System (OSS Contribution)',
    description: 'Engineered a microservices-based observability solution for Intel\'s retail edge computing platform that processes real-time computer vision data. Implemented comprehensive telemetry capturing CPU/GPU utilization, inference latency, and throughput metrics critical for retail deployment reliability.',
    image: '/images/projects/intel.jpg',
    technologies: ['Docker Compose', 'Grafana Dashboards', 'MQTT Protocol', 'OAuth2.0 Authentication'],
    achievements: [
      'Architected a containerized observability stack with Prometheus time-series database for sub-second metric scraping 💻',
      'Implemented JWT-based OAuth 2.0 authentication flow with role-based access control (RBAC) for SOC2 compliance 🔒',
      'Reduced MTTR (Mean Time To Resolution) by 73% through custom alerting thresholds and anomaly detection ⚡',
      'Created multi-stage Docker builds reducing container size by 65% and optimizing deployment in edge environments'
    ],
    period: 'January 2025 - Present',
    githubUrl: 'https://github.com/intel-retail/automated-self-checkout/pull/652',
    liveUrl: '',
    category: 'DevOps & Cloud'
  },
  {
    title: '🌱 MaskRoot: Computer Vision for Agricultural Phenomics',
    description: 'Engineered an instance segmentation pipeline utilizing Mask R-CNN architecture to automate root phenotyping at scale. The system overcomes occlusion challenges through a custom-designed loss function and transfer learning from MS COCO weights to compensate for limited agricultural training data.',
    image: '/images/projects/root.jpg',
    technologies: ['TensorFlow 2.x', 'OpenCV', 'Mask R-CNN', 'Feature Pyramid Network'],
    achievements: [
      'Achieved 96.5% IoU accuracy through transfer learning and custom data augmentation techniques',
      'Reduced annotation workload by 90% using semi-supervised learning and active learning methods',
      'Published findings in Springer\'s Computer Vision in Plant Phenotyping and Agriculture conference'
    ],
    period: 'April 2023 - April 2024',
    githubUrl: 'https://github.com/Mayank-glitch-cpu/Root_phenotyping',
    liveUrl: '',
    category: 'Machine Learning'
  },
  {
    title: '📡 DASA: Distributed Agricultural Sensing Architecture',
    description: 'Designed a hierarchical IoT architecture leveraging LoRaWAN\'s low-power wide-area network capabilities for agricultural monitoring in remote areas. Implemented a novel fog computing layer using edge devices to perform data preprocessing, anomaly detection, and compression before cloud transmission.',
    image: '/images/projects/dasa.jpg',
    technologies: ['Apache Spark Streaming', 'LoRaWAN Protocol', 'Ward Hierarchical Clustering', 'Time Series Analysis'],
    achievements: [
      'Achieved 57.39% data compression using entropy-based time-series aggregation without information loss',
      'Reduced cloud infrastructure costs by 38% through intelligent data filtering and edge analytics',
      'Published in IEEE AINA 2023 with recognition for energy-efficient edge computing design'
    ],
    period: 'May 2022 - August 2022',
    githubUrl: 'https://github.com/Mayank-glitch-cpu/AINA_Code',
    liveUrl: '',
    category: 'IoT Systems'
  },
  {
    title: '🚦 Deep Reinforcement Learning for Urban Traffic Control',
    description: 'Developed an adaptive traffic signal control system using Deep Q-Networks (DQN) in the SUMO traffic simulation environment. The system leverages vehicle-to-infrastructure (V2I) communication to optimize traffic flow based on real-time density and waiting time metrics.',
    image: '/images/projects/sumo_rl.jpg',
    technologies: ['RLlib Framework', 'SUMO Traffic Simulator', 'TensorFlow', 'Experience Replay'],
    achievements: [
      'Reduced average vehicle waiting time by 35% compared to traditional fixed-time traffic controllers',
      'Improved overall traffic throughput by 22% using prioritized experience replay for agent training',
      'Implemented double DQN with dueling architecture to mitigate Q-value overestimation in state-action spaces'
    ],
    period: 'January 2024 - April 2024',
    githubUrl: 'https://github.com/Mayank-glitch-cpu/Intersection-Control-using-Reinforcement-learning-and-SUMO',
    liveUrl: '',
    category: 'Machine Learning'
  },
  {
    title: '🧠 Multi-Layer Perceptron Implementation from First Principles',
    description: 'Built a neural network framework from mathematical foundations without reliance on deep learning libraries. Implemented forward propagation, backpropagation, gradient descent optimization, and regularization techniques to demonstrate core principles of neural computation.',
    image: '/images/projects/MLP.jpg',
    technologies: ['NumPy Vectorization', 'Computational Graphs', 'Gradient Descent Optimization', 'Jupyter Interactive Computing'],
    achievements: [
      'Achieved 92% classification accuracy on MNIST dataset using only NumPy for matrix operations',
      'Implemented backpropagation algorithm with automatic differentiation for efficient gradient calculation',
      'Created interactive visualizations of weight matrices and activation patterns across training epochs'
    ],
    period: 'August 2024 - November 2024',
    githubUrl: 'https://github.com/Mayank-glitch-cpu/MLP-from-Scratch',
    liveUrl: '',
    category: 'Machine Learning'
  },
  {
    title: '📶 RPDM: Resource-efficient Predictive Decision Model for IoT',
    description: 'Designed an ultra-lightweight machine learning inference system for resource-constrained IoT devices that optimizes when to transmit sensor data based on predictive value. The framework uses model quantization and pruning techniques to enable ML on microcontrollers with severe memory constraints.',
    image: '/images/projects/rpdm.png',
    technologies: ['TensorFlow Lite for Microcontrollers', 'Decision Tree Ensemble', 'FlatBuffers Serialization', 'Model Quantization'],
    achievements: [
      'Achieved 99.97% prediction accuracy while reducing model size from 22MB to 480KB through pruning',
      'Decreased power consumption by 82.89% using event-triggered sensing instead of periodic sampling',
      'Successfully deployed to Raspberry Pi Zero and Arduino devices for agricultural monitoring applications'
    ],
    period: 'August 2023 - January 2024',
    githubUrl: 'https://github.com/Mayank-glitch-cpu/Ml_predictions_framework_for_Smart_Farming',
    liveUrl: '',
    category: 'IoT Systems'
  },
  {
    title: '🛠️ Scalable Data Processing Pipeline for Time-Series Analytics',
    description: 'Architected a distributed ETL pipeline for processing high-frequency sensor data from industrial equipment. The system handles data ingestion, cleansing, transformation, and aggregation while maintaining data lineage for regulatory compliance and audit purposes.',
    image: '/images/projects/DP.jpg',
    technologies: ['PySpark Structured Streaming', 'Pandas DataFrames', 'SQL Window Functions', 'Cron Task Orchestration'],
    achievements: [
      'Reduced processing runtime by 40% through partition optimization and custom UDFs (User Defined Functions)',
      'Scaled to handle 10,000+ rows per second with sub-second latency on commodity hardware',
      'Implemented automated data quality checks and reconciliation reporting for ensuring data integrity'
    ],
    period: 'August 2024 - October 2024',
    githubUrl: 'https://github.com/Mayank-glitch-cpu/Data-Processing',
    liveUrl: '',
    category: 'Data Engineering'
  },
  {
    title: '📊 Geospatial Market Intelligence Platform for Tucson Businesses',
    description: 'Developed a comprehensive market intelligence platform integrating geospatial, demographic, and economic data sources to identify growth patterns and market opportunities in Arizona\'s urban centers. Utilized advanced spatiotemporal analysis to reveal hidden business patterns.',
    image: '/images/projects/BA.jpg',
    technologies: ['PySpark Geospatial', 'Power BI DirectQuery', 'Tableau Spatial Visualization', 'Census API Integration'],
    achievements: [
      'Processed and harmonized 10,000+ business records across disparate data sources using custom ETL processes 📂',
      'Developed geospatial clustering algorithms revealing 20% higher commercial activity in emerging neighborhoods 🏙️',
      'Enabled data-driven expansion strategies resulting in 15% increased ROI for pilot program participants 💼'
    ],
    period: 'August 2024 - December 2024',
    githubUrl: 'https://github.com/Mayank-glitch-cpu/Reimagined-businesses-in-Tucson',
    liveUrl: '',
    category: 'Data Analytics'
  }
]

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Machine Learning', 'Data Analytics', 'Data Engineering', 'IoT Systems', 'DevOps & Cloud'];

  const filteredProjects = projects.filter(project => {
    if (filter === 'All') return true;
    return project.category === filter;
  });

  // Get project counts for each category
  const getCategoryCount = (category: string) => {
    if (category === 'All') return projects.length;
    return projects.filter(p => p.category === category).length;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-2 mb-6">
            <Code className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">Portfolio</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Showcasing innovative solutions that blend cutting-edge technology with real-world impact
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-2 p-2 bg-background/50 backdrop-blur-sm border border-border/50 rounded-full">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  filter === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                {category}
                <span className={`text-xs px-2 py-1 rounded-full ${
                  filter === category 
                    ? 'bg-white/20 text-white' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {getCategoryCount(category)}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.8 }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group"
            >
                <Card className="relative overflow-hidden bg-background/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10">
                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardContent className="p-0 relative">
                    {/* Project Image */}
                    <div className="relative h-56 w-full overflow-hidden">
                      <motion.div
                        animate={{ scale: hoveredProject === index ? 1.1 : 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="w-full h-full relative"
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-all duration-500 group-hover:brightness-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </motion.div>
                      
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Period Badge */}
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-background/80 backdrop-blur-sm border-border/50 text-foreground">
                          <Calendar className="w-3 h-3 mr-1" />
                          {project.period}
                        </Badge>
                      </div>

                      {/* Quick Actions */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: hoveredProject === index ? 1 : 0,
                          y: hoveredProject === index ? 0 : 20
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-4 left-4 right-4 flex gap-2"
                      >
                        <Button variant="secondary" size="sm" className="flex-1 bg-background/80 backdrop-blur-sm" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" /> Code
                          </a>
                        </Button>
                        {project.liveUrl && (
                          <Button variant="secondary" size="sm" className="flex-1 bg-background/80 backdrop-blur-sm" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" /> Live
                            </a>
                          </Button>
                        )}
                      </motion.div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <Badge 
                            key={i} 
                            variant="secondary" 
                            className="text-xs bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20 text-blue-400 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge 
                            variant="secondary" 
                            className="text-xs bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border-emerald-500/20 text-emerald-400"
                          >
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>

                      {/* Achievements Preview */}
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Award className="w-3 h-3 text-yellow-400" />
                        <span>{project.achievements.length} key achievements</span>
                      </div>

                      {/* View Details Button */}
                      <Button 
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                        onClick={() => setSelectedProject(project)}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> 
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
        </motion.div>

        {/* Show More Button */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground text-lg">No projects found for this category.</p>
            <Button 
              variant="outline" 
              onClick={() => setFilter('All')}
              className="mt-4"
            >
              Show All Projects
            </Button>
          </motion.div>
        )}

        {/* Category Summary */}
        {filter !== 'All' && filteredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-12 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl"
          >
            <h3 className="text-xl font-semibold mb-2">
              {filter} Projects
            </h3>
            <p className="text-muted-foreground">
              Showcasing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} in {filter.toLowerCase()}
            </p>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
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