import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { artworks } from "@/data/artworks2";

const Index = () => {
  const featuredWorks = artworks.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero — Full-screen cinematic like dimithryvictor.com */}
      <section className="relative h-screen flex items-center justify-start overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            src={artworks[0].image}
            alt="Featured artwork by Anidi"
            className="w-full h-full object-cover"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40" />
        </div>

        {/* Big name — centered vertically */}
        <div className="px-6 md:px-12 max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute bottom-10 left-6 md:left-12 z-10  uppercase text-foreground text-6xl md:text-8xl lg:text-9xl font-light tracking-tight leading-[0.9]"
          >
            Anidi
          </motion.h1>
        </div>

        {/* "Visual Artist" pinned to bottom-left */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-6 left-6 md:left-12 z-10 text-muted-foreground font-mono text-sm md:text-base tracking-[0.3em] uppercase"
        >
          Visual Artist
        </motion.p>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 flex flex-col gap-4"
        >
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
        </motion.div>
      </section>

      {/* Featured works section */}
      <section className="px-6 md:px-12 py-24">
        <div className="flex items-center justify-between mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground font-mono text-sm tracking-widest uppercase"
          >
            Featured Works
          </motion.h2>
  
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredWorks.map((artwork, i) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              <Link to={`/work/${artwork.id}`} className="group block">
                <div className="relative overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-foreground text-lg font-medium tracking-tight">
                    {artwork.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-mono mt-1">
                    {artwork.year} · {artwork.medium}
                  </p>
                  {/* {artwork.status === "new" && (
                    <p className="text-primary text-sm font-semibold mt-2">
                      ${artwork.price.toLocaleString()}
                    </p>
                  )} */}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote/About teaser */}
      <section className="px-6 md:px-12 py-24 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-foreground text-2xl md:text-4xl font-light leading-relaxed tracking-tight italic"
          >
            "As with my art pieces, I strive to bring out the best in them, by using different media to invoke questions, thoughts, passions and emotions that might never leave you, the viewer."
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8"
          >
            <Link
              to="/about"
              className="text-primary hover:text-foreground text-sm uppercase tracking-widest font-medium transition-colors inline-flex items-center gap-2 group"
            >
              About the Artist
              {/* <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /> */}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Shop CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={artworks[4].image}
            alt=""
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        <div className="relative z-10 px-6 md:px-12 py-32 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-foreground text-4xl md:text-6xl font-light tracking-tight mb-6"
          >
            Shop Prints & Originals
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-3 text-sm uppercase tracking-widest font-medium hover:bg-primary/90 transition-colors group"
            >
              Shop Now
              {/* <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /> */}
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;