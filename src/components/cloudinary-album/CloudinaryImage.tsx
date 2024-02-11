'use client'

import { Heart } from 'lucide-react'
import { CldImage, CldImageProps } from 'next-cloudinary'

import { setAsFavoriteAction } from '@/actions/create-favourite'
import { SearchResult } from '@/app/gallery/page'
import { useState, useTransition } from 'react'
import { FaHeart } from 'react-icons/fa'
import { ImageMenu } from './ImageMenu'

export function CloudinaryImage(
  props: {
    imagedata: SearchResult
    onUnheart?: (unheartedResource: SearchResult) => void
  } & Omit<CldImageProps, 'src'>
) {
  const [transition, startTransition] = useTransition()
  const { imagedata, onUnheart } = props
  const [isFavorited, setIsFavorited] = useState(
    imagedata.tags.includes('favorite')
  )
  return (
    <div className="relative">
      <CldImage {...props} src={imagedata.public_id} />

      {isFavorited ? (
        <FaHeart
          onClick={() => {
            onUnheart?.(imagedata)
            setIsFavorited(false)
            startTransition(() => {
              setAsFavoriteAction(imagedata.public_id, false)
            })
          }}
          className="absolute left-2 top-2 cursor-pointer overflow-hidden  text-red-500 hover:text-white"
        />
      ) : (
        <Heart
          onClick={() => {
            setIsFavorited(true)
            startTransition(() => {
              setAsFavoriteAction(imagedata.public_id, true)
            })
          }}
          className="absolute left-2 top-2 cursor-pointer text-red-600 hover:text-white"
        />
      )}
      <ImageMenu />
    </div>
  )
}
