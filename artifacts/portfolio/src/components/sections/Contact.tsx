import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Phone, MessageSquare } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Get In Touch" />

        <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary to-accent p-[1px] rounded-[2.5rem] shadow-2xl shadow-primary/10">
          <div className="bg-card rounded-[2.4rem] p-8 md:p-16 text-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
              className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 text-primary"
            >
              <MessageSquare size={36} />
            </motion.div>
            
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl font-display font-bold mb-4"
            >
              Open to opportunities, collaborations, and tech discussions.
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground mb-10"
            >
              Whether you have a question or just want to say hi, my inbox is always open.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a
                href="tel:9061098676"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-5 rounded-full font-bold text-xl md:text-2xl shadow-lg hover:shadow-xl hover:scale-105 hover:bg-primary/90 transition-all duration-300"
              >
                <Phone size={28} />
                9061098676
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
