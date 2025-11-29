'use client';

import React from 'react';
import SectionHeader from '../common/section-header';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Events() {
  const recentImage = '/images/homepage/recent.jpg';
  const upcomingImage = '/images/homepage/upcoming.jpg';
  return (
    <div className="flex sm:flex-row flex-col mt-20 w-full justify-between lg:pr-20 md:pr-12 sm:pr-10 pr-8 items-start gap-6 mt-50 mb-30">
      <div className="flex flex-col">
        <div className="md:h-30 h-0"></div>
        <SectionHeader sectionName="Events." />
      </div>
      <div className="flex justify-end gap-8 w-full md:w-auto">
        {/* Upcoming Events - links to /events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/events" className="block group">
            <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
              <Image
                src={upcomingImage}
                alt="Upcoming Events"
                width={300}
                height={300}
                className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          </Link>
        </motion.div>

        {/* Recent Events - links to /events/recent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link href="/events/recent" className="block group">
            <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
              <Image
                src={recentImage}
                alt="Recent Events"
                width={300}
                height={300}
                className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
