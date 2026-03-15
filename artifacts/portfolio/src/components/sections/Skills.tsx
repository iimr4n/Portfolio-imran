import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Skills" 
          subtitle="My technical toolkit and areas of expertise."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {skillsData.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-card border border-border/60 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
            >
              <h3 className="text-xl font-display font-semibold mb-6 group-hover:text-primary transition-colors">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
