"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, FileText, Github, Play, X, Presentation } from 'lucide-react'
import Image from 'next/image'

const experiences = [
	{
		title: "Software Engineer, Research",
		company: "Coral Labs",
		logo: "/images/logos/Arizona_State_University_seal.svg.png",
		location: "Tempe, Arizona",
		startYear: "2025",
		endYear: "Present",
		url: "https://coral-lab-asu.github.io/",
		highlights: [
			"Engineered a scalable and fault-tolerant data ingestion pipeline on AWS using Apache Spark, processing 1.2 TB of data (NQ tables) while reducing system latency by 3x",
			"Optimized system performance by designing pruning algorithms to discard irrelevant data segments, improving information retrieval recall and reducing resource consumption",
			"Developed and tested a distributed, 3-stage meta-reasoning engine, achieving an 11% performance improvement over existing baselines on temporal-reasoning benchmarks"
		],
		publications: [
			{
				title: "No Universal Prompt: Unifying Reasoning through Adaptive Prompting for Temporal Table Reasoning",
				url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZiszgsIAAAAJ&citation_for_view=ZiszgsIAAAAJ:9yKSN-GCB0IC"
			}
		]
	},
	{
		title: "Founding Software Engineer",
		company: "Job-Hunt AI",
		logo: "/images/logos/Arizona_State_University_seal.svg.png",
		location: "Tempe, Arizona (Self-Employed)",
		startYear: "2025",
		endYear: "Present",
		url: "https://github.com/Mayank-glitch-cpu/job-hunt-ai-Demo",
		highlights: [
			"Architected an end-to-end AI automation pipeline using Elasticsearch for high-speed semantic search and a knowledge graph to map complex relationships between job requirements and user skills",
			"Developed an LLM-based agentic workflow that autonomously parses job descriptions and aligns them with candidate resumes, improving job match relevance by 92% and reducing manual search time by 98%"
		],
		github: "https://github.com/Mayank-glitch-cpu/job-hunt-ai-Demo",
		video: "https://www.canva.com/design/DAG6WCshhY4/bdcbmyay8II-UPhweNhdSA/watch?utm_content=DAG6WCshhY4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h6ae7bce759",
		// ppt: {
		// 	embedUrl: "https://docs.google.com/presentation/d/1GuMrcXYcnR7wgoUvQkqKRn4U64qnBqVr/embed?start=false&loop=false&delayms=3000",
		// 	title: "Job Hunt AI Powered Career Navigation Revolutionizing Job Recommendations.pptx"
		// }
	},
	{
		title: "Software Engineer, Machine Learning Architecture",
		company: "Indian Institute of Information Technology",
		logo: "/images/logos/IIITDM.jpeg",
		location: "Chennai, TamilNadu",
		startYear: "2022",
		endYear: "2024",
		url: "https://www.iiitdm.ac.in",
		highlights: [
			"Architected and deployed a resilient end-to-end IoT system on resource-constrained hardware (Raspberry Pi), automating deployment and monitoring processes",
			"Optimized C++ inference kernels to achieve 35% lower latency, enabling real-time anomaly detection and data streaming to AWS",
			"Designed an on-device predictive filtering algorithm that reduced sensor data transmission by 95%, significantly lowering operational costs and network load"
		],
		publications: [
			{
				title: "Optimizing Kalman Filters for Data Integrity",
				url: "https://ieeexplore.ieee.org/abstract/document/10278208"
			},
			{
				title: "LoRa-based Fog Computing Framework",
				url: "https://ieeexplore.ieee.org/abstract/document/10572197"
			},
			{
				title: "Data Aggregation for LoRa in Smart Agriculture",
				url: "https://link.springer.com/chapter/10.1007/978-3-031-28451-9_4"
			}
		]
	}
]

