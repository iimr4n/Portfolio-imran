import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-32 bg-muted/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            About
          </h2>
          <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-8 max-w-lg">
            Building the Future,<br />One Line at a Time.
          </h3>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-16 max-w-3xl">
            <p>
              I am a BTech student specializing in Artificial Intelligence and Data Science at MEA Engineering College, Kerala.
            </p>
            <p>
              Passionate about software development, AI technologies, and building intelligent systems. I enjoy learning modern technologies and creating impactful software solutions that solve real-world problems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-border pt-8">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-foreground">2+</span>
              <span className="text-sm text-muted-foreground mt-1">Years of Coding</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-foreground">15+</span>
              <span className="text-sm text-muted-foreground mt-1">Technologies Mastered</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-foreground">5+</span>
              <span className="text-sm text-muted-foreground mt-1">Projects Built</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
