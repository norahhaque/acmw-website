"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import BlurText from '../ui/BlurText'

export default function Hero() {
  return (
    <motion.div className="mt-20 mx-auto px-10 md:px-22 sm:px-15 flex flex-col" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}>

      {/* ACMW Title */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
        <BlurText text="ACM-W." className="text-maroon font-heading text-[5.25rem] sm:text-8xl whitespace-nowrap overflow-hidden text-ellipsis" animateBy="letters" />
      </motion.div>

      {/* Description */}
      <motion.p className="text-black/75 max-w-prose mt-5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
        ACM-W is the University of Minnesota&#39;s chapter of the Association for Computing Machinery-Women, supporting women and non-binary students in tech through community, mentorship, and career-building events.
      </motion.p>


      {/* ACMW Image */}
      <motion.div className="mt-10 lg:self-end pr-5" initial={{ opacity: 0, scale: 0.80 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 0.5 }}>
        <Image src="/images/team/board/2025-board-standing.jpg" height={800} width={800} alt="2025 ACM-W Group Picture" className='rounded-2xl'/>
      </motion.div>


      {/* Affiliation Statement */}
      <motion.h2 className="mt-10 font-heading text-maroon text-xl" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.5 }}>
        Backed by the national ACM-W Chapter.
      </motion.h2>

      {/* Affiliation Link */}
      <motion.h2 className="text-black/60 font-heading text-xl" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0, duration: 0.5 }}>
        Learn more{' '}
        <Link href="https://women.acm.org/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-dark">
          here
        </Link>.

      </motion.h2>
    </motion.div>
  )
}
