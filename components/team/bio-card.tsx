"use client"

import React from 'react'
import { motion } from "motion/react"
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

// Profile card with hover animation that reveals academic background and Q&A
export default function BioCard({ name, role, imgSrc, about, description }: BioCardProps) {
  return (
    <div className="relative max-w-sm w-full text-center group overflow-hidden rounded-2xl">

      {/* Profile photo (disappears on hover) */}
      <motion.div className="relative w-full aspect-square transition-opacity duration-300 group-hover:opacity-0" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.6 }}>
        <Image src={imgSrc} alt={name} fill className="object-cover" />
      </motion.div>

      {/* Description and Q&A (shows on hover) */}
      <motion.div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-6 text-left">
        {/* Description */}
        <div className="mb-4 space-y-1">
          <p className="text-maroon text-sm">{description}</p>
        </div>

        {/* Q&A */}
        <div className="space-y-3">
          {about.map(({ q, a }, index) => (
            q && a ? (
              <div key={index}>
                <p className="text-header font-light text-sm text-maroon">{q}</p>
                <p className="text-sm text-gray-700">{a}</p>
              </div>
            ) : null
          ))}
        </div>
      </motion.div>

      {/* Name and role  (disappears on hover) */}
      <div className="py-4 bg-white">
        <h1 className="text-xl text-header font-light text-black mb-1 group-hover:opacity-0">
          <span className="relative inline-block">
            {name}
            <span className="absolute left-0 -bottom-0 h-0.5 w-0 bg-maroon transition-all duration-300 group-hover:w-full"></span>
          </span>
        </h1>
        <p className="text-sm text-maroon">{role}</p>
      </div>
    </div>
  )
}
