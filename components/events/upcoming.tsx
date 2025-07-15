"use client"

import React from 'react'
import ACMWCalendar from './calendar'
import SectionHeader from '../common/section-header'
import Image from 'next/image'
import { FaArrowUpRightFromSquare } from "react-icons/fa6"
import { motion } from "framer-motion"
import Link from 'next/link'
import events from '@/data/events'
import type { Event } from '@/data/events'

export default function Upcoming() {
  const upcoming: Event[] = events.upcoming
  const hasRealEvent = upcoming.length > 0 && upcoming[0].title !== 'No Upcoming Events'

  // Show the first real upcoming event, or fallback placeholder if none
  const eventCard: Event = hasRealEvent
    ? upcoming[0]
    : {
        id: 9999,
        title: '',
        image: '/images/events/posters/delay.jpg',
        date: '',
        time: '',
        location: '',
        description: '',
        rsvpLink: null,
      }

  return (
    <div className="w-full flex flex-col items-center px-4">
      {/* Section Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
        <SectionHeader sectionName="Upcoming." position="center" />
      </motion.div>

      {/* Subtitle */}
      <motion.p className="text-gray-dark my-4 max-w-4xl sm:max-w-3xl text-sm text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.1, duration: 0.5 }}>
        We&apos;d love to see you! No experience necessary — if you&apos;re interested, just RSVP at the link.
      </motion.p>

      <div className="flex flex-col lg:flex-row justify-between items-start w-full max-w-[1100px] gap-8">
        {/* Calendar */}
        <motion.div className="w-full lg:w-1/2 flex justify-center mt-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.2, duration: 0.5 }}>
          <ACMWCalendar />
        </motion.div>

        {/* Event Card or Fallback */}
        <motion.div className="w-full lg:w-1/2 flex justify-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.3, duration: 0.5 }}>
          {eventCard.title ? (
            <div className="flex flex-row items-center shadow-md rounded-xl p-3 mt-1 w-full max-w-xl">
              <Image alt="" src={eventCard.image} width={300} height={300} className="mr-4 lg:mr-2 rounded-lg" />
              <div className="mt-4 lg:mt-0 sm:ml-4">
                <h1 className="font-header text-xl">{eventCard.title}</h1>
                <h3 className="italic text-sm">
                  {new Date(eventCard.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    weekday: "long",
                  })}
                </h3>
                <p className="text-sm italic">{eventCard.time}</p>
                <p className="text-sm italic">{eventCard.location}</p>
                <p className="mt-3 text-prose">{eventCard.description}</p>
                {eventCard.rsvpLink && (
                  <a href={eventCard.rsvpLink} target="_blank" rel="noopener noreferrer" className="text-maroon inline-flex items-center gap-2 mt-4">
                    RSVP Link <FaArrowUpRightFromSquare className="align-middle" />
                  </a>
                )}
              </div>
            </div>
          ) : (
            <Image src={eventCard.image} alt="Check back soon" width={350} height={350} className="rounded-lg mt-2" />
          )}
        </motion.div>
      </div>

      {/* Past Events Section */}
      <div className="mt-9">
        <motion.h2 className="mt-10 font-heading text-maroon text-xl" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.8, duration: 0.5 }}>
          Curious about what we&apos;ve been doing?
        </motion.h2>

        <motion.h2 className="text-black/60 font-heading text-xl" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1.0, duration: 0.5 }}>
          Check out our{' '}
          <Link href="/events/recent" className="underline hover:text-gray-dark">
            past events
          </Link>.
        </motion.h2>
      </div>
    </div>
  )
}
