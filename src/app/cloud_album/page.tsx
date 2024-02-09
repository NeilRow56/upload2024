'use client'

import {
  CldImage,
  CldUploadButton,
  CldUploadWidgetResults,
} from 'next-cloudinary'
import { useState } from 'react'

export default function CloudAlbumPage() {
  const [imageId, setImageId] = useState('')
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <CldUploadButton
        onUpload={(results: any) => {
          console.log(results.info.public_id)
        }}
        uploadPreset="lygsc1ol"
      />
      <CldImage
        width="960"
        height="600"
        src="i3mz7ymorevrt4iabny3"
        sizes="100vw"
        alt="Description of my image"
      />
    </main>
  )
}
