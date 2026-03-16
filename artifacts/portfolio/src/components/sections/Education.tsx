import { motion } from "framer-motion";

export function Education() {
  return (
    <section id="education" className="py-32 bg-muted/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            Education
          </h2>
          <h3 className="text-4xl font-semibold tracking-tight text-foreground">
            Academic Background.
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-card border border-border rounded-2xl p-8 md:p-12"
        >
          <div className="flex flex-col gap-6">
            <span className="text-xs text-muted-foreground">2025 — 2029</span>
            
            <div>
              <h4 className="text-2xl font-semibold text-foreground mb-2">
                Artificial Intelligence & Data Science
              </h4>
              <p className="text-lg text-muted-foreground">
                MEA Engineering College · Kerala, India
              </p>
            </div>
            
            <hr className="border-border w-full" />
            
            <div className="flex gap-3">
              <span className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">
                B.Tech
              </span>
              <span className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">
                AI & Data Science
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
