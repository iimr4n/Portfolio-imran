import { motion } from "framer-motion";
import { Linkedin, Instagram, Github, ArrowUpRight } from "lucide-react";

export function SocialLinks() {
  return (
    <section id="social" className="py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            Connect
          </h2>
          <h3 className="text-4xl font-semibold tracking-tight text-foreground">
            Find Me Online.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <motion.a
            href="https://www.linkedin.com/in/7imran"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-between bg-card border border-border rounded-2xl p-6 hover:border-foreground/20 hover:-translate-y-[2px] transition-all"
          >
            <div className="flex items-center gap-4">
              <Linkedin className="text-[#0A66C2]" size={24} />
              <div>
                <h4 className="font-medium text-foreground">LinkedIn</h4>
                <p className="text-sm text-muted-foreground">@7imran</p>
              </div>
            </div>
            <ArrowUpRight className="text-muted-foreground" size={20} />
          </motion.a>

          <motion.a
            href="https://www.instagram.com/iimr3n"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-between bg-card border border-border rounded-2xl p-6 hover:border-foreground/20 hover:-translate-y-[2px] transition-all"
          >
            <div className="flex items-center gap-4">
              <Instagram className="text-[#E1306C]" size={24} />
              <div>
                <h4 className="font-medium text-foreground">Instagram</h4>
                <p className="text-sm text-muted-foreground">@iimr3n</p>
              </div>
            </div>
            <ArrowUpRight className="text-muted-foreground" size={20} />
          </motion.a>

          <motion.a
            href="https://github.com/iimr4n"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-between bg-card border border-border rounded-2xl p-6 hover:border-foreground/20 hover:-translate-y-[2px] transition-all"
          >
            <div className="flex items-center gap-4">
              <Github className="text-foreground" size={24} />
              <div>
                <h4 className="font-medium text-foreground">GitHub</h4>
                <p className="text-sm text-muted-foreground">@iimr4n</p>
              </div>
            </div>
            <ArrowUpRight className="text-muted-foreground" size={20} />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
