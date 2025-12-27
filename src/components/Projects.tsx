import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Finance Tracker Pro",
    description:
      "A comprehensive personal finance app with budgeting, expense tracking, and investment portfolio management. Features real-time sync and intuitive charts.",
    tags: ["React Native", "TypeScript", "Redux", "Firebase"],
    github: "https://github.com",
    appStore: "https://apps.apple.com",
  },
  {
    title: "FitFlow",
    description:
      "Workout planning and tracking app with AI-powered recommendations. Includes video demonstrations and progress analytics.",
    tags: ["React Native", "Expo", "Node.js", "MongoDB"],
    appStore: "https://apps.apple.com",
    playStore: "https://play.google.com",
  },
  {
    title: "TaskMaster",
    description:
      "Collaborative task management app for teams. Real-time updates, project boards, and seamless integrations with popular tools.",
    tags: ["React Native", "GraphQL", "PostgreSQL", "AWS"],
    github: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "MealPrep AI",
    description:
      "Smart meal planning app that generates personalized recipes based on dietary preferences, available ingredients, and nutritional goals.",
    tags: ["React Native", "Python", "OpenAI", "Supabase"],
    appStore: "https://apps.apple.com",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 rounded-full glass text-xs font-mono text-primary mb-4">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of apps I've built over the years. Each one taught me
            something new and pushed the boundaries of what's possible on mobile.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
