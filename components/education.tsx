"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const EducationCard = ({
    logoUrl,
    collegeName,
    degreeName,
    duration,
    gpa,
}: {
    logoUrl: string;
    collegeName: string;
    degreeName: string;
    duration: string;
    gpa: string;
}) => (
    <Card className="text-center flex flex-col h-full hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm border border-border/50">
        <CardHeader className="pb-4">
            <div className="flex justify-center mb-4">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-purple-400/20 flex items-center justify-center overflow-hidden shadow-lg">
                    <Image
                        src={logoUrl}
                        alt={`${collegeName} logo`}
                        width={80}
                        height={80}
                        className="object-cover rounded-full"
                    />
                </div>
            </div>
        </CardHeader>
        <CardContent className="flex-grow">
            <CardTitle className="text-xl mb-2 gradient-text">{collegeName}</CardTitle>
            <p className="text-lg text-foreground/90 mt-2 font-medium">{degreeName}</p>
            <p className="text-sm text-muted-foreground/80 mt-2 font-medium">{duration}</p>
            <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                <p className="text-sm text-primary font-semibold">{gpa}</p>
            </div>
        </CardContent>
    </Card>
);

const Education = () => {
    const educationData = [
        {
            logoUrl: '/images/projects/Arizona_State_University_seal.svg.png',
            collegeName: 'Arizona State University',
            degreeName: 'Master of Science in Data Science',
            duration: 'Aug 2024 - May 2026',
            gpa: 'GPA: 3.6/4.0',
        },
        {
            logoUrl: '/images/projects/iitram_logo_only.jpg',
            collegeName: 'Institute of Infrastructure Technology Research and Management',
            degreeName: 'Bachelors of Science in Electrical Engineering',
            duration: 'Aug 2020 - May 2026',
            gpa: 'GPA: 3.7/4.0',
        },
    ];

    return (
        <section id="education" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold mb-12 text-center gradient-text"
                >
                    Education
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <EducationCard {...edu} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;