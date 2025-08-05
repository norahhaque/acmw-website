'use client';

import React, { useEffect, useState } from 'react';
import SectionHeader from '../common/section-header';
import Stack from '../ui/Stack';
import eventsData from '@/data/events';
import type { Event } from '@/data/events';

export default function Events() {
  // Set initial card size and dynamically update based on screen width
  const [cardSize, setCardSize] = useState({ width: 300, height: 300 });

  useEffect(() => {
    const updateCardSize = () => {
       if (window.innerWidth > 2000) {
        setCardSize({ width: 420, height: 420 }); // Small screens
      } else if (window.innerWidth < 500) {
        setCardSize({ width: 150, height: 150 }); // Small screens
      } else if (window.innerWidth < 900) {
        setCardSize({ width: 200, height: 200 }); // Medium screens
      } else {
        setCardSize({ width: 300, height: 300 }); // Large screens
      }
    };

    updateCardSize(); // Set size on mount
    window.addEventListener('resize', updateCardSize); // Adjust on window resize
    return () => window.removeEventListener('resize', updateCardSize); // Cleanup
  }, []);

  // Sort upcoming events by date ascending to find the soonest one
  const sortedUpcoming = [...eventsData.upcoming].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  // Check for presence of real upcoming events
  const hasRealEvents =
    sortedUpcoming.length > 0 && sortedUpcoming[0].title !== 'No Upcoming Events';

  // Only include the next upcoming event (or fallback image), plus a decorative card
  const upcomingCards = [
    ...(hasRealEvents
      ? [sortedUpcoming[0]]  // just one event, the soonest
      : [{ id: 0, image: '/images/events/posters/delay.jpg' } as Event]
    ).map((event) => ({
      id: event.id,
      img: event.image,
    })),
    { id: 9999, img: '/images/homepage/upcoming.jpg' }, // decorative card
  ];


  // Flatten all past events and extract the 3 most recent for display
  const pastEvents = Object.values(eventsData.past)
    .flat()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const recentCards = [
    ...pastEvents.slice(0, 3).reverse().map((event) => ({
      id: event.id,
      img: event.image,
    })),
    { id: 9998, img: '/images/homepage/recent.jpg' },  // decorative card on the top of the stack.
  ];


  // Render the Events section with two stacks: recent and upcoming
  return (
    <div className="flex sm:flex-row flex-col mt-20 w-full justify-between lg:pr-20 md:pr-12 sm:pr-10 pr-8 items-start gap-6 mt-50 mb-30">
      <div className="flex flex-col">
        <div className="md:h-30 h-0"></div>
        <SectionHeader sectionName="Events." />
      </div>
      <div className="flex justify-end gap-4 w-full md:w-auto">
        <Stack
          randomRotation={false}
          sensitivity={180}
          sendToBackOnClick={false}
          cardDimensions={cardSize}
          cardsData={recentCards}
        />
        <Stack
          randomRotation={false}
          sensitivity={180}
          sendToBackOnClick={false}
          cardDimensions={cardSize}
          cardsData={upcomingCards}
        />
      </div>
    </div>
  );
}
