import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            Contact
          </h2>
          <h3 className="text-5xl md:text-6xl font-semibold tracking-tight text-foreground mb-6">
            Let's Talk.
          </h3>
          <p className="text-xl text-muted-foreground max-w-lg mx-auto mb-12">
            Open to opportunities, collaborations, and tech discussions.
          </p>

          <div className="flex flex-col items-center gap-6">
            <a
              href="tel:9061098676"
              className="text-2xl font-medium text-foreground hover:underline decoration-1 underline-offset-4 transition-all"
            >
              9061098676
            </a>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={18} />
              <span>Based in Kerala, India</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
