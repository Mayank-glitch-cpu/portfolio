"use client"

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { HeroBackground } from './hero-background'

const experiences = [
	{
		title: "NLP Researcher",
		company: "Arizona State University",
		logo: "/images/logos/Arizona_State_University_seal.svg.png",
		period: "Jan 2025 - Present",
		description: "Developing efficient Table retrieval RAG pipeline to reduce user query latency and better inference.",
		points: [
			"🚀 Served 500+ users- a RAG prototype on 160K+ NQ tables with 10s query time and 98% retrieval accuracy.",
			"🚀 Built a ranking algorithm using S-Bert to rank query specific gold tables with 98% Accuracy.",
			"🚀 Conducting research on improving document question-answering pipelines using sparse and learned embeddings (SPALDE) and Contrastive learning techniques for more accurate retrieval and reduced context noise.",
			"🚀 Working on hierarchical chunking methods to optimize embeddings and improve information retrieval recall.",
			"🚀 Designing pruning algorithms to discard irrelevant table segments for better recall and reduced hallucinations"
		],
	},
	{
		title: "Machine Learning Assistant - Kalman Filter",
		company: "Indian Institute of Information Technology Design & Manufacturing Kancheepuram",
		logo: "/images/logos/IIITDM.jpeg",
		period: "May 2023 - January 2024",
		description: "Improved data processing and analysis for IoT applications.",
		points: [
			"🚀 IoT Infrastructure Development: Engineered a LoRa-based fog computing framework for smart agriculture, reducing sensor energy consumption by 40% and optimizing data transmission using regression models.",
			"🚀 Data Efficiency: Deployed APAEs (Analytical Prediction Algorithm) across edge-fog-cloud layers, cutting data transmissions by 93.6% while maintaining <10% MAE.",
			"🚀 System Integration: Streamlined sensor data collection (temperature, humidity, soil moisture) using Arduino and LoRa, achieving 98% irrigation efficiency."
		],
		publications: [
			{
				title: "Optimizing Kalman Filters for Data Integrity",
				url: "https://ieeexplore.ieee.org/abstract/document/10278208",
				thumbnail: "/images/logos/IEEE.png"
			}
		]
	},
	{
		title: "Research Intern - Machine Learning Framework development",
		company: "Indian Institute of Information Technology Design & Manufacturing Kancheepuram",
		logo: "/images/logos/IIITDM.jpeg",
		period: "April 2023 - January 2023",
		description: "Developed an IoT machine learning framework using TensorFlow Lite and Decision Trees, enabling real-time actuation during internet outages with minimum transmission costs.",
		points: [
			"🚀 Designed a Regressive Prediction Data Forwarding Model (RPDM) using TensorFlow Lite, reducing bandwidth usage by 85% in IoT networks.",
			"🚀 Achieved 99.97% prediction accuracy with Decision Trees, enabling real-time actuation on edge devices during internet outages.",
			"🚀 Implemented lightweight model compression for deployment on Raspberry Pi/Arduino, reducing power consumption by 82.89%.",
		],
		publications: [
			{
				title: "LoRa-based Fog Computing Framework for Smart Agriculture",
				url: "https://ieeexplore.ieee.org/abstract/document/10572197",
				thumbnail: "/images/logos/IEEE.png"
			}
		]
	},
	{
		title: "Research Intern - IoT Innovator",
		company: "Indian Institute of Information Technology Design & Manufacturing Kancheepuram",
		logo: "/images/logos/IIITDM.jpeg",
		period: "May 2022 - August 2022",
		description: "Developed IoT data aggregation and real-time monitoring systems, optimizing efficiency and publishing findings in IEEE AINA 2023",
		points: [
			"🚀 Designed a Ward's method clustering algorithm to compress IoT sensor data by 57.39%, deployed on fog nodes to reduce cloud transmission costs by 38%. ",
			"🚀 Integrated with The Things Network, achieving 1.1s latency for real-time field monitoring, improving response time by 35% over traditional cellular networks.",
			"🚀Published in IEEE AINA 2023 and tested on a 20-acre testbed, cutting energy consumption by 82.89% at tolerance thresholds (ε=1.0)"
		],
		publications: [
			{
				title: "An Efficient Data Aggregation Algorithm for LoRa Enabled Fog Layer in Smart Agriculture",
				url: "https://link.springer.com/chapter/10.1007/978-3-031-28451-9_4",
				thumbnail: "/images/logos/springer.jpeg"
			}
		]
	}
]

