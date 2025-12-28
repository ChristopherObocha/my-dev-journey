import { motion } from "framer-motion";
import { Smartphone, Code2, Server, Database, Zap, Cloud } from "lucide-react";

const skills = [
  { name: "React Native", icon: Smartphone, description: "Cross-platform mobile apps" },
  { name: "TypeScript", icon: Code2, description: "Type-safe development" },
  { name: "React", icon: Zap, description: "Modern web interfaces" },
  { name: "Node.js", icon: Server, description: "Backend & APIs" },
  { name: "GraphQL", icon: Database, description: "Flexible data queries" },
  { name: "Firebase", icon: Cloud, description: "Cloud infrastructure" },
];

const tools = [
  "Expo",
  "Redux",
  "Zustand",
  "React Query",
  "Jest",
  "Detox",
  "Fastlane",
  "Git",
  "Figma",
  "VS Code",
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 rounded-full glass text-xs font-mono text-primary mb-4">
            Get to know me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                The Journey
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I started my journey in software engineering 6 years ago. More recently, I've been driven by
                  the desire to build products that people carry in their pockets
                  every day. There's something magical about creating experiences
                  that become part of someone's daily routine.
                </p>
                <p>
                  Over the years, I've had the privilege of working with startups
                  and established companies alike, shipping apps that have reached
                  millions of users. Each project has taught me the importance of
                  clean code, thoughtful UX, and the relentless pursuit of
                  performance.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies,
                  contributing to open source, or sharing what I've learned with
                  the developer community.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Core Skills
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="group p-4 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/50 hover:bg-secondary/80 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                        <skill.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground text-sm">
                          {skill.name}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <motion.span
                    key={tool}
                    className="px-3 py-2 rounded-lg bg-secondary text-sm font-mono text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
