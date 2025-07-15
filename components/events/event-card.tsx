import Image from "next/image"
import { motion } from "motion/react";

type EventCardProps = {
  imageSrc: string
  title: string
  description: string
}


export default function EventCard({ imageSrc, title, description }: EventCardProps) {
  return (
    <div className="max-w-sm group text-center">
      {/* Image */}
      <motion.div className="relative w-full aspect-square mb-4 overflow-hidden" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.7 }}>
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover rounded-2xl"
        />
      </motion.div>

      {/* Title with animated underline */}
      <h3 className="text-md sm:text-lg text-black">
        <span className="relative inline-block">
          {title}
          <span className="absolute left-0 -bottom-0 h-0.5 w-0 bg-maroon transition-all duration-300 group-hover:w-full"></span>
        </span>
      </h3>

      {/* Description */}
      <p className="text-gray-dark mt-1 text-sm">{description}</p>
    </div>
  );
}