const Experience = () => {
	const containerRef = useRef(null)
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"]
	})

	return (
		<section id="experience" className="py-20 relative overflow-hidden" ref={containerRef}>
			{/* Replace Modern Background with HeroBackground */}
			<HeroBackground />
			<div className="container mx-auto px-4 relative z-10">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-3xl font-bold mb-12 text-center gradient-text"
				>
					Professional Experience
				</motion.h2>

				{/* Timeline container */}
				<div className="relative">
					{/* Enhanced center timeline */}
					<div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/20 via-primary to-primary/20 shadow-lg shadow-primary/20"></div>

					<div className="space-y-24">
						{experiences.map((exp, index) => {
							const isEven = index % 2 === 0;

							return (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.6,
										delay: index * 0.2,
									}}
									viewport={{ once: true }}
									className="relative"
								>
									{/* Enhanced timeline dot */}
									<div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary z-10 shadow-lg shadow-primary/50 ring-4 ring-background"></div>

									{/* Content container */}
									<div className="flex flex-col md:flex-row justify-center items-start">

										{/* LEFT SIDE CONTENT */}
										<div className="w-full md:w-[45%] md:pr-12">
											{isEven ? (
												<Card className="bg-card/70 backdrop-blur-md border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 w-full group">
													<CardHeader className="flex flex-row items-start gap-4 p-6 relative overflow-hidden">
														{/* Enhanced gradient behind title */}
														<div className="absolute left-8 top-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-purple-500/20 via-primary/15 to-blue-500/20 blur-2xl group-hover:scale-110 transition-transform duration-500" />
														<div className="w-16 h-16 rounded-full flex-shrink-0 overflow-hidden bg-gradient-to-br from-primary/10 to-blue-500/10 flex items-center justify-center ring-2 ring-primary/20">
															<Image
																src={exp.logo}
																alt={`${exp.company} logo`}
																width={60}
																height={60}
																className="rounded-full"
															/>
														</div>
														<div>
															<CardTitle className="text-xl font-bold mb-1 gradient-text relative z-10">
																{exp.title}
															</CardTitle>
															<p className="font-medium text-base mb-1">{exp.company}</p>
															<Badge variant="outline" className="text-xs bg-primary/10 border-primary/30 hover:bg-primary/20 transition-colors">
																{exp.period}
															</Badge>
														</div>
													</CardHeader>
												</Card>
											) : (
												<Card className="bg-card/70 backdrop-blur-md border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 w-full">
													<CardContent className="p-6">
														<p className="mb-4 text-base text-muted-foreground">{exp.description}</p>
														<ul className="list-disc pl-5 space-y-3">
															{exp.points.map((point, i) => (
																<motion.li
																	key={i}
																	initial={{ opacity: 0, x: -10 }}
																	whileInView={{ opacity: 1, x: 0 }}
																	transition={{ duration: 0.3, delay: i * 0.1 }}
																	className="text-sm sm:text-base text-foreground/80"
																>
																	{point}
																</motion.li>
															))}
														</ul>

														{exp.publications && (
															<div className="mt-6 space-y-3">
																<h4 className="text-lg font-semibold gradient-text">Publications:</h4>
																{exp.publications.map((pub, i) => (
																	<motion.a
																		key={i}
																		href={pub.url}
																		target="_blank"
																		rel="noopener noreferrer"
																		className="flex items-center space-x-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/15 transition-all duration-300 border border-primary/10 hover:border-primary/20"
																		whileHover={{ scale: 1.02 }}
																		whileTap={{ scale: 0.98 }}
																	>
																		<Image
																			src={pub.thumbnail}
																			alt={pub.title}
																			width={40}
																			height={40}
																			className="rounded-md"
																		/>
																		<span className="text-sm text-primary font-medium">{pub.title}</span>
																	</motion.a>
																))}
															</div>
														)}
													</CardContent>
												</Card>
											)}
										</div>

										{/* SPACER FOR TIMELINE */}
										<div className="w-0 md:w-[10%]"></div>

										{/* RIGHT SIDE CONTENT */}
										<div className="w-full md:w-[45%] md:pl-12 mt-8 md:mt-0">
											{!isEven ? (
												<Card className="bg-card/70 backdrop-blur-md border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 w-full group">
													<CardHeader className="flex flex-row items-start gap-4 p-6 relative overflow-hidden">
														{/* Enhanced gradient behind title */}
														<div className="absolute left-8 top-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/20 via-primary/15 to-purple-500/20 blur-2xl group-hover:scale-110 transition-transform duration-500" />
														<div className="w-16 h-16 rounded-full flex-shrink-0 overflow-hidden bg-gradient-to-br from-blue-500/10 to-primary/10 flex items-center justify-center ring-2 ring-primary/20">
															<Image
																src={exp.logo}
																alt={`${exp.company} logo`}
																width={60}
																height={60}
																className="rounded-full"
															/>
														</div>
														<div>
															<CardTitle className="text-xl font-bold mb-1 gradient-text relative z-10">{exp.title}</CardTitle>
															<p className="font-medium text-base mb-1">{exp.company}</p>
															<Badge variant="outline" className="text-xs bg-primary/10 border-primary/30 hover:bg-primary/20 transition-colors">
																{exp.period}
															</Badge>
														</div>
													</CardHeader>
												</Card>
											) : (
												<Card className="bg-card/70 backdrop-blur-md border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 w-full">
													<CardContent className="p-6">
														<p className="mb-4 text-base text-muted-foreground">{exp.description}</p>
														<ul className="list-disc pl-5 space-y-3">
															{exp.points.map((point, i) => (
																<motion.li
																	key={i}
																	initial={{ opacity: 0, x: 10 }}
																	whileInView={{ opacity: 1, x: 0 }}
																	transition={{ duration: 0.3, delay: i * 0.1 }}
																	className="text-sm sm:text-base text-foreground/80"
																>
																	{point}
																</motion.li>
															))}
														</ul>

														{exp.publications && (
															<div className="mt-6 space-y-3">
																<h4 className="text-lg font-semibold gradient-text">Publications:</h4>
																{exp.publications.map((pub, i) => (
																	<motion.a
																		key={i}
																		href={pub.url}
																		target="_blank"
																		rel="noopener noreferrer"
																		className="flex items-center space-x-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/15 transition-all duration-300 border border-primary/10 hover:border-primary/20"
																		whileHover={{ scale: 1.02 }}
																		whileTap={{ scale: 0.98 }}
																	>
																		<Image
																			src={pub.thumbnail}
																			alt={pub.title}
																			width={40}
																			height={40}
																			className="rounded-md"
																		/>
																		<span className="text-sm text-primary font-medium">{pub.title}</span>
																	</motion.a>
																))}
															</div>
														)}
													</CardContent>
												</Card>
											)}
										</div>
									</div>
								</motion.div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;