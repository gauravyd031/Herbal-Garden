import type { LucideIcon } from 'lucide-react'

export type PlantPart = 'fullPlant' | 'root' | 'leaf' | 'flower' | 'stem'
export type PlantPartLabel = { key: PlantPart; label: string }

export type SimilarPlant = {
  name: string
  difference: string
}

export type DoshaEffectKey = 'vata' | 'kapha' | 'pitta'

export type OverviewDoshaEffect = {
  dosha: string
  effect: string
  description: string
}

export type DravyagunaEntry = {
  term: string
  value: string
  icon: LucideIcon
  detail: string
}

export type ClassicalReference = {
  text: string
  reference: string
  context: string
}

export type Formulation = {
  name: string
  type: string
  note: string
}

export type EvidenceEntry = {
  type: string
  finding: string
  level: 'High' | 'Moderate' | 'Low'
  reference: string
}

export type HerbDetail = {
  sanskrit: string
  botanical: string
  english: string
  summary: string
  identificationFeatures: string[]
  similarPlants: SimilarPlant[]
  plantImages: Record<PlantPart, string>
  snapshot: {
    rasa: string
    guna: string
    virya: string
    vipaka: string
    doshaEffect: Record<DoshaEffectKey, 'pacifies' | 'aggravates'>
    prabhava: string
  }
  overview: {
    description: string
    indications: string[]
    doshaEffects: OverviewDoshaEffect[]
  }
  dravyaguna: DravyagunaEntry[]
  classical: ClassicalReference[]
  formulations: Formulation[]
  evidence: EvidenceEntry[]
  safety: {
    contraindications: string[]
    cautions: string[]
    dosage: string
  }
}

export type HerbData = HerbDetail
