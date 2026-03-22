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
    <div className="group overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-4 shadow-md shadow-slate-950/5 backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-950/10">
      <div className="relative overflow-hidden rounded-3xl">
        <ImageWithFallback
          src={image}
          fallbackSrc={fallbackImage}
          alt={name}
          className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/15 via-transparent to-white/10" />
      </div>

      {galleryEntries.length > 0 && (
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {galleryEntries.map((entry) => (
            <div
              key={entry.label}
              className="overflow-hidden rounded-2xl border border-slate-100 bg-white/90 p-2 shadow-sm transition duration-200 hover:shadow-md"
            >
              <ImageWithFallback
                src={entry.src}
                fallbackSrc={fallbackImage}
                alt={`${name} ${entry.label}`}
                className="aspect-square w-full rounded-xl object-cover"
              />
              <p className="mt-2 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
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
