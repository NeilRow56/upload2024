import { CloudinaryImage } from '@/components/cloudinary-album/CloudinaryImage'
import Sidebar from '@/components/cloudinary-album/Sidebar'
import UploadButton from '@/components/cloudinary-album/UploadButton'
import cloudinary from 'cloudinary'

type SearchResult = {
  public_id: string
}

export default async function GalleryPage() {
  const results = (await cloudinary.v2.search
    .expression('resource_type:image ')
    .sort_by('public_id', 'desc')
    .max_results(10)
    .execute()) as { resources: SearchResult[] }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex w-full flex-col px-12 py-4">
        <div className="mb-4 flex justify-between">
          <h2 className="text-4xl font-bold">Gallery Page</h2>

          <UploadButton />
        </div>

        <div className="grid grid-cols-4 gap-4 px-4">
          {results.resources.map((result) => (
            <CloudinaryImage
              key={result.public_id}
              src={result.public_id}
              width="400"
              height="300"
              alt="an image of something"
            />
          ))}
        </div>
      </main>
    </div>
  )
}
