// src/components/Hero.tsx
"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Linkedin, Github, Twitter, Calendar, FileText } from 'lucide-react';
import { HeroBackground } from './hero-background';

// Instagram icon component
const InstagramIcon = ({ className }: { className?: string }) => (
	<svg className={className} viewBox="0 0 24 24" fill="currentColor">
		<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
	</svg>
);

// X (Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
	<svg className={className} viewBox="0 0 24 24" fill="currentColor">
		<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
	</svg>
);

// YouTube icon component
const YouTubeIcon = ({ className }: { className?: string }) => (
	<svg className={className} viewBox="0 0 24 24" fill="currentColor">
		<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
	</svg>
);

// Google Scholar icon component
const GoogleScholarIcon = ({ className }: { className?: string }) => (
	<svg className={className} viewBox="0 0 24 24" fill="currentColor">
		<path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
	</svg>
);

// Hot Coffee Mug Animation Component
const HotCoffeeMug: React.FC = () => (
	<div className="inline-flex items-center ml-2">
		<svg
			width="32"
			height="32"
			viewBox="0 0 24 24"
			fill="none"
			className="text-amber-600"
		>
			{/* Steam animations */}
			<motion.path
				d="M8 2c0 1.5-1 2-1 3.5S8 8 8 8"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				fill="none"
				initial={{ opacity: 0.3, y: 0 }}
				animate={{
					opacity: [0.3, 0.8, 0.3],
					y: [0, -3, 0],
				}}
				transition={{
					duration: 2,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>
			<motion.path
				d="M12 2c0 1.5-1 2-1 3.5s1 2.5 1 2.5"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				fill="none"
				initial={{ opacity: 0.3, y: 0 }}
				animate={{
					opacity: [0.3, 0.8, 0.3],
					y: [0, -3, 0],
				}}
				transition={{
					duration: 2,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 0.3,
				}}
			/>
			<motion.path
				d="M16 2c0 1.5-1 2-1 3.5s1 2.5 1 2.5"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				fill="none"
				initial={{ opacity: 0.3, y: 0 }}
				animate={{
					opacity: [0.3, 0.8, 0.3],
					y: [0, -3, 0],
				}}
				transition={{
					duration: 2,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 0.6,
				}}
			/>
			{/* Coffee mug body */}
			<path
				d="M3 10h14v9a3 3 0 01-3 3H6a3 3 0 01-3-3v-9z"
				fill="currentColor"
			/>
			{/* Coffee liquid */}
			<path
				d="M4 11h12v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7z"
				fill="#78350f"
			/>
			{/* Mug handle */}
			<path
				d="M17 12h1a3 3 0 010 6h-1"
				stroke="currentColor"
				strokeWidth="2"
				fill="none"
			/>
		</svg>
	</div>
);

const socialLinks = [
	{
		icon: Github,
		label: "GitHub",
		href: "https://github.com/Mayank-glitch-cpu",
	},
	{
		icon: Linkedin,
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/mayankv10",
	},
	{
		icon: InstagramIcon,
		label: "Instagram",
		href: "https://www.instagram.com/i_ammayankkkk_?igsh=cDQ0NWlnMnhmNHEy",
	},
	{
		icon: YouTubeIcon,
		label: "YouTube",
		href: "https://www.youtube.com/@tech_savy_mayank4702",
	},
	{
		icon: XIcon,
		label: "X",
		href: "https://x.com/MayankV53812200",
	},
	{
		icon: GoogleScholarIcon,
		label: "Google Scholar",
		href: "https://scholar.google.com/citations?user=ZiszgsIAAAAJ&hl=en",
	},
];

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

			{/* Social links at bottom left */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 1 }}
				className="absolute bottom-8 left-8 flex items-center gap-4 z-20"
			>
				<div className="w-12 h-0.5 bg-muted-foreground/30" />
				{socialLinks.map((item, idx) => (
					<motion.a
						key={item.label}
						href={item.href}
						target="_blank"
						rel="noopener noreferrer"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: 1.1 + idx * 0.1 }}
						className="p-2 rounded-full border border-border bg-background/50 backdrop-blur-sm hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
						whileHover={{ scale: 1.1, y: -2 }}
						whileTap={{ scale: 0.95 }}
					>
						<item.icon className="h-4 w-4" />
					</motion.a>
				))}
			</motion.div>

			<div className="container mx-auto px-4">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						style={{ opacity, y }}
						className="space-y-6 lg:pl-16"
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
							className="text-xl text-muted-foreground flex items-center"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}
						>
							Brewing Software with AI Solutions.
							<HotCoffeeMug />
						</motion.p>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.6 }}
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
							transition={{ duration: 0.5, delay: 0.7 }}
							className="flex flex-wrap gap-4"
						>
							<Button
								variant="link"
								className="p-0 h-auto text-base flex items-center gap-2"
								onClick={() => window.open('https://mayank-glitch-cpu.github.io/mayank-resume/', '_blank')}
							>
								<FileText className="h-4 w-4" />
								View Resume
							</Button>

							<Button
								size="lg"
								className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
								onClick={() => window.open('https://calendly.com/vyasmayank963/30min', '_blank')}
							>
								<Calendar className="mr-2 h-4 w-4" />
								Let's Talk
							</Button>
						</motion.div>
					</motion.div>

					{/* Blob Image Container */}
					<motion.div
						whileHover={{ scale: 1.02 }}
						transition={{ duration: 0.4, ease: 'easeOut' }}
						className="relative h-[500px] hidden lg:flex items-center justify-center"
					>
						{/* Outer glow for immersion effect */}
						<div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-transparent blur-3xl" />
						<svg
							width="600"
							height="600"
							viewBox="0 0 200 200"
							xmlns="http://www.w3.org/2000/svg"
							className="relative z-10"
							style={{
								filter: 'drop-shadow(0 25px 50px rgba(139, 92, 246, 0.3)) drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2))'
							}}
						>
							<defs>
								{/* Clip path for the blob shape */}
								<clipPath id="front-blob-clip">
									<path
										d="M42.1,-56.8C54.8,-48.7,65.6,-36.8,71.7,-22.2C77.9,-7.7,79.6,9.3,73.2,22.2C66.8,35,52.4,43.6,38.9,51.6C25.3,59.5,12.7,66.8,-2.5,70.2C-17.7,73.7,-35.3,73.3,-46.4,64.6C-57.6,55.8,-62.2,38.8,-68.8,21.6C-75.5,4.4,-84.2,-12.9,-82.6,-29.7C-81.1,-46.5,-69.3,-62.9,-53.9,-70C-38.4,-77.1,-19.2,-75.1,-2.2,-72C14.7,-68.9,29.4,-64.8,42.1,-56.8Z"
										transform="translate(100 100)"
									/>
								</clipPath>
								{/* Gradient overlay for depth */}
								<linearGradient id="front-depth-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
									<stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
									<stop offset="50%" stopColor="rgba(255,255,255,0)" />
									<stop offset="100%" stopColor="rgba(0,0,0,0.2)" />
								</linearGradient>
								{/* Radial gradient for vignette effect */}
								<radialGradient id="front-vignette" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
									<stop offset="60%" stopColor="rgba(0,0,0,0)" />
									<stop offset="100%" stopColor="rgba(0,0,0,0.3)" />
								</radialGradient>
							</defs>
							{/* Main image with blob clip */}
							<g clipPath="url(#front-blob-clip)">
								<image
									href="/images/me/meatSF.jpeg"
									x="16"
									y="25"
									width="165"
									height="149"
									preserveAspectRatio="xMidYMid slice"
								/>
								{/* Vignette overlay */}
								<path
									fill="url(#front-vignette)"
									d="M42.1,-56.8C54.8,-48.7,65.6,-36.8,71.7,-22.2C77.9,-7.7,79.6,9.3,73.2,22.2C66.8,35,52.4,43.6,38.9,51.6C25.3,59.5,12.7,66.8,-2.5,70.2C-17.7,73.7,-35.3,73.3,-46.4,64.6C-57.6,55.8,-62.2,38.8,-68.8,21.6C-75.5,4.4,-84.2,-12.9,-82.6,-29.7C-81.1,-46.5,-69.3,-62.9,-53.9,-70C-38.4,-77.1,-19.2,-75.1,-2.2,-72C14.7,-68.9,29.4,-64.8,42.1,-56.8Z"
									transform="translate(100 100)"
								/>
								{/* Depth gradient overlay */}
								<path
									fill="url(#front-depth-gradient)"
									d="M42.1,-56.8C54.8,-48.7,65.6,-36.8,71.7,-22.2C77.9,-7.7,79.6,9.3,73.2,22.2C66.8,35,52.4,43.6,38.9,51.6C25.3,59.5,12.7,66.8,-2.5,70.2C-17.7,73.7,-35.3,73.3,-46.4,64.6C-57.6,55.8,-62.2,38.8,-68.8,21.6C-75.5,4.4,-84.2,-12.9,-82.6,-29.7C-81.1,-46.5,-69.3,-62.9,-53.9,-70C-38.4,-77.1,-19.2,-75.1,-2.2,-72C14.7,-68.9,29.4,-64.8,42.1,-56.8Z"
									transform="translate(100 100)"
								/>
							</g>
							{/* Subtle border/edge highlight */}
							<path
								fill="none"
								stroke="url(#front-depth-gradient)"
								strokeWidth="1.5"
								d="M42.1,-56.8C54.8,-48.7,65.6,-36.8,71.7,-22.2C77.9,-7.7,79.6,9.3,73.2,22.2C66.8,35,52.4,43.6,38.9,51.6C25.3,59.5,12.7,66.8,-2.5,70.2C-17.7,73.7,-35.3,73.3,-46.4,64.6C-57.6,55.8,-62.2,38.8,-68.8,21.6C-75.5,4.4,-84.2,-12.9,-82.6,-29.7C-81.1,-46.5,-69.3,-62.9,-53.9,-70C-38.4,-77.1,-19.2,-75.1,-2.2,-72C14.7,-68.9,29.4,-64.8,42.1,-56.8Z"
								transform="translate(100 100)"
							/>
						</svg>
					</motion.div>
				</div>
			</div>

		</section>
	);
};

export default Hero;
