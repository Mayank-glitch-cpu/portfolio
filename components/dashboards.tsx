"use client"

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, BarChart3, TrendingUp, Database } from 'lucide-react'
import { HeroBackground } from './hero-background'

// Removed ModernBackground component as it's now imported

const Dashboards = () => {
  const dashboardData = [
    {
      title: "Capstone Project Analytics",
      description: "Comprehensive data visualization and analysis dashboard showcasing project metrics, performance indicators, and key insights.",
      embedUrl: "https://app.powerbi.com/reportEmbed?reportId=28cfe113-229a-461c-a719-cc7ce42fd44d&autoAuth=true&ctid=41f88ecb-ca63-404d-97dd-ab0a169fd138",
      type: "Power BI",
      category: "Project Analytics"
    }
  ];

  return (
    <section id="dashboards" className="py-20 relative overflow-hidden">
      <HeroBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <BarChart3 className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold gradient-text">
              Interactive Dashboards
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my data visualization projects and analytical insights through interactive dashboards
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          {dashboardData.map((dashboard, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12"
            >
              <Card className="bg-card/70 backdrop-blur-md border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        <CardTitle className="text-xl gradient-text">
                          {dashboard.title}
                        </CardTitle>
                      </div>
                      <p className="text-muted-foreground text-sm max-w-2xl">
                        {dashboard.description}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="bg-primary/10 border-primary/30 text-primary">
                        <Database className="w-3 h-3 mr-1" />
                        {dashboard.type}
                      </Badge>
                      <Badge variant="outline" className="bg-blue-500/10 border-blue-500/30 text-blue-600">
                        {dashboard.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-0">
                  <div className="relative">
                    {/* Remove zoom effect on hover */}
                    <div className="relative overflow-hidden rounded-lg m-6 shadow-lg">
                      <iframe
                        title={dashboard.title}
                        width="100%"
                        height="500"
                        src={dashboard.embedUrl}
                        frameBorder="0"
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
                          href={dashboard.embedUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-2 bg-black/70 text-white text-sm rounded-lg hover:bg-black/80 transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Open Full View
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
    </section>
  );
};
export default Dashboards;