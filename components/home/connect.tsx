"use client"

import React from "react"
import SectionHeader from "../common/section-header"
import Stepper, { Step } from "../ui/Stepper"
import { FaInstagram, FaDiscord } from "react-icons/fa"


type EngageCardProps = {
    title: string
    description: string
    buttonText?: string
    href?: string
    children?: React.ReactNode
}

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

    return (
        <div className="flex justify-center flex-col px-4 max-w-7xl mx-10 sm:mx-25 text-sm">
            <div className="pb-6 justify-center flex flex-col items-center text-center">
                <SectionHeader sectionName="Get Involved." position="center" />
                <p className="text-gray-dark my-4 max-w-4xl sm:max-w-3xl text-sm">
                    Join us at any of our events to make new friends, grow your technical experience, and gain access to job opportunities! Experience with computing isn&#39;t required — our doors are always open to anyone interested!
                </p>
            </div>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                {/* Left: newsletter + ask */}
                <div className="flex flex-col gap-6 h-full">
                    <EngageCard
                        title="Newsletter"
                        description="Stay in the loop with upcoming events, news, and tech tips."
                        buttonText="Sign Up"
                        href="https://umn.us3.list-manage.com/subscribe?u=935834d5c085277674626b571&id=5439a6d3d0"
                    />
                    <EngageCard
                        title="Connect"
                        description="Have questions about ACMW or tech at UMN? Drop them here."
                        buttonText="Contact Form"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSetmRLI-oE5zZ3_OZJMupnu7edQJGH_Ig7VJDJGZXIEUJCBZw/viewform"
                    />
                    <EngageCard
                        title="Socials"
                        description="Catch our latest events, updates, and behind-the-scenes on social media."
                    >
                        <div className="flex justify-center gap-6 mb-4">
                            {socials.map(({ icon, label, href }, idx) => (
                                <a
                                    key={idx}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="text-maroon  hover:text-[#5b0013] transition-colors duration-200"
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </EngageCard>

                </div>

                {/* Right: stepper */}
                <EngageCard
                    title="Join the Board"
                    description="Passionate about tech, diversity, and leadership? Explore how to become a board member."
                >
                    <Stepper
                        initialStep={1}
                        onStepChange={(step) => console.log(step)}
                        onFinalStepCompleted={() => console.log("All steps completed!")}
                        backButtonText="Previous"
                        nextButtonText="Next"
                        stepCircleContainerClassName="!border-gray-300"
                        stepContainerClassName="px-4 pt-4"
                        contentClassName="text-xs"
                        footerClassName="px-4 pb-4"
                    >
                        <Step>
                            <h2 className="text-lg text-maroon font-header">Step 1:</h2>
                            <h2 className="text-sm text-gray mt-1">Attend 3+ meetings in a semester to become an official ACMW member.</h2>
                        </Step>
                        <Step>
                            <h2 className="text-lg text-maroon font-header">Step 2:</h2>
                            <h2 className="text-sm text-gray mt-1">Apply to open positions when they are posted!</h2>
                        </Step>
                    </Stepper>
                </EngageCard>
            </section>
        </div>
    )
}
