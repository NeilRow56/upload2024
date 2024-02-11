'use server'
import cloudinary from 'cloudinary'
import { revalidatePath } from 'next/cache'

export async function setAsFavoriteAction(
  publicId: string,

  path: string
) {
  await cloudinary.v2.uploader.add_tag('favorite', [publicId])
  revalidatePath('/gallery')
}
