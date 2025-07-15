import fs from 'fs/promises'
import path from 'path'
import sharp from 'sharp'

export type Photo = {
    img: string
    width: number
    height: number
}

// Reads event image files, extracts their dimensions, and returns metadata for each image
export async function getEventPhotos(): Promise<Photo[]> {
    // Absolute path to the event images folder in /public
    const dir = path.join(process.cwd(), 'public/images/events/event-images')
    const filenames = await fs.readdir(dir)

    // Only process image files with these extensions
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp']

    // Filter and process valid image files to extract size metadata
    const photos = await Promise.all(
        filenames
            .filter((filename) =>
                allowedExtensions.includes(path.extname(filename).toLowerCase())
            )
            .map(async (filename) => {
                const filePath = path.join(dir, filename)
                const metadata = await sharp(filePath).metadata()

                return {
                    img: `/images/events/event-images/${filename}`, // public-facing path
                    width: metadata.width,
                    height: metadata.height
                }
            })
    )

    return photos
}
