import cloudinary from 'cloudinary'

import { SearchResult } from '../gallery/page'
import { ForceRefresh } from '@/components/ForceRefresh'
import { CloudinaryImage } from '@/components/cloudinary-album/CloudinaryImage'
import Sidebar from '@/components/cloudinary-album/Sidebar'

export default async function FavoritesPage() {
  const results = (await cloudinary.v2.search
    .expression('resource_type:image AND tags=favorite')
    .sort_by('created_at', 'desc')
    .with_field('tags')
    .max_results(30)
    .execute()) as { resources: SearchResult[] }

  return (
    <section className="flex min-h-screen">
      <ForceRefresh />
      <Sidebar />
      <div className="flex flex-col gap-8 px-12 py-4">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Favorite Images</h1>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {results.resources.map((result) => (
            <CloudinaryImage
              path="/favorites"
              key={result.public_id}
              imagedata={result}
              width="400"
              height="300"
              alt="an image of something"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

{
}
