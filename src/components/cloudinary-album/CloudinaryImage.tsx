'use client'

import { Heart } from 'lucide-react'
import { CldImage } from 'next-cloudinary'

import { setAsFavoriteAction } from '@/actions/create-favourite'
import { SearchResult } from '@/app/gallery/page'
import { useTransition } from 'react'

export function CloudinaryImage(
  props: any & { imageData: SearchResult; path: string }
) {
  const [transition, startTransition] = useTransition()
  const { imageData } = props
  const isFavorited = imageData.tags.includes('favorite')
  return (
    <div className="relative">
      <CldImage {...props} src={imageData.public_id} />

      <Heart
        onClick={() => {
          startTransition(() => {
            setAsFavoriteAction(imageData.public_id, props.path)
          })
        }}
        className="absolute right-2 top-2 cursor-pointer hover:text-red-500"
      />
    </div>
  )
}
