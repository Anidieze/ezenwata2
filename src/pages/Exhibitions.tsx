import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import video1 from "@/assets/exhibition-1.jpeg";
import video2 from "@/assets/exhibition-2.jpeg";
// import video3 from "@/assets/exhibition-3.mp4";
// import video4 from "@/assets/exhibition-4.mp4";
import video5 from "@/assets/exhibition-5.jpeg";
import video6 from "@/assets/exhibition-6.jpeg";

const exhibitions = [
  {
    title: "Art Crush",
    venue: "Check me Out",
    location: "Brussels, Belgium",
    date: "2023",
    media: video1,
    type: "image",
  },
  {
    title: "Art Crush",
    venue: "Take A look at My Karma",
    location: "Brussels, Belgium",
    date: "2024",
    media: video2,
    type: "image",
  },
  {
    title: "Art Crush",
    venue: "I no Follow",
    location: "Brussels, Belgium",
    date: "2024",
    // media: video3,
    type: "video",
  },
  {
    title: "Ibobo Festival",
    venue: "......idk the name",
    location: "Enugu, Nigeria",
    date: "2023",
    media: video5,
    type: "image",
  },
  {
    title: "Ibobo Festival",
    venue: "Decolonizing the Mind",
    location: "Enugu, Nigeria",
    date: "2023",
    media: video6,
    type: "image",
  },
];

const ExhibitionCard = ({ exhibition, index }) => {
  const videoRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    if (exhibition.type === "video") videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (exhibition.type === "video" && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      className="border-b border-border group cursor-default"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Media panel — expands on hover */}
      <div
        className="overflow-hidden transition-all duration-700 ease-in-out"
        style={{ maxHeight: hovered ? "680px" : "0px" }}
      >
        {exhibition.type === "video" ? (
          <video
            ref={videoRef}
            src={exhibition.media}
            loop
            muted
            playsInline
            className="w-full object-cover"
            style={{ maxHeight: "480px" }}
          />
        ) : (
          <img
            src={exhibition.media}
            alt={exhibition.title}
            className="w-full object-cover"
            style={{ maxHeight: "680px" }}
          />
        )}
      </div>

      {/* Text row */}
      <div className="py-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-foreground text-2xl md:text-3xl font-light tracking-tight group-hover:text-primary transition-colors duration-300">
            {exhibition.title}
          </h2>
          <p className="text-muted-foreground text-sm font-mono mt-2">
            {exhibition.venue} — {exhibition.location}
          </p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-foreground text-sm font-mono">{exhibition.date}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Exhibitions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-24 px-6 md:px-12">
        <section className="py-24 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-muted-foreground font-mono text-sm tracking-widest uppercase mb-16"
          >
            Exhibitions
          </motion.h1>

          <div className="space-y-0">
            {exhibitions.map((exhibition, i) => (
              <ExhibitionCard key={`${exhibition.title}-${i}`} exhibition={exhibition} index={i} />
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Exhibitions;