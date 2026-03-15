import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GraduationCap, MapPin, Building2 } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Education" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-10 rounded-3xl blur-xl" />
          
          <div className="relative bg-card border border-border rounded-3xl p-8 md:p-12 overflow-hidden shadow-lg shadow-black/5 group">
            {/* Decorative background circle */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />
            
            <div className="flex flex-col md:flex-row md:items-start gap-8 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                <GraduationCap size={32} />
              </div>
              
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                  BTech – Artificial Intelligence & Data Science
                </h3>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Building2 size={18} className="text-primary" />
                    <span className="font-medium text-lg">MEA Engineering College</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-primary" />
                    <span className="font-medium text-lg">Kerala, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
