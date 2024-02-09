'use client'

import Sidebar from '@/components/cloudinary-album/Sidebar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CldImage, CldUploadButton } from 'next-cloudinary'
import { useState } from 'react'

export default function CloudAlbumPage() {
  const [imageId, setImageId] = useState('')
  return (
    <div>
      <div className="border-b border-t bg-slate-50">
        <div className="container mx-auto flex h-16 items-center px-4">
          PHOTOS APP
          <div className="ml-auto flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      <div className="flex">
        <Sidebar />

        <main className="flex min-h-screen flex-1 flex-col ">
          <CldUploadButton
            className="mx-auto mt-16 w-1/12 rounded-md bg-blue-600 py-1 text-white"
            onUpload={(results: any) => {
              setImageId(results.info.public_id)
            }}
            uploadPreset="lygsc1ol"
          />
          {imageId && (
            <CldImage
              width="460"
              height="300"
              src={imageId}
              sizes="100vw"
              alt="Description of my image"
            />
          )}
        </main>
      </div>
    </div>
  )
}
