'use client'

import { Heart } from 'lucide-react'
import { CldImage } from 'next-cloudinary'

import { setAsFavoriteAction } from '@/actions/create-favourite'
import { SearchResult } from '@/app/gallery/page'
import { useTransition } from 'react'
import { FaHeart } from 'react-icons/fa'

export function CloudinaryImage(
  props: any & { imagedata: SearchResult; path: string }
) {
  const [transition, startTransition] = useTransition()
  const { imagedata } = props
  const isFavorited = imagedata.tags.includes('favorite')
  return (
    <div className="relative">
      <CldImage {...props} src={imagedata.public_id} />

      {isFavorited ? (
        <FaHeart
          onClick={() => {
            startTransition(() => {
              setAsFavoriteAction(imagedata.public_id, false, props.path)
            })
          }}
          className="absolute right-2 top-2 cursor-pointer overflow-hidden  text-red-500 hover:text-white"
        />
      ) : (
        <Heart
          onClick={() => {
            startTransition(() => {
              setAsFavoriteAction(imagedata.public_id, true, props.path)
            })
          }}
          className="absolute right-2 top-2 cursor-pointer text-red-600 hover:text-white"
        />
      )}
    </div>
  )
}
