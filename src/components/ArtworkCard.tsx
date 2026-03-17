import { useState } from "react";
import { motion } from "framer-motion";

interface ArtworkCardProps {
  title: string;
  year: string;
  medium: string;
  image: string;
  index: number;
}

const ArtworkCard = ({ title, year, medium, image, index }: ArtworkCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-sm">
        <motion.img
          src={image}
          alt={title}
          className="w-full aspect-square object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          loading="lazy"
        />
        <motion.div
          className="absolute inset-0 bg-background/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="text-foreground font-medium text-lg tracking-tight lowercase">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm font-mono tracking-wide">
          {year} · {medium}
        </p>
      </div>
    </motion.div>
  );
};

export default ArtworkCard;
