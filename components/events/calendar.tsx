'use client'

import { useState } from 'react'
import Calendar, { CalendarProps } from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './calendar.css'

import eventsData from '@/data/events'
import type { Event } from '@/data/events'

export default function ACMWCalendar() {
  const [date, setDate] = useState<Date | null>(new Date())

  // Filter out invalid placeholders and events without a date
  const validEvents: Event[] = eventsData.upcoming.filter(
    (event) => event.title !== 'No Upcoming Events' && event.date
  )

  // Create a map of 'YYYY-MM-DD' -> 'Event Title' for lookup
  const eventsMap: Record<string, string> = {}
  validEvents.forEach((event) => {
    if (event.date) {
      eventsMap[event.date] = event.title
    }
  })

  // Handle user selecting a date on the calendar
  const handleDateChange: CalendarProps['onChange'] = (value) => {
    if (value instanceof Date) setDate(value)
  }

  const selectedKey = (date ?? new Date()).toISOString().split('T')[0]
  const eventMsg = eventsMap[selectedKey]

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md w-fit mx-auto">
      {/* Calendar UI with dots under event dates */}
      <Calendar
        onChange={handleDateChange}
        value={date}
        tileContent={({ date }) => {
          const key = date.toISOString().split('T')[0]
          return eventsMap[key] ? (
            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-maroon mx-auto" />
          ) : null
        }}
      />

      {/* Show event title (or fallback message) for selected date */}
      <div className="mt-4 text-center text-sm">
        {eventMsg ? (
          <span className="text-maroon font-medium">{eventMsg}</span>
        ) : (
          <span className="text-maroon">No event this day.</span>
        )}
      </div>
    </div>
  )
}
