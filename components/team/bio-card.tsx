"use client" 

import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'

type BioCardProps = {
  name: string
  role: string | null
  major: string | null
  minor: string | null
  year: string | null
  gradYear: string | null
  imgSrc: string
  about: {
    q: string | null
    a: string | null
  }[]
  description: string | null
}

export default function BioCard({ name, role, imgSrc, about, description }: BioCardProps) {
  // Track whether the screen size is 1024px or less (tablet/mobile)
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false)

  // Track whether the card has been flipped (used only on mobile/tablet)
  const [flipped, setFlipped] = useState(false)

  // On mount, and whenever the window resizes, update the screen type
  useEffect(() => {
    const checkWidth = () => {
      setIsMobileOrTablet(window.innerWidth <= 1024)
    }

    checkWidth() // Initial check on load
    window.addEventListener("resize", checkWidth) // Watch for screen resizes
    return () => window.removeEventListener("resize", checkWidth) // Clean up listener
  }, [])

  // Flip the card only if on a mobile or tablet device
  const handleClick = () => {
    if (isMobileOrTablet) {
      setFlipped(prev => !prev)
    }
  }

  // Determine whether the back side of the card should be visible
  const showBack = flipped || (!isMobileOrTablet && false)

  return (
    <div
      onClick={handleClick} // Tap-to-flip on mobile/tablet
      className="relative max-w-sm w-full text-center overflow-hidden rounded-2xl cursor-pointer group"
    >
      {/* Front: Profile Image */}
      <motion.div
        className={`relative w-full aspect-square transition-opacity duration-300 ${
          showBack ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'
        }`}
        initial={{ opacity: 0, scale: 0.8 }} // On load: slightly shrunk and transparent
        animate={{ opacity: 1, scale: 1 }}   // Grows and fades in
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <Image src={imgSrc} alt={name} fill className="object-cover" />
      </motion.div>

      {/* Back: Description & Q/A */}
      <motion.div
        className={`absolute inset-0 bg-white transition-opacity duration-300 px-4 py-6 text-left ${
          showBack ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
      >
        {/* Short bio/description */}
        <div className="mb-4 space-y-1">
          <p className="text-maroon text-sm">{description}</p>
        </div>

        {/* Loop through each Q&A pair */}
        <div className="space-y-3">
          {about.map(({ q, a }, index) =>
            q && a ? (
              <div key={index}>
                <p className="text-header font-light text-sm text-maroon">{q}</p>
                <p className="text-sm text-gray-700">{a}</p>
              </div>
            ) : null
          )}
        </div>
      </motion.div>

      {/* Front: Name, Role, Hint */}
      <div className={`py-4 bg-white z-10 relative transition-opacity duration-300 ${
        showBack ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'
      }`}>
        {/* Name with animated underline on hover */}
        <h1 className="text-xl text-header font-light text-black mb-1">
          <span className="relative inline-block">
            {name}
            <span className="absolute left-0 -bottom-0 h-0.5 w-0 bg-maroon transition-all duration-300 group-hover:w-full"></span>
          </span>
        </h1>

        {/* Role or title */}
        <p className="text-sm text-maroon">{role}</p>

        {/* Mobile-only prompt to indicate tap interaction */}
        {isMobileOrTablet && !flipped && (
          <p className="text-xs text-gray-400 mt-1 italic">Tap to view more</p>
        )}
      </div>
    </div>
  )
}
