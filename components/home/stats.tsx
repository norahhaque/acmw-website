"use client"

import SectionHeader from "../common/section-header"
import CountUp from "@/components/ui/CountUp"

type StatCardProps = {
  value: number
  label: string
}


const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <div className="bg-maroon text-silver aspect-square p-4 flex flex-col justify-center items-center font-heading w-full rounded-xl">
      <div className="flex flex-row">
        <CountUp
          from={0}
          to={value}
          className="text-silver text-5xl font-league-gothic font-extrabold leading-tight"

        />
        <span className="text-silver text-5xl font-league-gothic font-extrabold leading-tight">+</span>
      </div>
      <p className="text-sm mt-1 text-center">{label}</p>
    </div>
  )
}

export default function Stat() {
  return (
    <div className="flex flex-col lg:flex-row-reverse items-start lg:items-center justify-between gap-10 mt-40 lg:ml-12">

      {/* Right: Section header */}
      <div className="w-full lg:w-1/4 text-left lg:text-right">
        <SectionHeader sectionName="Our Impact." position="right" />
        <div className="h-6"></div>
      </div>

      {/* Left: Stat cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full lg:w-3/4 px-10">
        <StatCard value={150} label="Active Members" />
        <StatCard value={6} label="Semester Events" />
        <StatCard value={15} label="Corporate Partners" />
        <StatCard value={10} label="Leadership Roles Open to Members" />

      </div>
    </div>
  )
}
