import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { artworks } from "@/data/artwork_notetoself";

const New = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-24 px-6 md:px-12">
        <section className="py-24">
          <div className="mb-8 max-w-3xl mx-auto flex items-end justify-center gap-3 md:gap-5 text-center">
            <h1 className="text-foreground font-plex tracking-widest uppercase text-4xl md:text-6xl lg:text-7xl font-light">
              Note to Self
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground font-mono text-sm md:text-base pb-2"
            >
              2026
            </motion.p>
          </div>

          <div className="max-w-3xl mx-auto mb-16">
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-foreground text-2xl md:text-3xl font-light tracking-tight italic text-center mb-10"
            >
              "These paintings are my quiet reminders to myself to keep going"
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-muted-foreground space-y-6 text-lg font-light leading-relaxed"
            >
              <p>
                They were created during a deeply uncertain period of my life, shortly after
                graduating from university, when the excitement of finishing one chapter was
                quickly replaced by the overwhelming question: "What next?"
              </p>
              <p>
                I found myself constantly trying to figure out the next step — where I was going,
                what I was becoming, and whether I was making the right choices. The questions
                seemed endless, and some days, the uncertainty felt heavier than I knew how to
                express.
              </p>
              <p>So I painted.</p>
              <p>
                Each work became a small conversation with myself — a way of putting those
                feelings somewhere outside of me and reminding myself that I don't need to have
                everything figured out at once. These paintings hold the confusion, fear, hope,
                and quiet determination that came with standing in between who I had been and who
                I was becoming.
              </p>
              <p>
                This collection is deeply personal because it captures a moment I am still
                learning to understand: the uncertainty of becoming. It represents the questions
                I carried, but also the hope that existed beneath them — the belief that not
                knowing what comes next does not mean there is nothing ahead.
              </p>
              <p className="text-foreground">
                They are reminders to pause when I feel overwhelmed, to trust the process even
                when I cannot see where it is leading, and most importantly, to keep trying my
                best.
              </p>
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {artworks.map((artwork, i) => (
              <motion.div
                key={artwork.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)]"
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
                <div className="mt-4">
                  <Link to={`/work/${artwork.id}`}>
                    <h3 className="text-foreground text-lg font-medium tracking-tight hover:text-primary transition-colors">
                      {artwork.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      {artwork.medium}
                      {artwork.tool && (
                        <span className="text-xs"> · {artwork.tool}</span>
                      )}
                    </p>
                  </Link>
                  <Link
                    to={`/work/${artwork.id}#description`}
                    className="text-muted-foreground text-sm mt-3 leading-relaxed line-clamp-3 hover:text-foreground/70 transition-colors"
                  >
                    {artwork.description}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 max-w-3xl mx-auto border-t border-border pt-12 text-center">
            <p className="text-muted-foreground text-sm font-mono">
              Note to Self. For any questions or concerns please contact{" "}
              <a href="mailto:ezenwataanidi@gmail.com" className="text-primary hover:underline">
                ezenwataanidi@gmail.com
              </a>
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default New;