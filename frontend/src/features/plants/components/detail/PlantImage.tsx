import { ImageWithFallback } from '../../../../shared/ui/ImageWithFallback'
import type { PlantImageSet } from '../../types/plant.types'

type PlantImageProps = {
  image: string
  name: string
  gallery?: PlantImageSet
}

const fallbackImage =
  'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80'

const PlantImage = ({ image, name, gallery }: PlantImageProps) => {
  const galleryEntries = gallery
    ? [
        { label: 'Whole Plant', src: gallery.wholePlant },
        { label: 'Leaf', src: gallery.leaf },
        { label: 'Flower', src: gallery.flower },
        { label: 'Root', src: gallery.root },
        ...(gallery.stem ? [{ label: 'Stem', src: gallery.stem }] : []),
      ]
    : []

  return (
    <div className="group overflow-hidden rounded-[32px] border border-white/70 bg-white/70 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.10)] backdrop-blur-xl transition duration-300 hover:shadow-[0_28px_90px_rgba(15,23,42,0.14)]">
      <div className="relative overflow-hidden rounded-[28px]">
        <ImageWithFallback
          src={image}
          fallbackSrc={fallbackImage}
          alt={name}
          className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/15 via-transparent to-white/10" />
      </div>

      {galleryEntries.length > 0 && (
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {galleryEntries.map((entry) => (
            <div key={entry.label} className="overflow-hidden rounded-[22px] bg-white/80 p-2">
              <ImageWithFallback
                src={entry.src}
                fallbackSrc={fallbackImage}
                alt={`${name} ${entry.label}`}
                className="aspect-square w-full rounded-[16px] object-cover"
              />
              <p className="mt-2 text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {entry.label}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default PlantImage
