'use client'

import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../common/section-header'
import MissionCard from './mission-card'

// Animation settings
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

export default function Mission() {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ staggerChildren: 0.2 }}>
      
      {/* Heading */}
      <motion.div className="mt-40" variants={fadeUp}>
        <SectionHeader sectionName="Our Mission." />
      </motion.div>

      {/* Cards Grid */}
      <motion.section className="py-16 px-10 md:px-20 sm:px-12 px-10" variants={fadeUp}>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center" variants={fadeUp}>
          <motion.div variants={fadeUp}>
            <MissionCard
              imageSrc="/images/events/event-images/28-wits-19.webp"
              title="Build Community"
              description="Connect with women and non-binary students who share your passion for tech."
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <MissionCard
              imageSrc="/images/events/event-images/28-wits-23.webp"
              title="Grow Your Skills"
              description="Level up through hands-on workshops, career panels, and mentorship."
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <MissionCard
              imageSrc="/images/events/event-images/22-halloween-party-3.webp"
              title="Make It Fun"
              description="From socials to summits - we make tech empowering and exciting."
            />
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.div>
  )
}
