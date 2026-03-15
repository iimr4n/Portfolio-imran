import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Programming Languages",
    skills: ["Python", "Java", "C", "JavaScript"],
  },
  {
    category: "Web Development",
    skills: ["HTML", "CSS", "React", "Node.js", "REST APIs"],
  },
  {
    category: "AI & Data Science",
    skills: ["Machine Learning", "Deep Learning", "Data Analysis", "Data Visualization", "Pandas", "NumPy", "Scikit-learn"],
  },
  {
    category: "Tools & Technologies",
    skills: ["Git", "GitHub", "VS Code", "Linux", "Jupyter Notebook"],
  },
  {
    category: "Soft Skills",
    skills: ["Problem Solving", "Algorithmic Thinking", "Debugging", "Team Collaboration", "Software Design"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            Expertise
          </h2>
          <h3 className="text-4xl font-semibold tracking-tight text-foreground">
            What I Know.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 hover:border-foreground/20 hover:shadow-sm transition-all"
            >
              <h4 className="text-xs font-semibold tracking-widest uppercase text-primary mb-4">
                {category.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="bg-secondary text-secondary-foreground text-sm px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity"
                  >
                    {skill}
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
