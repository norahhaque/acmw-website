"use client"

import React from 'react'
import { motion } from 'framer-motion'
import BlurText from '../ui/BlurText'

export default function EventsTitle() {
  return (
    <motion.div className="mt-20 mx-auto px-10 md:px-22 sm:px-15 flex flex-col" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}>

      {/* Events Title */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
        <BlurText text="Events." className="text-maroon font-heading text-[5.25rem] sm:text-8xl" animateBy="letters" />
      </motion.div>

      {/* Description */}
      <motion.p className="text-black/75 max-w-prose mt-5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
        From workshops to study sessions to our annual Women in Tech Symposium, we host a variety of events each semester! We also hold weekly officer meetings open to all members interested in getting more involved.
      </motion.p>

    </motion.div>
  )
}
