"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { Quote } from 'lucide-react'

interface Testimonial {
  name: string
  title: string
  company: string
  image?: string
  quote: string
  linkedin?: string
}

const testimonials: Testimonial[] = [
  {
    name: "Sahil Pawar",
    title: "Software Engineer Intern",
    company: "Lumen",
    image: "/images/testimonials/sahil.jpg",
    linkedin: "https://www.linkedin.com/in/sahilpawar17/",
    quote: "I had the pleasure of working with Mayank Vyas during the Intel Open Source Hackathon, and I couldn't have asked for a better teammate. We were tackling an issue that involved visualizing real-time machine configuration data using MQTT and Grafana Docker, and Mayank jumped right in with his problem-solving mindset and enthusiasm. What really stood out to me was his curiosity and dedication—even after the hackathon ended, he kept working on the issue, not because he had to, but because he genuinely wanted to learn more. That kind of passion is rare and speaks volumes about his approach to technology and innovation. Beyond his technical skills, Mayank is a fantastic collaborator—always open to ideas, eager to experiment, and ready to help. I'd highly recommend him to anyone looking for a proactive, skilled, and passionate team player!"
  },
  {
    name: "Vignesh Mohan",
    title: "Project Partner",
    company: "Ex SDE @ Standard Chartered GBS",
    image: "/images/testimonials/vignesh.jpg",
    linkedin: "https://www.linkedin.com/in/vignesh-mohan-3701311a1/",
    quote: "Mayank was a standout teammate during our hackathon, bringing together strong AI insight and solid software engineering skills. What impressed me most was his refusal to give up. He consistently went the extra mile to ensure the project worked end to end."
  },
  {
    name: "Vansh Mathur",
    title: "Associate Software Engineer",
    company: "Telstra",
    image: "/images/testimonials/vansh.jpg",
    linkedin: "https://www.linkedin.com/in/vanshmathur7/",
    quote: "Working with you has been a great experience. You are professional, dependable, and communicate with clarity and ease. You’re always approachable and open to feedback, which makes collaboration smooth and effective. Your reliability and positive attitude truly stand out."
  },
]

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Card className="bg-card/70 backdrop-blur-md border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 h-full">
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/30">
            {testimonial.image ? (
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-lg">
                {getInitials(testimonial.name)}
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            {testimonial.linkedin ? (
              <a
                href={testimonial.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-foreground text-sm hover:text-primary transition-colors"
              >
                {testimonial.name}
              </a>
            ) : (
              <h4 className="font-semibold text-foreground text-sm">{testimonial.name}</h4>
            )}
            <p className="text-xs text-primary">{testimonial.title}</p>
            <p className="text-xs text-muted-foreground">@ {testimonial.company}</p>
          </div>
          <Quote className="w-8 h-8 text-primary/30 flex-shrink-0" />
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          "{testimonial.quote}"
        </p>
      </CardContent>
    </Card>
  </motion.div>
)

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4 text-center gradient-text"
        >
          What People Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Testimonials from colleagues and collaborators I've had the pleasure of working with
        </motion.p>

        {/* Static Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
