import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Trash2, ArrowLeft, ShoppingCart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { toast } from "@/hooks/use-toast";

const Cart = () => {
  const { items, removeFromCart, clearCart, totalPrice } = useCart();

  const handleCheckout = () => {
    toast({
      title: "Order placed!",
      description: "Thank you for your purchase. We'll be in touch with shipping details.",
    });
    clearCart();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-24 px-6 md:px-12">
        <section className="py-24 max-w-4xl mx-auto">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm uppercase tracking-widest transition-colors mb-12"
          >
            <ArrowLeft size={16} />
            Continue Shopping
          </Link>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-foreground text-4xl md:text-5xl font-light tracking-tight mb-12"
          >
            Your Cart
          </motion.h1>

          {items.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <ShoppingCart size={48} className="text-muted-foreground mx-auto mb-6" />
              <p className="text-muted-foreground text-lg mb-6">Your cart is empty</p>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 text-sm uppercase tracking-widest font-medium hover:bg-primary/90 transition-colors"
              >
                Browse Shop
              </Link>
            </motion.div>
          ) : (
            <div>
              <div className="space-y-0">
                {items.map((item) => (
                  <motion.div
                    key={item.artwork.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-6 py-6 border-b border-border"
                  >
                    <Link to={`/work/${item.artwork.id}`}>
                      <img
                        src={item.artwork.image}
                        alt={item.artwork.title}
                        className="w-24 h-24 object-cover"
                      />
                    </Link>
                    <div className="flex-1">
                      <Link to={`/work/${item.artwork.id}`}>
                        <h3 className="text-foreground font-medium hover:text-primary transition-colors">
                          {item.artwork.title}
                        </h3>
                      </Link>
                      <p className="text-muted-foreground text-sm font-mono mt-1">
                        {item.artwork.medium} · {item.artwork.year}
                      </p>
                    </div>
                    <p className="text-foreground font-medium">
                      ${item.artwork.price.toLocaleString()}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.artwork.id)}
                      className="text-muted-foreground hover:text-destructive transition-colors p-2"
                      aria-label="Remove from cart"
                    >
                      <Trash2 size={18} />
                    </button>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 border-t border-border pt-8">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-foreground text-lg">Total</span>
                  <span className="text-foreground text-2xl font-light">
                    ${totalPrice.toLocaleString()}
                  </span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-primary text-primary-foreground py-4 text-sm uppercase tracking-widest font-medium hover:bg-primary/90 transition-colors"
                >
                  Checkout
                </button>
              </div>
            </div>
          )}
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
