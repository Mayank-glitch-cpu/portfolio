"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import { ProjectModal } from './project-modal'

const projects = [
  {
    title: 'Pharmacy Revenue Prediction System',
    description: 'A full-stack application leveraging machine learning models to predict pharmacy revenue based on various input attributes.',
    image: '/images/projects/pharmacy_project_cover.png',
    technologies: ['Flask', 'Java (Spring Boot)', 'Docker', 'GitHub Actions', 'Machine Learning'],
    achievements: [
      'Developed a Flask web application for handling user requests and data processing',
      'Created a Java backend for machine learning-based predictions',
      'Implemented a CI/CD pipeline using GitHub Actions for automated testing and deployment',
      'Containerized the application using Docker for easy distribution and deployment'
    ],
    period: 'September 2023 - November 2023',
    githubUrl: 'https://github.com/hrishikeshm12/Pharmacy-Revenue-Prediction',
    liveUrl: 'https://hub.docker.com/r/hrish06062001/flask-app'
  },
  {
    title: 'Music Mosaic',
    description: 'Developed a machine learning-powered music recommendation system generating personalized playlists with high accuracy.',
    image: '/images/projects/music_mosaic_cover.png',
    technologies: ['Python', 'Flask', 'MongoDB', 'Spotify API', 'Machine Learning'],
    achievements: [
      'Achieved 25% higher accuracy in personalized playlist generation',
      'Improved precision from 0.10 to 0.65 and recall from 0.13 to 0.80, achieving an F1 score of 0.74',
      'Reduced matrix size from 6GB to 6.55MB, improving response time'
    ],
    period: 'December 2022 - May 2023',
    githubUrl: 'https://github.com/hrishikeshm12/Music-Mosaic',
  },
  {
    title: 'DeOldiformer',
    description: 'A research project proposing a hybrid GAN model that combines DeOldify for color restoration and Codeformer for image enhancement.',
    image: '/images/projects/deoldiformer_project_cover.png',
    technologies: ['Python', 'PyTorch', 'CUDA', 'Hugging Face', 'Transformers', 'GAN'],
    achievements: [
      'Achieved 24.4% improvement in image quality over existing methods',
      'Attained top scores with ARNIQA score of 0.5569, Q-Align score of 3.7754, and NIMA score of 5.5996',
      'Optimized resource usage by 30% through efficient pipeline execution',
      'Enabled concurrent model execution on limited hardware'
    ],
    period: 'January 2024 - December 2024',
    githubUrl: 'https://github.com/hrishikeshm12/DeOldiformer',
    liveUrl: 'https://huggingface.co/spaces/hrishikeshm123/DeOldiformer'
  },
  {
    title: 'Pixel Fusion',
    description: 'A web application that generates and transforms images using AI, combining text-to-image generation with artistic style transfer.',
    image: '/images/projects/pixel_fusion_project_cover.png',
    technologies: ['Python', 'TensorFlow', 'OpenAI', 'Stable Diffusion', 'Django', 'JavaScript'],
    achievements: [
      'Implemented concurrent image generation using OpenAI and Stable Diffusion APIs',
      'Integrated TensorFlow Fast Style Transfer for artistic transformation',
      'Created a seamless web interface for text-to-image generation and style transfer',
      'Developed a robust Django backend for handling multiple AI model interactions'
    ],
    period: 'July 2023',
    githubUrl: 'https://github.com/hrishikeshm12/Pixel-Fusion',
    
  },
  
  {
    title: 'Social Media Analytics',
    description: 'Developed machine learning models to enhance predictive accuracy of social media usage, revealing insights into demographic and behavioral patterns.',
    image: '/images/projects/social_media_project_cover.png',
    technologies: ['Python', 'CatBoost', 'Data Visualization'],
    achievements: [
      'Enhanced predictive accuracy by 7.3% using CatBoost',
      'Identified that 70% of top 10 cities with highest social media usage are non-metropolitan'
    ],
    period: 'July 2023 - October 2023',
    githubUrl: 'https://github.com/hrishikeshm12/Social-Media-Analytics',
  },
 
  // {
  //   title: 'COVID-19 Severity Prediction',
  //   description: 'Led a team to develop deep learning models for classifying 3D chest CT images into COVID-19 severity categories.',
  //   image: '/projects/covid-prediction.jpg',
  //   technologies: ['Python', 'Deep Learning', 'DenseNet121', 'VGG-16', 'VGG-19'],
  //   achievements: [
  //     'Achieved 82.46% accuracy in severity classification',
  //     'Reduced feature complexity by 90%, improving model training efficiency',
  //     'Published research paper at the 2nd International Conference on Data Science and Intelligent Applications (ICDSIA-2023)'
  //   ],
  //   period: 'January 2022 - October 2022',
  //   githubUrl: 'https://github.com/yourusername/covid-severity-prediction',
  // }
]

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

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
  )
}

export default Projects

