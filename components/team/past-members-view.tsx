"use client"

import React, { useState } from 'react'
import BioCard from './bio-card'
import membersData from '@/data/members'
import { motion } from 'motion/react'
import SectionHeader from '@/components/common/section-header'

// Displays past board members with year selector
export default function PastMembersView() {
  // Get all past years and sort in descending order (most recent first)
  const pastYears = Object.keys(membersData.past).sort().reverse()

  // Set the most recent year as default
  const [selectedYear, setSelectedYear] = useState(pastYears[0] || '')

  // If no past members exist yet, show a placeholder
  if (pastYears.length === 0) {
    return (
      <div className="mx-15 my-20">
        <SectionHeader sectionName="Previous Boards" position="center" />
        <p className="text-center text-gray-600 mt-8">
          Past board members will be displayed here once added!
        </p>
      </div>
    )
  }

  const selectedMembers = membersData.past[selectedYear] || []

  return (
    <div className="mx-15 my-20">
      <SectionHeader sectionName="Previous Boards" position="center" />

      {/* Year Selector Dropdown */}
      <div className="flex justify-center mb-12 mt-8">
        <select
          id="year-select"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="px-6 py-3 border-2 border-maroon rounded-lg font-heading text-maroon text-lg cursor-pointer hover:bg-maroon hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-maroon focus:ring-offset-2"
        >
          {pastYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {selectedMembers.map((member, index) => (
          <motion.div
            key={`${selectedYear}-${index}`}
            initial={{ opacity: 0, y: 20, scale: 0.78 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: Math.min(index * 0.15, 0.6),
              ease: "easeOut"
            }}
          >
            <BioCard {...member} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
