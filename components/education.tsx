"use client"

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, Calendar, Trophy } from 'lucide-react'
import Image from 'next/image'
import { HeroBackground } from './hero-background'

// const ModernBackground = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
//   const backgroundRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       if (!backgroundRef.current) return;
      
//       const rect = backgroundRef.current.getBoundingClientRect();
//       const x = ((e.clientX - rect.left) / rect.width) * 100;
//       const y = ((e.clientY - rect.top) / rect.height) * 100;
      
//       setMousePosition({ x, y });
//     };

//     const bgElement = backgroundRef.current;
//     if (bgElement) {
//       bgElement.addEventListener('mousemove', handleMouseMove);
//       return () => bgElement.removeEventListener('mousemove', handleMouseMove);
//     }
//   }, []);

//   return (
//     <div ref={backgroundRef} className="absolute inset-0 overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white to-blue-50/30 dark:from-slate-900/50 dark:via-slate-800/30 dark:to-slate-900/50" />
      
//       <div
//         className="absolute inset-0 opacity-40 dark:opacity-60 transition-opacity duration-500"
//         style={{
//           background: `radial-gradient(800px circle at ${mousePosition.x}% ${mousePosition.y}%, 
//             rgba(139, 92, 246, 0.08) 0%, 
//             rgba(59, 130, 246, 0.06) 25%, 
//             rgba(16, 185, 129, 0.04) 50%, 
//             transparent 70%)`,
//         }}
//       />

//       <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
//         <div 
//           className="w-full h-full"
//           style={{
//             backgroundImage: `
//               linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
//               linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
//             `,
//             backgroundSize: '40px 40px',
//           }}
//         />
//       </div>

//       <div className="absolute inset-0">
//         {Array.from({ length: 8 }).map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-primary/20 rounded-full"
//             style={{
//               left: `${15 + Math.random() * 70}%`,
//               top: `${10 + Math.random() * 80}%`,
//             }}
//             animate={{
//               y: [0, -20, 0],
//               opacity: [0.2, 0.8, 0.2],
//               scale: [1, 1.5, 1],
//             }}
//             transition={{
//               duration: 4 + Math.random() * 4,
//               repeat: Infinity,
//               delay: Math.random() * 5,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </div>

//       <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-full blur-3xl" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500/5 via-transparent to-transparent rounded-full blur-3xl" />
//     </div>
//   );
// };

const Education = () => {
  const educationData = [
    {
      logoUrl: '/images/projects/Arizona_State_University_seal.svg.png',
      collegeName: 'Arizona State University',
      degreeName: 'Master of Science in Data Science',
      duration: 'Aug 2024 - May 2026',
      gpa: 'GPA: 3.6/4.0',
      location: 'Tempe, Arizona',
    },
    {
      logoUrl: '/images/projects/iitram_logo_only.jpg',
      collegeName: 'Institute of Infrastructure Technology Research and Management',
      degreeName: 'Bachelors of Science in Electrical Engineering',
      duration: 'Aug 2020 - May 2024',
      gpa: 'GPA: 3.7/4.0',
      location: 'Ahmedabad, India',
    },
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <HeroBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center gradient-text"
        >
          Education
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="bg-card/70 backdrop-blur-md border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 h-full">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <motion.div 
                      className="relative"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center overflow-hidden shadow-lg ring-2 ring-primary/20">
                        <Image
                          src={edu.logoUrl}
                          alt={`${edu.collegeName} logo`}
                          width={80}
                          height={80}
                          className="object-cover rounded-full"
                        />
                      </div>
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-2 rounded-full border border-dashed border-primary/20"
                      />
                    </motion.div>
                  </div>
                  
                  <CardTitle className="text-xl mb-2 gradient-text leading-tight">
                    {edu.collegeName}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="text-center space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <GraduationCap className="w-4 h-4" />
                      <p className="text-base font-medium">{edu.degreeName}</p>
                    </div>
                    
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <p className="text-sm">{edu.duration}</p>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">{edu.location}</p>
                  </div>
                  
                  <div className="flex justify-center">
                    <Badge className="bg-gradient-to-r from-primary/80 to-blue-500/80 text-white font-semibold px-4 py-1">
                      <Trophy className="w-3 h-3 mr-1" />
                      {edu.gpa}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;