import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart, Instagram } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  const links = [
    { label: "Home", path: "/" },
    { label: "About the Artist", path: "/about" },
    { label: "Exhibitions", path: "/exhibitions" },
    { label: "Works", path: "/work" },
    { label: "Shop", path: "/shop" },
    { label: "New", path: "/new_collection/note_to_self" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        <Link to="/" className="text-foreground text-xl font-semibold tracking-tight">
          Anidi
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-widest uppercase transition-colors duration-300 ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>

          <Link
            to="/cart"
            className="relative text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Cart"
          >
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-border overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-4">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`text-lg font-medium tracking-widest uppercase transition-colors ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
