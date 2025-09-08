// src/components/Hero.tsx
"use client";

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Linkedin, Github, Twitter, X } from 'lucide-react';
import { HeroBackground } from './hero-background';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const socialLinks = [
	{
		icon: Mail,
		label: "Mail",
		href: "https://mail.google.com/mail/?view=cm&fs=1&to=vyasmayank963@gmail.com",
		color: "hover:bg-red-500 hover:border-red-500",
	},
	{
		icon: Linkedin,
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/mayankv10",
		color: "hover:bg-blue-600 hover:border-blue-600",
	},
	{
		icon: Github,
		label: "GitHub",
		href: "https://github.com/mayank-glitch-cpu",
		color: "hover:bg-gray-800 hover:border-gray-800",
	},
	{
		icon: Twitter,
		label: "Twitter",
		href: "https://x.com/MayankV53812200",
		color: "hover:bg-blue-400 hover:border-blue-400",
	},
];

// Function to generate random positions in a circle
const generateRandomPositions = () => {
	const positions: { x: number; y: number }[] = [];
	const radius = 80;
	const angles = [0, 90, 180, 270]; // Base angles

	// Shuffle the angles for randomness
	const shuffledAngles = [...angles].sort(() => Math.random() - 0.5);

	shuffledAngles.forEach((baseAngle, index) => {
		// Add some randomness to the angle (±20 degrees)
		const randomOffset = (Math.random() - 0.5) * 40;
		const angle = (baseAngle + randomOffset) * (Math.PI / 180);

		// Add some randomness to the radius (±15px)
		const randomRadius = radius + (Math.random() - 0.5) * 30;

		positions.push({
			x: Math.cos(angle) * randomRadius,
			y: Math.sin(angle) * randomRadius,
		});
	});

	return positions;
};

