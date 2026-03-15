import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center text-center pt-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-transparent text-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          <span className="text-muted-foreground">Available for opportunities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-foreground mb-4 -ml-1"
          style={{ letterSpacing: "-0.02em" }}
        >
          Ahammad Imran
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-xl text-muted-foreground font-light mb-2"
        >
          Software Engineer · AI & Data Science
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="text-sm text-muted-foreground mb-8"
        >
          Kerala, India · MEA Engineering College
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="italic text-lg text-muted-foreground max-w-md mx-auto mb-10"
        >
          "Passionate about building intelligent systems and modern software solutions."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://www.linkedin.com/in/7imran"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-primary text-white rounded-full px-7 py-3 text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Connect on LinkedIn
          </a>
          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto bg-transparent border border-foreground/20 rounded-full px-7 py-3 text-sm text-foreground hover:bg-foreground/5 transition-colors"
          >
            Contact Me
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="text-muted-foreground" size={24} />
      </motion.div>
    </section>
  );
}
