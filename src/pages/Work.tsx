import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { artworks } from "@/data/artworks2";

const Work = () => {
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
            Anidi's Works
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-center text-lg font-mono mb-16"
          >
            For inquiries please contact{" "}
            <a href="mailto:ezenwataanidi@gmail.com" className="text-primary hover:underline">
              ezenwataanidi@gmail.com
            </a>
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map((artwork, i) => (
              <motion.div
                key={artwork.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link to={`/work/${artwork.id}`} className="group block">
                  <div className="relative overflow-hidden">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                  <div className="mt-4">
                    <h3 className="text-foreground text-lg font-medium tracking-tight">
                      {artwork.title}
                    </h3>
                    <p className="text-muted-foreground text-sm font-mono mt-1">
                      {artwork.year} · {artwork.medium}
                    </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Work;
