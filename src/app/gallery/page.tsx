'use client'

import Sidebar from '@/components/cloudinary-album/Sidebar'
import { Button } from '@/components/ui/button'
import { CldUploadButton } from 'next-cloudinary'

export default function GalleryPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex w-full justify-between px-12 py-4">
        <h2 className="text-4xl font-bold">Gallery Page</h2>

        <Button asChild>
          <div className="flex w-[100px] gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>

            <CldUploadButton
              onUpload={(result: any) => {
                // setImageId(result.info.public_id);
              }}
              uploadPreset="giomsr4s"
            />
          </div>
        </Button>
      </main>
    </div>
  )
}
