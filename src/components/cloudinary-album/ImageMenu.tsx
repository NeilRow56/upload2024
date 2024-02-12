import { Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { AddToAlbumDialog } from './AddToAlbum'
import { SearchResult } from '@/app/gallery/page'
import { useState } from 'react'

export function ImageMenu({ image }: { image: SearchResult }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="absolute right-2 top-2">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" className="h-8 w-8 p-0">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40">
          <DropdownMenuItem asChild>
            <AddToAlbumDialog image={image} onClose={() => setOpen(false)} />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
