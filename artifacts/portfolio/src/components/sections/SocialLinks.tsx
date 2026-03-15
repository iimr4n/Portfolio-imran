import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Linkedin, Instagram, ExternalLink } from "lucide-react";

export function SocialLinks() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Let's Connect" subtitle="Find me across the web." />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.a
            href="https://www.linkedin.com/in/7imran"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between p-6 md:p-8 bg-card rounded-2xl border border-border hover:border-[#0A66C2] hover:shadow-lg hover:shadow-[#0A66C2]/10 transition-all duration-300 group"
          >
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-xl bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Linkedin size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold font-display">LinkedIn</h3>
                <p className="text-muted-foreground font-medium">@7imran</p>
              </div>
            </div>
            <ExternalLink className="text-muted-foreground group-hover:text-[#0A66C2] transition-colors" />
          </motion.a>

          <motion.a
            href="https://www.instagram.com/iimr3n"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-between p-6 md:p-8 bg-card rounded-2xl border border-border hover:border-[#E1306C] hover:shadow-lg hover:shadow-[#E1306C]/10 transition-all duration-300 group"
          >
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-[#F56040] to-[#833AB4] text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                <Instagram size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold font-display">Instagram</h3>
                <p className="text-muted-foreground font-medium">@iimr3n</p>
              </div>
            </div>
            <ExternalLink className="text-muted-foreground group-hover:text-[#E1306C] transition-colors" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
