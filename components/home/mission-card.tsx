import Image from "next/image"

type MissionCardProps = {
  imageSrc: string
  title: string
  description: string
}

export default function MissionCard({ imageSrc, title, description }: MissionCardProps) {
  return (
    <div className="max-w-sm group">
      {/* Image */}
      <div className="relative w-full aspect-square mb-4 overflow-hidden">
        <Image 
          src={imageSrc} 
          alt={title} 
          fill
          className="object-cover"
        />
      </div>

      {/* Title with underline animation */}
      <h3 className="text-md sm:text-lg text-black relative w-fit">
        {title}
        <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
      </h3>

      {/* Description */}
      <p className="text-gray-dark mt-1 text-sm">{description}</p>
    </div>
  )
}
