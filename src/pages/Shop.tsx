import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { artworks } from "@/data/artworks";
import { useCart } from "@/context/CartContext";
import { toast } from "@/hooks/use-toast";

const Shop = () => {
  const { addToCart } = useCart();
  const availableArtworks = artworks.filter((a) => a.status === "new");

  const handleAddToCart = (artwork: typeof artworks[0]) => {
    addToCart(artwork);
    toast({
      title: "Added to cart",
      description: `${artwork.title} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-24 px-6 md:px-12">
        <section className="py-24">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-foreground text-5xl md:text-7xl font-light tracking-tight text-center mb-4"
          >
            Shop
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-center text-lg font-mono mb-16"
          >
            For any questions or concerns please contact{" "}
            <a href="mailto:ezenwataanidi@gmail.com" className="text-primary hover:underline">
              ezenwataanidi@gmail.com
            </a>
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {availableArtworks.map((artwork, i) => (
              <motion.div
                key={artwork.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group"
              >
                <Link to={`/work/${artwork.id}`} className="block">
                  <div className="relative overflow-hidden">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-mono uppercase tracking-widest font-semibold bg-primary text-primary-foreground">
                        New
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="mt-4 flex items-start justify-between">
                  <Link to={`/work/${artwork.id}`}>
                    <h3 className="text-foreground text-lg font-medium tracking-tight hover:text-primary transition-colors">
                      {artwork.title}
                    </h3>
                    <p className="text-primary text-sm font-semibold mt-1">
                      ${artwork.price.toLocaleString()}
                    </p>
                  </Link>
                  <button
                    onClick={() => handleAddToCart(artwork)}
                    className="text-muted-foreground hover:text-primary transition-colors p-2"
                    aria-label={`Add ${artwork.title} to cart`}
                  >
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
