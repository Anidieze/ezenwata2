import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Instagram } from "lucide-react";
import video1 from "@/assets/video-1.mp4";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-24 px-6 md:px-12">
        <section className="py-24 max-w-5xl max-h-4xl mx-auto">
          <div className="items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <video
                src={video1}
                autoPlay
                loop
                muted
                playsInline
                className="w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-muted-foreground font-mono text-sm tracking-widest uppercase mb-8 mt-8">
                About the Artist
              </h1>
              <h2 className="text-foreground text-4xl md:text-5xl font-light tracking-tight mb-8">
                Anidi Ezenwata
              </h2>
              <div className="space-y-6 text-muted-foreground text-base leading-relaxed">
                <p>
                  To me, Art is a religion and as one of its fervent apostles, I leverage my art processes and pieces towards quest for self-realization, learning and improvement and I desire, more than anything, for my audience to have the same feel when reflecting on my art pieces.
                </p>
                <p>
                  I do not limit myself to one medium, style and concept, knowledge changes, but I try to keep my art original (African) because that is my identity. I experiment with different materials in my immediate environ with potential to ignite some nostalgic feeling and thoughts. What some might see as waste, I see as resource.
                </p>
                <p>
                  I am inspired by my environment and the problems surrounding it, my inspiration comes from questioning
what many would accept, fixing what might feel unbroken, and making statements that have never been
considered.However, my greatest inspiration is God because I view art as a continuation of God's creation and my dire fear is losing that creativity.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <a
                  href="https://www.instagram.com/anidi_t.l.o.t.e?igsh=d2Z5cnBjMnF5c3Ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-foreground text-sm uppercase tracking-widest font-medium transition-colors"
                >
                  <Instagram size={18} />
                  Follow on Instagram
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;