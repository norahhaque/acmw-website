"use client"

import Masonry from "@/components/ui/Masonry"
import { useEffect, useState } from "react"
import SectionHeader from "@/components/common/section-header"

export type Photo = {
  img: string
  width: number
  height: number
}

// Loads and displays past event photos in a responsive, animated Masonry grid
export default function Gallery() {
  const [photos, setPhotos] = useState<Photo[]>([])

  // Fetch image metadata from the backend on component load
 useEffect(() => {
    const fetchPhotos = async () => {
      const res = await fetch("/api/photos")
      const data = await res.json()
      setPhotos(data)
    }
    fetchPhotos()
  }, [])

  // Format photos into Masonry's expected format
  const items = photos.map((photo, index) => ({
    id: String(index + 1),
    img: photo.img,
    width: photo.width,
    height: photo.height,
  }))

  return (
    <div className="my-10 mx-15">
      <SectionHeader sectionName="Past Events" position="center" />
      <p className="text-gray-dark text-heading text-sm mt-3 mb-10 max-w-4xl">
        From interactive workshops and inspiring guest speakers to fun socials and panels, here&#39;s a glimpse into the vibrant community we&#39;ve built.
      </p>

      {/* Animated Masonry layout — images fade and stagger in as they load */}
      <Masonry
        items={items}
        ease="power3.out"
        duration={0.2}
        stagger={0.08}
        scaleOnHover={true}
        hoverScale={0.95}
      />
    </div>
  )
}
