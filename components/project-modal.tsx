import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { ExternalLink, Github } from 'lucide-react'

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    achievements: string[];
    period: string;
    githubUrl: string;
    liveUrl?: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[90vw] md:max-w-[600px] max-h-[90vh] overflow-y-auto p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>
        <div className="mt-4 relative w-full h-48 sm:h-64 md:h-72">
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="mb-2">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="mt-4">
          <h4 className="text-lg font-semibold mb-2">Key Achievements:</h4>
          <ul className="list-disc pl-5 space-y-1">
            {project.achievements.map((achievement, index) => (
              <li key={index} className="text-sm text-muted-foreground">{achievement}</li>
            ))}
          </ul>
        </div>
        <p className="text-sm text-muted-foreground mt-4">{project.period}</p>
        <div className="flex flex-col sm:flex-row justify-between mt-6 gap-4">
          <Button className="w-full sm:w-auto" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </a>
          </Button>
          <Button variant="outline" className="w-full sm:w-auto" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> View Code
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

