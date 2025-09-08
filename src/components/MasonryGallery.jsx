import { useMemo } from "react"
import Masonry from "@/components/blocks/Components/Masonry/Masonry"
import { Pics } from "@/data/Data"
import { cdnSrc } from "@/lib/cdn"

export default function MasonryGallery() {
  const resolvedPics = useMemo(() => Pics.map(p => ({ ...p, image: cdnSrc(p.image) })), [])
  return <Masonry data={resolvedPics} />
}
