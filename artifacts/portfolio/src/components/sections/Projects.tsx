import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "AI Chat Assistant",
    description:
      "A conversational AI assistant built with Python and natural language processing. Supports multi-turn conversations and context-aware responses.",
    tags: ["Python", "NLP", "Machine Learning", "Flask"],
    github: "https://github.com/iimr4n",
  },
  {
    name: "Data Visualization Dashboard",
    description:
      "An interactive dashboard for exploring and visualizing datasets. Features real-time charts, filters, and export functionality.",
    tags: ["React", "Pandas", "NumPy", "Recharts"],
    github: "https://github.com/iimr4n",
  },
  {
    name: "Portfolio Website",
    description:
      "A clean, minimal personal portfolio built with React and Tailwind CSS. Deployed on Cloudflare Pages with a custom domain.",
    tags: ["React", "Tailwind CSS", "Vite", "Cloudflare"],
    github: "https://github.com/iimr4n/Portfolio-imran",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 bg-muted/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            Projects
          </h2>
          <h3 className="text-4xl font-semibold tracking-tight text-foreground">
            Things I've Built.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 hover:border-foreground/20 transition-all group"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h4 className="text-xl font-semibold text-foreground">
                  {project.name}
                </h4>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors shrink-0"
                >
                  <Github size={16} />
                  View on GitHub
                  <ArrowUpRight size={14} />
                </a>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
