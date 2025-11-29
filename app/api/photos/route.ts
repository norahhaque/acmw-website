// GET /api/event-photos - returns event photo metadata as JSON


import { NextResponse } from 'next/server'
import { getEventPhotos } from '@/lib/getPhotos'

export async function GET() {
  const photos = await getEventPhotos()
  return NextResponse.json(photos)
}
