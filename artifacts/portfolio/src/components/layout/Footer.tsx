import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  // Ensure the requirement of © 2026 is met, or dynamically calculate it if future
  const displayYear = currentYear > 2026 ? currentYear : 2026;

  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center justify-center text-center">
        <h3 className="font-display font-bold text-2xl mb-2">Ahammad Imran A</h3>
        <p className="text-muted-foreground font-medium mb-6">
          Software Engineer | AI & Data Science
        </p>
        <p className="text-sm text-muted-foreground/80 flex items-center gap-1">
          © {displayYear} Built with <Heart size={14} className="text-destructive mx-1" /> visually exceptional intent
        </p>
      </div>
    </footer>
  );
}
