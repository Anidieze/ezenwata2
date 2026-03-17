import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { artworks } from "@/data/artworks";
import { useCart } from "@/context/CartContext";
import { toast } from "@/hooks/use-toast";

const ArtworkDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const artwork = artworks.find((a) => a.id === id);

  if (!artwork) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-foreground text-4xl font-light mb-4">Artwork not found</h1>
          <Link to="/work" className="text-primary hover:underline">Back to works</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
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
        <section className="py-12">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm uppercase tracking-widest transition-colors mb-12"
          >
            <ArrowLeft size={16} />
            Back to Works
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full object-contain max-h-[80vh]"
                />
                {artwork.status === "sold" && (
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-destructive text-destructive-foreground text-sm font-mono uppercase tracking-widest font-semibold">
                      Sold
                    </span>
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <div className="mb-4">
                <span
                  className={`px-3 py-1 text-xs font-mono uppercase tracking-widest font-semibold ${
                    artwork.status === "sold"
                      ? "bg-destructive text-destructive-foreground"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  {artwork.status === "sold" ? "Sold" : "Available"}
                </span>
              </div>

              <h1 className="text-foreground text-3xl md:text-5xl font-light tracking-tight mb-4">
                {artwork.title}
              </h1>

              <div className="flex items-center gap-4 text-muted-foreground font-mono text-sm mb-8">
                <span>{artwork.year}</span>
                <span>·</span>
                <span>{artwork.medium}</span>
                {artwork.dimensions && (
                  <>
                    <span>·</span>
                    <span>{artwork.dimensions}</span>
                  </>
                )}
              </div>

              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                {artwork.description}
              </p>

              {artwork.status === "new" ? (
                <div>
                  <p className="text-foreground text-3xl font-light mb-6">
                    ${artwork.price.toLocaleString()}
                  </p>
                  <button
                    onClick={handleAddToCart}
                    className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-3 text-sm uppercase tracking-widest font-medium hover:bg-primary/90 transition-colors"
                  >
                    <ShoppingCart size={18} />
                    Add to Cart
                  </button>
                </div>
              ) : (
                <div>
                  <p className="text-muted-foreground text-lg font-mono">
                    This artwork has been sold.
                  </p>
                  <p className="text-muted-foreground text-sm mt-2">
                    For commissions or similar works, please{" "}
                    <Link to="/contact" className="text-primary hover:underline">
                      contact the artist
                    </Link>
                    .
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ArtworkDetail;
