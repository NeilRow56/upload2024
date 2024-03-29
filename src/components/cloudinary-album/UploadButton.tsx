'use client'

import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'
import { CldUploadButton } from 'next-cloudinary'

type Props = {}

const UploadButton = (props: Props) => {
  const router = useRouter()
  return (
    <Button asChild>
      <CldUploadButton
        onUpload={(result: any) => {
          setTimeout(() => {
            router.refresh()
          }, 1000)
        }}
        uploadPreset="lygsc1ol"
      >
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
          Upload
        </div>
      </CldUploadButton>
    </Button>
  )
}

export default UploadButton
