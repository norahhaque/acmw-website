"use client"

import React from "react"
import SectionHeader from "../common/section-header"
import Stepper, { Step } from "../ui/Stepper"
import { FaInstagram, FaDiscord } from "react-icons/fa"
import { motion, Variants } from "framer-motion"

type EngageCardProps = {
    title: string
    description: string
    buttonText?: string
    href?: string
    children?: React.ReactNode
}

// Generic card used throughout the "Get Involved" section
function EngageCard({ title, description, buttonText, href, children }: EngageCardProps) {
    return (
        <div className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between hover:shadow-lg transition-shadow h-full text-sm">
            <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-header text-maroon mb-1">{title}</h3>
                <p className="text-gray-600 leading-snug">{description}</p>
                {children && <div className="mt-4">{children}</div>}
            </div>

            {href && buttonText && (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-fit text-sm font-medium px-3 py-1 rounded-full bg-maroon text-white hover:bg-[#5b0013] transition-colors"
                >
                    {buttonText}
                </a>
            )}
        </div>
    )
}

export default function GetInvolved() {
    // List of social links to be rendered as icons
    const socials = [
        {
            icon: <FaInstagram size={24} />,
            label: "Instagram",
            href: "https://www.instagram.com/acmwumn/",
        },
        {
            icon: <FaDiscord size={24} />,
            label: "Discord",
            href: "http://z.umn.edu/acmwdiscord",
        },
    ]

    // Framer Motion animation variants for card fade-in
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.15,
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1.0] 
            }
        })
    }

    return (
        <div className="flex justify-center flex-col px-4 max-w-7xl mx-10 sm:mx-25 text-sm">
            <div className="pb-6 justify-center flex flex-col items-center text-center">
                <SectionHeader sectionName="Get Involved." position="center" />
            </div>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                {/* Left column: newsletter, question form, and social links */}
                <div className="flex flex-col gap-6 h-full">
                    {[
                        {
                            title: "Newsletter",
                            description: "Stay in the loop with upcoming events, news, and tech tips.",
                            buttonText: "Sign Up",
                            href: "https://umn.us3.list-manage.com/subscribe?u=935834d5c085277674626b571&id=5439a6d3d0"
                        },
                        {
                            title: "Connect",
                            description: "Have questions about ACMW or tech at UMN? Drop them here.",
                            buttonText: "Contact Form",
                            href: "https://docs.google.com/forms/d/e/1FAIpQLSetmRLI-oE5zZ3_OZJMupnu7edQJGH_Ig7VJDJGZXIEUJCBZw/viewform"
                        },
                        {
                            title: "Socials",
                            description: "Catch our latest events, updates, and behind-the-scenes on social media.",
                            children: (
                                <div className="flex justify-center gap-6 mb-4">
                                    {socials.map(({ icon, label, href }, idx) => (
                                        <a key={idx} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-maroon hover:text-[#5b0013] transition-colors duration-200">
                                            {icon}
                                        </a>
                                    ))}
                                </div>
                            )
                        }
                    ].map((card, i) => (
                        <motion.div key={i} custom={i} initial="hidden" whileInView="visible" variants={cardVariants}>
                            <EngageCard {...card} />
                        </motion.div>
                    ))}
                </div>

                {/* Right column: Stepper for explaining how to join the board */}
                <motion.div custom={3} initial="hidden" whileInView="visible"variants={cardVariants}>
                    <EngageCard
                        title="Join the Board"
                        description="Passionate about tech, diversity, and leadership? Explore how to become a board member."
                    >
                        <Stepper initialStep={1} stepCircleContainerClassName="!border-gray-300" stepContainerClassName="px-4 pt-4" footerClassName="px-4 pb-4">
                            <Step>
                                <h2 className="text-lg text-maroon font-header">Step 1:</h2>
                                <h2 className="text-sm text-gray mt-1">
                                    Attend 3+ meetings in a semester to become an official ACMW member.
                                </h2>
                            </Step>
                            <Step>
                                <h2 className="text-lg text-maroon font-header">Step 2:</h2>
                                <h2 className="text-sm text-gray mt-1">
                                    Apply to open positions when they are posted!
                                </h2>
                            </Step>
                        </Stepper>
                    </EngageCard>
                </motion.div>
            </section>
        </div>
    )
}
