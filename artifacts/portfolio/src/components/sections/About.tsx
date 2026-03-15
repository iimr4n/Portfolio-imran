import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-xl shadow-black/5"
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl leading-relaxed text-foreground font-medium">
              <span className="text-primary font-bold">Ahammad Imran</span> is a BTech student specializing in Artificial Intelligence and Data Science at MEA Engineering College, Kerala.
            </p>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-muted-foreground">
              He is passionate about software development, AI technologies, and building intelligent systems. He enjoys learning modern technologies and creating impactful software solutions that solve real-world problems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