const Hero: React.FC = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [showIcons, setShowIcons] = useState(false);
	const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
	const [isFlipped, setIsFlipped] = useState(false);
	const [iconPositions, setIconPositions] = useState(generateRandomPositions());
	const [bookingModalOpen, setBookingModalOpen] = useState(false);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start start', 'end start'],
	});

	const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
	const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

	// Only regenerate positions when initially showing icons, not while hovering over them
	useEffect(() => {
		if (showIcons && hoveredIdx === null) {
			setIconPositions(generateRandomPositions());
		}
	}, [showIcons]);

	const handleConnectHover = (isHovering: boolean) => {
		setShowIcons(isHovering);
		if (!isHovering) {
			setHoveredIdx(null);
		}
	};

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
							Brewing Software with AI Solutions. ☕️
						</motion.p>
						<motion.p
							className="text-lg text-muted-foreground"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.6 }}
						>
							As a Machine Learning Researcher, I leverage Natural Language Processing and Large Language Models to build impactful AI solutions.
						</motion.p>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.7 }}
						>
							<Button
								variant="link"
								className="p-0 h-auto text-lg"
								onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
							>
								Know more about me <ArrowRight className="ml-2 h-4 w-4" />
							</Button>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.8 }}
							className="flex flex-wrap gap-4"
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
								variant="default"
								className="rounded-full"
								onClick={() => window.open('https://drive.google.com/file/d/1mBTBy1fNGcjGnc-zUsYKGhKDi9IcPXr7/view?usp=sharing', '_blank')}
							>
								View Resume
							</Button>

							{/* Connect button */}
							<div
								className="relative"
								onMouseEnter={() => handleConnectHover(true)}
								onMouseLeave={() => handleConnectHover(false)}
							>
								<motion.div
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									transition={{ type: "spring", stiffness: 400, damping: 25 }}
								>
									<Button
										size="lg"
										variant="outline"
										className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 border-none"
									>
										Connect
									</Button>
								</motion.div>

								{/* Animated Social Icons */}
								<AnimatePresence>
									{showIcons && (
										<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
											{socialLinks.map((item, idx) => (
												<motion.a
													key={`${item.label}-${idx}`}
													href={item.href}
													target="_blank"
													rel="noopener noreferrer"
													initial={{
														x: 0,
														y: 0,
														opacity: 0,
														scale: 0,
														rotate: 0
													}}
													animate={{
														x: iconPositions[idx]?.x || 0,
														y: iconPositions[idx]?.y || 0,
														opacity: 1,
														scale: hoveredIdx === idx ? 1.4 : 1,
														rotate: hoveredIdx === idx ? 360 : 0
													}}
													exit={{
														x: 0,
														y: 0,
														opacity: 0,
														scale: 0,
														rotate: 180
													}}
													transition={{
														type: "spring",
														stiffness: 300,
														damping: 25,
														delay: idx * 0.1,
														rotate: { duration: 0.6, ease: "easeInOut" }
													}}
													className={`
                            absolute bg-white dark:bg-background border border-border rounded-full 
                            shadow-lg hover:shadow-xl p-3 cursor-pointer transition-all duration-300 
                            ${item.color} hover:text-white z-30 backdrop-blur-sm
                          `}
													style={{
														transform: `translate(-50%, -50%)`,
													}}
													onMouseEnter={() => setHoveredIdx(idx)}
													onMouseLeave={() => setHoveredIdx(null)}
													whileHover={{
														scale: 1.4,
														rotate: 10,
														transition: { duration: 0.2 }
													}}
													whileTap={{
														scale: 1.2,
														transition: { duration: 0.1 }
													}}
												>
													<motion.div
														animate={hoveredIdx === idx ? { rotate: [0, -10, 10, 0] } : {}}
														transition={{ duration: 0.4, repeat: hoveredIdx === idx ? Infinity : 0 }}
													>
														<item.icon className="h-5 w-5" />
													</motion.div>

													{/* Tooltip */}
													<motion.div
														initial={{ opacity: 0, y: 10, scale: 0.8 }}
														animate={hoveredIdx === idx ?
															{ opacity: 1, y: -35, scale: 1 } :
															{ opacity: 0, y: 10, scale: 0.8 }
														}
														transition={{ duration: 0.2 }}
														className="absolute left-1/2 -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black px-2 py-1 rounded text-xs font-medium whitespace-nowrap pointer-events-none"
													>
														{item.label}
														<div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black dark:border-t-white"></div>
													</motion.div>
												</motion.a>
											))}
										</div>
									)}
								</AnimatePresence>

								{/* Subtle background glow when icons are visible */}
								<AnimatePresence>
									{showIcons && (
										<motion.div
											initial={{ opacity: 0, scale: 0.8 }}
											animate={{ opacity: 0.1, scale: 1.5 }}
											exit={{ opacity: 0, scale: 0.8 }}
											transition={{ duration: 0.3 }}
											className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary rounded-full blur-3xl pointer-events-none z-10"
										/>
									)}
								</AnimatePresence>
							</div>
						</motion.div>

						{/* New "Book an appointment" button - placed below the existing buttons */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 1.0 }} // Slight delay to animate after the buttons above
							className="flex justify-start" // Align to the left, matching your layout
						>
							<Button
								size="lg"
								variant="outline"
								className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 border-none"
								onClick={() => setBookingModalOpen(true)} // Open the modal
							>
								Book an appointment
							</Button>
						</motion.div>
					</motion.div>

					{/* Blob Image Container - Fixed positioning and single image */}
					<motion.div
						whileHover={{ scale: 1 }}
						transition={{ duration: 2, ease: 'easeInOut' }}
						className="relative h-[100px] hidden lg:block"
						onMouseEnter={() => setIsFlipped(true)}
						onMouseLeave={() => setIsFlipped(false)}
					>
						<div className="relative w-full h-full perspective-1000">
							<motion.div
								className="relative w-full h-full preserve-3d"
								animate={{ rotateY: isFlipped ? 180 : 0 }}
								transition={{
									duration: 0.8,
									ease: [0.23, 1, 0.32, 1]
								}}
							>
								{/* Front Face */}
								<div className="absolute inset-0 backface-hidden flex items-center justify-center">
									<svg
										width="600"
										height="600"
										viewBox="0 0 200 200"
										xmlns="http://www.w3.org/2000/svg"
										className="drop-shadow-2xl"
									>
										<defs>
											<pattern id="front-image" patternUnits="objectBoundingBox" width="1" height="1">
												<image
													href="/images/projects/goldengate-frontface.jpeg"
													x="0"
													y="-25"
													width="220"
													height="200"
													preserveAspectRatio="xMidYMid slice"
												/>
											</pattern>
											<linearGradient id="front-overlay" x1="0%" y1="0%" x2="0%" y2="100%">
												<stop offset="0%" stopColor="rgba(139, 69, 19, 0)" />
												<stop offset="100%" stopColor="rgba(139, 69, 19, 0.1)" />
											</linearGradient>
										</defs>
										<path
											fill="url(#front-image)"
											d="M42.1,-56.8C54.8,-48.7,65.6,-36.8,71.7,-22.2C77.9,-7.7,79.6,9.3,73.2,22.2C66.8,35,52.4,43.6,38.9,51.6C25.3,59.5,12.7,66.8,-2.5,70.2C-17.7,73.7,-35.3,73.3,-46.4,64.6C-57.6,55.8,-62.2,38.8,-68.8,21.6C-75.5,4.4,-84.2,-12.9,-82.6,-29.7C-81.1,-46.5,-69.3,-62.9,-53.9,-70C-38.4,-77.1,-19.2,-75.1,-2.2,-72C14.7,-68.9,29.4,-64.8,42.1,-56.8Z"
											transform="translate(100 100)"
										/>
										<path
											fill="url(#front-overlay)"
											d="M42.1,-56.8C54.8,-48.7,65.6,-36.8,71.7,-22.2C77.9,-7.7,79.6,9.3,73.2,22.2C66.8,35,52.4,43.6,38.9,51.6C25.3,59.5,12.7,66.8,-2.5,70.2C-17.7,73.7,-35.3,73.3,-46.4,64.6C-57.6,55.8,-62.2,38.8,-68.8,21.6C-75.5,4.4,-84.2,-12.9,-82.6,-29.7C-81.1,-46.5,-69.3,-62.9,-53.9,-70C-38.4,-77.1,-19.2,-75.1,-2.2,-72C14.7,-68.9,29.4,-64.8,42.1,-56.8Z"
											transform="translate(100 100)"
										/>
									</svg>
								</div>

								{/* Back Face */}
								<div className="absolute inset-0 backface-hidden rotate-y-180 flex items-center justify-center">
									<svg
										width="600"
										height="600"
										viewBox="0 0 200 200"
										xmlns="http://www.w3.org/2000/svg"
										className="drop-shadow-2xl"
									>
										<defs>
											<pattern id="back-image" patternUnits="objectBoundingBox" width="1" height="1">
												<image
													href="/images/projects/fishermanWharf.jpeg"
													x="-40"
													y="0"
													width="200"
													height="200"
													preserveAspectRatio="xMidYMid slice"
												/>
											</pattern>
											<linearGradient id="back-overlay" x1="0%" y1="0%" x2="0%" y2="100%">
												<stop offset="0%" stopColor="rgba(168, 85, 247, 0)" />
												<stop offset="100%" stopColor="rgba(168, 85, 247, 0.2)" />
											</linearGradient>
										</defs>
										<path
											fill="url(#back-image)"
											d="M42.1,-56.8C54.8,-48.7,65.6,-36.8,71.7,-22.2C77.9,-7.7,79.6,9.3,73.2,22.2C66.8,35,52.4,43.6,38.9,51.6C25.3,59.5,12.7,66.8,-2.5,70.2C-17.7,73.7,-35.3,73.3,-46.4,64.6C-57.6,55.8,-62.2,38.8,-68.8,21.6C-75.5,4.4,-84.2,-12.9,-82.6,-29.7C-81.1,-46.5,-69.3,-62.9,-53.9,-70C-38.4,-77.1,-19.2,-75.1,-2.2,-72C14.7,-68.9,29.4,-64.8,42.1,-56.8Z"
											transform="translate(100 100)"
										/>
										<path
											fill="url(#back-overlay)"
											d="M42.1,-56.8C54.8,-48.7,65.6,-36.8,71.7,-22.2C77.9,-7.7,79.6,9.3,73.2,22.2C66.8,35,52.4,43.6,38.9,51.6C25.3,59.5,12.7,66.8,-2.5,70.2C-17.7,73.7,-35.3,73.3,-46.4,64.6C-57.6,55.8,-62.2,38.8,-68.8,21.6C-75.5,4.4,-84.2,-12.9,-82.6,-29.7C-81.1,-46.5,-69.3,-62.9,-53.9,-70C-38.4,-77.1,-19.2,-75.1,-2.2,-72C14.7,-68.9,29.4,-64.8,42.1,-56.8Z"
											transform="translate(100 100)"
										/>
									</svg>
								</div>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Immersed Modal for Booking */}
			<Dialog open={bookingModalOpen} onOpenChange={setBookingModalOpen}>
				<DialogContent className="sm:max-w-[800px] sm:max-h-[80vh] h-[600px] bg-card/90 backdrop-blur-md border-border/50">
					<DialogHeader>
						<DialogTitle className="flex justify-between items-center text-lg font-semibold gradient-text">
							<span>Schedule an appointment</span>
							<Button
								variant="ghost"
								size="icon"
								className="h-8 w-8 rounded-full hover:bg-muted"
								onClick={() => setBookingModalOpen(false)}
							>
								<X className="h-4 w-4" />
							</Button>
						</DialogTitle>
					</DialogHeader>
					<div className="w-full h-full min-h-[500px] rounded-lg overflow-hidden">
						<iframe
							src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ29Um0RH9Lo5sc2zmSIyTW8BFIQUWiBEezZwBpUJdeobRbRnmkrY5FRQxV00hAsPn7g_nfjQWyy?gv=true"
							frameBorder="0"
							style={{ width: '100%', height: '100%', minHeight: '500px' }}
							scrolling="yes"
							className="rounded-lg"
						></iframe>
					</div>
				</DialogContent>
			</Dialog>

			<style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
		</section>
	);
};

export default Hero;