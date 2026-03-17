import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h3 className="text-foreground text-xl font-semibold mb-2">Anidi Ezenwata</h3>
            <p className="text-muted-foreground text-sm">Visual Artist</p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <Link to="/about" className="text-muted-foreground hover:text-foreground text-sm uppercase tracking-widest transition-colors">About</Link>
            <Link to="/work" className="text-muted-foreground hover:text-foreground text-sm uppercase tracking-widest transition-colors">Work</Link>
            <Link to="/shop" className="text-muted-foreground hover:text-foreground text-sm uppercase tracking-widest transition-colors">Shop</Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground text-sm uppercase tracking-widest transition-colors">Contact</Link>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/anidi_t.l.o.t.e?igsh=d2Z5cnBjMnF5c3Ru"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-muted-foreground font-mono text-xs tracking-wide">
            © 2025 Anidi — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
