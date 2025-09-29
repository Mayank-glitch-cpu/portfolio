"use client"

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Play, Calendar, Eye } from 'lucide-react'
import { HeroBackground } from './hero-background'

const YouTubeVideos = () => {
  const videoData = [
    {
      title: "Productiviy Tool Demo",
      description: "Showcasing how this google chrome extension improves your productivity by tracking jobs directly to your google sheets.",
      embedUrl: "https://www.youtube.com/embed/lWksQCmjyx0?si=SwuCaAocBpzviQGZ",
      videoId: "lWksQCmjyx0",
      category: "Productivity Tool Demo",
      publishDate: "2024",
      // views: "1.2K",
      duration: "1:47"
    },
    {
      title: "Hire-Smart: AI-Powered Technical Recruitment Platform",
      description: "Showcasing how this AI-powered technical recruitment platform improves the hiring process by using AI to find the best candidates.",
      embedUrl: "https://www.youtube.com/embed/CKlaSQfaLH4?si=SB03WzaF5d8U-AyA",
      videoId: "CKlaSQfaLH4",
      category: "Productivity Tool Demo",
      publishDate: "2024",
      // views: "856",
      duration: "6:58"
    }
  ];

  return (
    <section id="videos" className="py-20 relative overflow-hidden">
      <HeroBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Play className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold gradient-text">
              Video Content
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my video content showcasing projects, tutorials, and technical insights
          </p>
        </motion.div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {videoData.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="h-full"
              >
                <Card className="bg-card/70 backdrop-blur-md border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden h-full flex flex-col">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2">
                          <Play className="w-5 h-5 text-primary" />
                          <CardTitle className="text-xl gradient-text line-clamp-2">
                            {video.title}
                          </CardTitle>
                        </div>
                        <p className="text-muted-foreground text-sm line-clamp-3">
                          {video.description}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {video.publishDate}
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {/* {video.views} views */}
                          </div>
                          <span className="bg-muted px-2 py-1 rounded text-xs">
                            {video.duration}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <Badge variant="outline" className="bg-primary/10 border-primary/30 text-primary">
                          {video.category}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-0 flex-1 flex flex-col">
                    <div className="relative flex-1">
                      <div className="relative overflow-hidden rounded-lg m-6 shadow-lg">
                        <iframe
                          title={video.title}
                          width="100%"
                          height="315"
                          src={video.embedUrl}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen={true}
                          className="rounded-lg bg-white dark:bg-slate-900"
                        />
                        
                        {/* Overlay for external link */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          className="absolute top-4 right-4 z-10"
                        >
                          <a
                            href={`https://www.youtube.com/watch?v=${video.videoId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 px-3 py-2 bg-red-600/90 text-white text-sm rounded-lg hover:bg-red-600 transition-colors"
                          >
                            <ExternalLink className="w-3 h-3" />
                            Watch on YouTube
                          </a>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeVideos;
