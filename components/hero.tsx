// src/components/Hero.tsx
"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import CountUp from 'react-countup';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { HeroBackground } from './hero-background';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section 
      ref={containerRef} 
      className="min-h-screen flex items-center relative overflow-hidden py-20 md:py-0"
    >
      <HeroBackground />
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ opacity, y }}
            className="space-y-6"
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hello, I'm{' '}
              <span className="gradient-text">Mayank Vyas</span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              ML Engineer | IoT Innovator | Data Analyst | Grad Student | Focused 
            </motion.p>
            <motion.p
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              A data scientist & ML enthusiast passionate about AI, deep learning, and big data. I transform raw data into actionable insights to drive innovation. Let’s connect and innovate together! 🚀
            </motion.p>
            {/* Example dynamic counter section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-center gap-2"
            >
              <span className="text-2xl font-bold">Projects Delivered:</span>
              <CountUp end={9} duration={9} className="text-2xl font-bold text-indigo-600" />
              <span className="text-2xl font-bold">Publications:</span>
              <CountUp end={3} duration={5} className="text-2xl font-bold text-indigo-600" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex gap-4"
            >
              <Button 
                size="lg" 
                className="rounded-full" 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full" 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative h-[600px] hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background rounded-full overflow-hidden">
              <Image
                src="/images/projects/mayank.jpeg"
                alt="Mayank Vyas"
                fill
                className="object-cover rounded-full p-4"
                priority
              />
            </div>
            <motion.div 
              initial={{ opacity: 0 }} 
              whileHover={{ opacity: 1 }} 
              className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded"
            >
            Data Science Enthusiast
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
