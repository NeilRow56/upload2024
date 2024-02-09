'use client'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { CldImage, CldUploadWidget, CldUploadWidgetInfo } from 'next-cloudinary'
import { useState } from 'react'

// interface ImageUrlProps {
//   url: string;
// }

export default function CloudinaryPage() {
  const [imageUrl, setImageUrl] = useState<string>()

  function handleImageChange() {
    setImageUrl('')
  }

  return (
    <div className="">
      <section className="mx-auto my-8 w-full max-w-4xl rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800 sm:p-6 md:p-8">
        <div className="flex flex-col">
          <h2 className="mb-2 text-xl font-bold">Cloudinary Image</h2>
          {imageUrl && (
            <button
              onClick={handleImageChange}
              className="ml-auto w-1/4 rounded-lg bg-slate-800 px-4 py-2 text-white"
            >
              Change
            </button>
          )}
          <div className="mx-auto">
            {imageUrl ? (
              <CldImage
                width="300"
                height="200"
                src={imageUrl}
                sizes="100vw"
                alt="Description of my image"
              />
            ) : (
              <CldUploadWidget
                uploadPreset="mqnxfdkw"
                onSuccess={(result: any, { widget }) => {
                  setImageUrl(result?.info?.url)
                  widget.close()
                }}
              >
                {({ open }) => {
                  return (
                    <button onClick={() => open()}>
                      <div className="flex w-full items-center justify-center">
                        <div className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-6 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                          <div className="flex flex-col items-center justify-center pb-6 pt-5">
                            <svg
                              className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 16"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                              />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                              <span className="font-semibold">
                                Click to upload
                              </span>{' '}
                              or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              SVG, PNG, JPG or GIF (MAX. 800x400px)
                            </p>
                          </div>
                        </div>
                      </div>
                    </button>
                  )
                }}
              </CldUploadWidget>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
