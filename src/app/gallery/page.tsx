import GalleryGrid from '@/components/cloudinary-album/GalleryGrid'
import Sidebar from '@/components/cloudinary-album/Sidebar'
import UploadButton from '@/components/cloudinary-album/UploadButton'
import cloudinary from 'cloudinary'

export type SearchResult = {
  public_id: string
  tags: string[]
}

export default async function GalleryPage() {
  const results = (await cloudinary.v2.search
    .expression('resource_type:image')
    .sort_by('created_at', 'desc')
    .with_field('tags')
    .max_results(30)
    .execute()) as { resources: SearchResult[] }

  return (
    <section className="flex min-h-screen ">
      <Sidebar />
      <div className="flex w-full flex-col px-12 py-4">
        <div className=" mb-4 flex justify-between">
          <h1 className="text-4xl font-bold">Gallery</h1>
          <UploadButton />
        </div>

        <GalleryGrid images={results.resources} />
      </div>
    </section>
  )
}
