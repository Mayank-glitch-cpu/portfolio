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
  techStack?: string[];
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
    liveUrl: 'https://app.powerbi.com/reportEmbed?reportId=28cfe113-229a-461c-a719-cc7ce42fd44d&autoAuth=true&ctid=41f88ecb-ca63-404d-97dd-ab0a169fd138'
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
    liveUrl: ''
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
    liveUrl: ''
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
    liveUrl: ''
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
    liveUrl: ''
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
    liveUrl: ''
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
    liveUrl: ''
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
    liveUrl: ''
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