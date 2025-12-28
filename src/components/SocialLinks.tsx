import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  { icon: Github, href: "https://github.com/ChristopherObocha", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/christopher-obocha-368411156/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/wudiscontext", label: "Twitter" },
  { icon: Mail, href: "mailto:chrisobocha@gmail.com", label: "Email" },
];

export function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      {socials.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-3 rounded-full glass hover:border-primary/50 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label={social.label}
        >
          <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            {social.label}
          </span>
        </motion.a>
      ))}
    </div>
  );
}
