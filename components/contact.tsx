"use client";

import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";

const contactLinks = [
	{
		icon: Mail,
		label: "Email",
		href: "https://mail.google.com/mail/?view=cm&fs=1&to=vyasmayank963@gmail.com",
	},
	{
		icon: Phone,
		label: "Call",
		href: "tel:+16025171664",
	},
	{
		icon: MapPin,
		label: "Tempe, AZ",
		href: "#",
	},
	{
		icon: Github,
		label: "GitHub",
		href: "https://github.com/mayank-glitch-cpu",
	},
	{
		icon: Linkedin,
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/mayank-vyas-369796213/",
	},
	{
		icon: Twitter,
		label: "Twitter",
		href: "https://x.com/MayankV53812200",
	},
];

const Contact = () => (
	<footer className="w-full py-8 bg-muted/30">
		<div className="container mx-auto px-4 flex flex-col items-center">
			<div className="flex flex-wrap justify-center items-center gap-6 mb-4">
				{contactLinks.map((item, idx) => (
					<a
						key={idx}
						href={item.href}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
					>
						<item.icon className="h-5 w-5" />
						<span>{item.label}</span>
					</a>
				))}
			</div>
			{/* <Button
      size="lg"
      variant="outline"
      className="rounded-full"
      onClick={() =>
        window.open(
          "https://mail.google.com/mail/?view=cm&fs=1&to=vyasmayank963@gmail.com",
          "_blank",
          "noopener,noreferrer"
        )
      }
    >
      Contact Me
    </Button> */}
		</div>
		<div className="text-center text-sm text-muted-foreground mt-4">
			Made with{" "}
			<span className="text-red-500">♥</span> by Mayank
		</div>
	</footer>
);

export default Contact;
