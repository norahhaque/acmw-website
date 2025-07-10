"use client"

import React, { useEffect, useState } from "react"
import SectionHeader from "../common/section-header"
import Stack from "../ui/Stack"

const recent = [
{ id: 1, img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format" },
{ id: 2, img: "/images/homepage/recent.jpg" },
]

const upcoming = [
  { id: 1, img: "/images/homepage/delay.jpg" },
  { id: 2, img: "/images/homepage/upcoming.jpg" },
]

export default function UpcomingEvents() {
  const [cardSize, setCardSize] = useState({ width: 300, height: 300 })

  useEffect(() => {
    const updateCardSize = () => {
        if (window.innerWidth < 640) {
            setCardSize({ width: 150, height: 150 })
        } else if (window.innerWidth < 900) {
            setCardSize({ width: 200, height: 200 })
        } else {
            setCardSize({ width: 300, height: 300 })
        }
    }

    updateCardSize()
    window.addEventListener("resize", updateCardSize)
    return () => window.removeEventListener("resize", updateCardSize)
  }, [])

    return (
        <div className="flex sm:flex-row flex-col mt-20 w-full justify-between lg:pr-20 md:pr-12 sm:pr-10 pr-8 items-start gap-6 mt-50 mb-30">
            <div className="flex flex-col">
                <div className="md:h-30 h-0"></div>
                <SectionHeader sectionName="Events." />
            </div>
            <div className="flex justify-end gap-4 w-full md:w-auto">
                <Stack
          randomRotation={false}
          sensitivity={180}
          sendToBackOnClick={false}
          cardDimensions={cardSize}
          cardsData={recent}
        />
        <Stack
          randomRotation={false}
          sensitivity={180}
          sendToBackOnClick={false}
          cardDimensions={cardSize}
          cardsData={upcoming}
        />
      </div>
    </div>
  )
}
