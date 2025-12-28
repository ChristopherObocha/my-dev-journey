import { motion } from "framer-motion";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-foreground mb-1">
              Let's build something together
            </p>
            <p className="text-sm text-muted-foreground">
              © {currentYear} FC Obocha. All rights reserved.
            </p>
          </div>

          <SocialLinks />
        </motion.div>
      </div>
    </footer>
  );
}
