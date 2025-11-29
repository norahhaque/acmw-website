"use client"

import Masonry from "@/components/ui/Masonry"
import { useEffect, useState } from "react"
import SectionHeader from "@/components/common/section-header"
import eventsData from "@/data/events"
import type { Event } from "@/data/events"

export type Photo = {
  img: string
  width: number
  height: number
  eventId: number | null
}

type EventGroup = {
  event: Event
  photos: Photo[]
}

// Loads and displays past event photos grouped by event with titles and descriptions
export default function Gallery() {
  const [photos, setPhotos] = useState<Photo[]>([])

  // Fetch image metadata from the backend on component load
  useEffect(() => {
    const fetchPhotos = async () => {
      const res = await fetch("/api/photos")
      const data = await res.json()
      setPhotos(data)
    }
    fetchPhotos()
  }, [])

  // Get all past events from the data
  const allPastEvents = Object.values(eventsData.past).flat()

  // Group photos by event title (so all annual events are grouped together)
  const eventGroups: EventGroup[] = []
  const ungroupedPhotos: Photo[] = []

  // Create a map for quick event lookup
  const eventMap = new Map<number, Event>()
  allPastEvents.forEach(event => eventMap.set(event.id, event))

  // Group photos by their event ID first
  const photosByEventId = new Map<number, Photo[]>()

  photos.forEach(photo => {
    if (photo.eventId !== null && eventMap.has(photo.eventId)) {
      if (!photosByEventId.has(photo.eventId)) {
        photosByEventId.set(photo.eventId, [])
      }
      photosByEventId.get(photo.eventId)!.push(photo)
    } else {
      ungroupedPhotos.push(photo)
    }
  })

  // Group by event title (combine multiple years of same event)
  const photosByTitle = new Map<string, { event: Event; photos: Photo[] }>()

  photosByEventId.forEach((photos, eventId) => {
    const event = eventMap.get(eventId)
    if (event) {
      const title = event.title
      if (photosByTitle.has(title)) {
        // Add photos to existing title group
        photosByTitle.get(title)!.photos.push(...photos)
      } else {
        // Create new title group (use most recent event for metadata)
        photosByTitle.set(title, { event, photos: [...photos] })
      }
    }
  })

  // Convert to array and sort by most recent date
  photosByTitle.forEach(({ event, photos }) => {
    eventGroups.push({ event, photos })
  })

  eventGroups.sort((a, b) =>
    new Date(b.event.date).getTime() - new Date(a.event.date).getTime()
  )

  return (
    <div className="my-10 mx-5 sm:mx-15">
      <SectionHeader sectionName="Past Events" position="center" />
      <p className="text-gray-dark text-heading text-sm mt-3 mb-10 max-w-4xl">
        From interactive workshops and inspiring guest speakers to fun socials and panels, here&#39;s a glimpse into the vibrant community we&#39;ve built.
      </p>

      {/* Divider - Three dots */}
      <div className="flex items-center justify-center gap-3 my-12">
        <div className="w-1.5 h-1.5 rounded-full bg-maroon"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-maroon"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-maroon"></div>
      </div>

      {/* Display events grouped by event - alternating left/right layout */}
      {eventGroups.map(({ event, photos }, index) => {
        const items = photos.map((photo, photoIndex) => ({
          id: `${event.id}-${photoIndex}`,
          img: photo.img,
          width: photo.width,
          height: photo.height,
        }))

        return (
          <div key={event.id} className="mb-16">
            {/* Event Title and Description */}
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-header text-maroon mb-2">{event.title}</h2>
              <p className="text-gray-700">{event.description}</p>
            </div>

            {/* Event Photos in Masonry Layout */}
            <Masonry
              items={items}
              ease="power3.out"
              duration={0.2}
              stagger={0.1}
              scaleOnHover={true}
              hoverScale={0.95}
            />
          </div>
        )
      })}

    </div>
  )
}
