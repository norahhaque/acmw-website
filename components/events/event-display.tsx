'use client'

import React from 'react'
import { motion } from 'framer-motion'
import EventCard from './event-card'

// Animation settings
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

export default function EventDisplay() {
  return (
    <motion.div className="mt-20 mx-auto px-10 md:px-22 sm:px-15 flex flex-col" initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ staggerChildren: 0.2 }}>
      {/* Cards Grid */}
      <motion.section className="py-40" variants={fadeUp}>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center" variants={fadeUp}>
          <motion.div variants={fadeUp}>
            <EventCard
              imageSrc="/images/events/event-images/2025-wits-5.png"
              title="Women in Tech Symposium"
              description="Our annual, most-loved event brings in faculty and industry professionals from leading companies."
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <EventCard
              imageSrc="/images/events/event-images/prereg-mingle-5.jpg"
              title="Technical Workshops"
              description="We regularly host Leetcode sessions and career panels to help members grow their technical skills."
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <EventCard
              imageSrc="/images/events/event-images/2025-study-and-donuts.jpg"
              title="Socials"
              description="From cozy study-ins to movie nights, we help you find your people and feel at home in tech."
            />
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.div>
  )
}
