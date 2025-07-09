"use client"

import React, { useEffect, useState } from "react"
import SectionHeader from "../common/section-header"
import Stack from "../ui/Stack"

const images = [
  { id: 1, img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format" },
  { id: 2, img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format" },
  { id: 3, img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
  { id: 4, img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" }
]

export default function UpcomingEvents() {
  const [cardSize, setCardSize] = useState({ width: 300, height: 300 })

  useEffect(() => {
    const updateCardSize = () => {
      if (window.innerWidth < 900) {
        setCardSize({ width: 200, height: 200 })
      } else if (window.innerWidth < 640) {
        setCardSize({ width: 150, height: 150 })
      }
      else {
        setCardSize({ width: 300, height: 300 })
      }
    }

    updateCardSize()
    window.addEventListener("resize", updateCardSize)
    return () => window.removeEventListener("resize", updateCardSize)
  }, [])

  return (
    <div className="flex sm:flex-row flex-col mt-20 w-full justify-between px-6 md:px-10 items-start gap-6">
      <SectionHeader sectionName="Events." />
      <div className="flex justify-end gap-4 w-full md:w-auto">
        <Stack
          randomRotation={false}
          sensitivity={180}
          sendToBackOnClick={false}
          cardDimensions={cardSize}
          cardsData={images}
        />
        <Stack
          randomRotation={false}
          sensitivity={180}
          sendToBackOnClick={false}
          cardDimensions={cardSize}
          cardsData={images}
        />
      </div>
    </div>
  )
}
