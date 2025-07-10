"use client"

import BlurText from "../ui/BlurText"

type SectionHeaderProps = {
  sectionName: string
  position?: "left" | "right" | "center"
}

export default function SectionHeader({ sectionName, position = "left" }: SectionHeaderProps) {
  let alignment = ""

  if (position === "center") {
    alignment = "text-center mx-auto"
  } else if (position === "right") {
    alignment = "text-left lg:text-right pl-6 lg:pl-0 lg:ml-auto lg:mr-20"
  } else {
    alignment = "text-left pl-6 lg:pl-0 lg:ml-20"
  }

  return (
    <BlurText
      text={sectionName}
      className={`font-heading text-5xl text-maroon ${alignment}`}
    />
  )
}
