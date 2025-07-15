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
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false)
  const [flipped, setFlipped] = useState(false)

  useEffect(() => {
    const checkWidth = () => {
      setIsMobileOrTablet(window.innerWidth <= 1024)
    }

    checkWidth()
    window.addEventListener("resize", checkWidth)
    return () => window.removeEventListener("resize", checkWidth)
  }, [])

  const handleClick = () => {
    if (isMobileOrTablet) {
      setFlipped(prev => !prev)
    }
  }

  const showBack = flipped || (!isMobileOrTablet && false)

  return (
    <div
      onClick={handleClick}
      className="relative max-w-sm w-full text-center overflow-hidden rounded-2xl cursor-pointer group"
    >
      {/* Front Side: Image */}
      <motion.div
        className={`relative w-full aspect-square transition-opacity duration-300 ${
          showBack ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'
        }`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <Image src={imgSrc} alt={name} fill className="object-cover" />
      </motion.div>

      {/* Back Side: Description + Q&A */}
      <motion.div
        className={`absolute inset-0 bg-white transition-opacity duration-300 px-4 py-6 text-left overflow-y-auto ${
          showBack ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
      >
        <div className="mb-4 space-y-1">
          <p className="text-maroon text-sm">{description}</p>
        </div>

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

      {/* Footer: Name + Role + Hint */}
      <div className={`py-4 bg-white z-10 relative transition-opacity duration-300 ${
        showBack ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'
      }`}>
        <h1 className="text-xl text-header font-light text-black mb-1">
          <span className="relative inline-block">
            {name}
            <span className="absolute left-0 -bottom-0 h-0.5 w-0 bg-maroon transition-all duration-300 group-hover:w-full"></span>
          </span>
        </h1>
        <p className="text-sm text-maroon">{role}</p>

        {/* ap hint only for mobile/tablet */}
        {isMobileOrTablet && !flipped && (
          <p className="text-xs text-gray-400 mt-1 italic">Tap to view more</p>
        )}
      </div>
    </div>
  )
}
