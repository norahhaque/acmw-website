"use client"

import React from 'react'
import BioCard from './bio-card'
import members from '@/data/members'
import { motion } from 'motion/react'

// Renders a responsive grid of animated BioCards for each ACMW member
export default function Bios() {
    return (
        <div className="mx-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {members.map((member, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20, scale: 0.78 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, delay: Math.min(index * 0.15, 0.6), ease: "easeOut" }}>
                    <BioCard {...member} />
                </motion.div>
            ))}
        </div>
    )
}
