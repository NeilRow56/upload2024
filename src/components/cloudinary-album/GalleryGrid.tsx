'use client'

import { SearchResult } from '@/app/gallery/page'
import { ImageGrid } from './ImageGrid'
import { CloudinaryImage } from './CloudinaryImage'

export default function GalleryGrid({ images }: { images: SearchResult[] }) {
  return (
    <ImageGrid
      images={images}
      getImage={(imagedata: SearchResult) => {
        return (
          <CloudinaryImage
            key={imagedata.public_id}
            imagedata={imagedata}
            width="400"
            height="300"
            alt="an image of something"
          />
        )
      }}
    />
  )
}
