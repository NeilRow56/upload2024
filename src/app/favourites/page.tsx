import cloudinary from 'cloudinary'

import { SearchResult } from '../gallery/page'
import { ForceRefresh } from '@/components/ForceRefresh'
import Sidebar from '@/components/cloudinary-album/Sidebar'
import FavoritesList from '@/components/cloudinary-album/FavoritesList'

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

        <FavoritesList initialResources={results.resources} />
      </div>
    </section>
  )
}
