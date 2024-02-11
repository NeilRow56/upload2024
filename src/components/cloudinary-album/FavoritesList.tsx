'use client'

import { SearchResult } from '@/app/gallery/page'
import { useEffect, useState } from 'react'
import { CloudinaryImage } from './CloudinaryImage'
import { ImageGrid } from './ImageGrid'

export default function FavoritesList({
  initialResources,
}: {
  initialResources: SearchResult[]
}) {
  const [resources, setResources] = useState(initialResources)

  useEffect(() => {
    setResources(initialResources)
  }, [initialResources])

  return (
    <ImageGrid
      images={resources}
      getImage={(imagedata: SearchResult) => {
        return (
          <CloudinaryImage
            key={imagedata.public_id}
            imagedata={imagedata}
            width="400"
            height="300"
            alt="an image of something"
            onUnheart={(unheartedResource) => {
              setResources((currentResources) =>
                currentResources.filter(
                  (resource) =>
                    resource.public_id !== unheartedResource.public_id
                )
              )
            }}
          />
        )
      }}
    />
  )
}