const Experience = () => {
	const [pptModal, setPptModal] = useState<{ isOpen: boolean; file: string; title: string }>({
		isOpen: false,
		file: '',
		title: ''
	});

	const openPptModal = (file: string, title: string) => {
		setPptModal({ isOpen: true, file, title });
	};

	const closePptModal = () => {
		setPptModal({ isOpen: false, file: '', title: '' });
	};

	return (
		<section id="experience" className="py-24 bg-background">
			{/* PPT Modal */}
			<AnimatePresence>
				{pptModal.isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
						onClick={closePptModal}
					>
						<motion.div
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.9, opacity: 0 }}
							className="relative w-full max-w-6xl h-[85vh] bg-background rounded-lg overflow-hidden shadow-2xl"
							onClick={(e) => e.stopPropagation()}
						>
							{/* Header */}
							<div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-muted/30">
								<div className="flex items-center gap-2">
									<Presentation className="w-5 h-5 text-primary" />
									<span className="text-sm font-medium text-foreground truncate max-w-[500px]">
										{pptModal.title}
									</span>
								</div>
								<button
									onClick={closePptModal}
									className="p-2 rounded-md hover:bg-muted transition-colors"
								>
									<X className="w-5 h-5 text-muted-foreground" />
								</button>
							</div>
							{/* PPT Viewer using Google Docs Viewer */}
							<div className="w-full h-[calc(100%-52px)] relative">
								<iframe
									src={`https://docs.google.com/gview?url=${encodeURIComponent(
										typeof window !== 'undefined'
											? window.location.origin + pptModal.file
											: pptModal.file
									)}&embedded=true`}
									className="w-full h-full border-0"
									title={pptModal.title}
									allowFullScreen
								/>
								{/* Download fallback at bottom */}
								<div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gradient-to-t from-background to-transparent">
									<a
										href={pptModal.file}
										download
										className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
									>
										<FileText className="w-3.5 h-3.5" />
										Download if viewer doesn&apos;t load
									</a>
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			<div className="container mx-auto px-4 max-w-4xl">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-2xl font-medium mb-16 text-foreground"
				>
					Work Experience
				</motion.h2>

				<div className="space-y-12">
					{experiences.map((exp, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="group"
						>
							<div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
								{/* Logo + Date Column */}
								<div className="sm:w-44 flex-shrink-0 flex items-start gap-3">
									<div className="w-14 h-14 rounded-full overflow-hidden bg-muted/30 flex-shrink-0 flex items-center justify-center">
										<Image
											src={exp.logo}
											alt={`${exp.company} logo`}
											width={56}
											height={56}
											className="object-cover"
										/>
									</div>
									<span className="text-sm text-muted-foreground font-light pt-4">
										{exp.startYear} — {exp.endYear}
									</span>
								</div>

								{/* Content Column */}
								<div className="flex-1">
									<a
										href={exp.url}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-1 group/link"
									>
										<h3 className="text-base font-medium text-foreground group-hover/link:text-primary transition-colors">
											{exp.title} at {exp.company}
										</h3>
										<ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover/link:text-primary group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-all" />
									</a>
									<p className="text-sm text-muted-foreground mt-1">
										{exp.location}
									</p>

									{/* Highlights */}
									<ul className="mt-3 space-y-1.5">
										{exp.highlights.map((highlight, i) => (
											<li key={i} className="text-sm text-muted-foreground/70 leading-relaxed pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-muted-foreground/50">
												{highlight}
											</li>
										))}
									</ul>

									{/* Publications */}
									{exp.publications && exp.publications.length > 0 && (
										<div className="mt-4 space-y-2">
											<span className="text-xs text-muted-foreground font-medium">Publications</span>
											<div className="space-y-2">
												{exp.publications.map((pub, i) => (
													<a
														key={i}
														href={pub.url}
														target="_blank"
														rel="noopener noreferrer"
														className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 hover:border-primary/20 transition-all group/pub"
													>
														<div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
															<FileText className="w-4 h-4 text-primary" />
														</div>
														<p className="flex-1 text-sm font-medium text-foreground group-hover/pub:text-primary transition-colors truncate">
															{pub.title}
														</p>
														<ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover/pub:text-primary group-hover/pub:-translate-y-0.5 group-hover/pub:translate-x-0.5 transition-all flex-shrink-0" />
													</a>
												))}
											</div>
										</div>
									)}

									{/* GitHub Link */}
									{exp.github && (
										<a
											href={exp.github}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg bg-muted/50 border border-border/50 hover:bg-muted hover:border-border transition-all group/gh"
										>
											<Github className="w-4 h-4 text-foreground" />
											<span className="text-sm font-medium text-foreground group-hover/gh:text-primary transition-colors">View on GitHub</span>
											<ArrowUpRight className="w-3 h-3 text-muted-foreground group-hover/gh:text-primary group-hover/gh:-translate-y-0.5 group-hover/gh:translate-x-0.5 transition-all" />
										</a>
									)}

									{/* Video Link */}
									{exp.video && (
										<a
											href={exp.video}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-2 mt-4 ml-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 hover:bg-primary/20 hover:border-primary/30 transition-all group/vid"
										>
											<Play className="w-4 h-4 text-primary" />
											<span className="text-sm font-medium text-foreground group-hover/vid:text-primary transition-colors">Watch Demo</span>
											<ArrowUpRight className="w-3 h-3 text-muted-foreground group-hover/vid:text-primary group-hover/vid:-translate-y-0.5 group-hover/vid:translate-x-0.5 transition-all" />
										</a>
									)}

									{/* PPT Presentation
									{exp.ppt && (
										<div className="mt-4">
											<span className="text-xs text-muted-foreground font-medium block mb-2">Presentation</span>
											<button
												onClick={() => openPptModal(exp.ppt!.file, exp.ppt!.title)}
												className="group/ppt block w-full max-w-sm rounded-lg overflow-hidden border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg"
											>
												<div className="relative aspect-[16/9] bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
													<div className="text-center">
														<Presentation className="w-12 h-12 text-orange-500 mx-auto mb-2" />
														<span className="text-xs text-muted-foreground">Click to view presentation</span>
													</div>
													<div className="absolute inset-0 bg-black/0 group-hover/ppt:bg-black/10 transition-all flex items-center justify-center opacity-0 group-hover/ppt:opacity-100">
														<span className="text-sm font-medium text-primary">Open Presentation</span>
													</div>
												</div>
												<div className="px-3 py-2 bg-muted/30 border-t border-border/30">
													<p className="text-xs text-muted-foreground truncate flex items-center gap-1.5">
														<Presentation className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
														{exp.ppt.title}
													</p>
												</div>
											</button>
										</div>
									)} */}
								</div>
							</div>

							{/* Divider */}
							{index < experiences.length - 1 && (
								<div className="border-b border-border/30 mt-12" />
							)}
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Experience
