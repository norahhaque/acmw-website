"use client"
import BlurText from "../ui/BlurText"

type SectionHeaderProps = {
  sectionName: string
  position?: "left" | "right"
}

export default function SectionHeader({ sectionName, position = "left" }: SectionHeaderProps) {
  const alignment =
    position === "right"
      ? "text-left lg:text-right pl-6 lg:pl-0 lg:ml-auto lg:mr-20"
      : "text-left pl-6 lg:pl-0 lg:ml-20"

  return (
    <BlurText
      text={sectionName}
      className={`font-heading text-5xl text-maroon ${alignment}`}
    />
  )
}
