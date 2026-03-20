export type PlantCategory = 'All' | 'Medicinal' | 'Herbs' | 'Roots'

export type Plant = {
  id: string
  name: string
  scientificName: string
  category: Exclude<PlantCategory, 'All'>
  image: string
  summary: string
}

export type PlantImageSet = {
  wholePlant: string
  leaf: string
  flower: string
  root: string
  stem?: string
}

export type SimilarPlant = {
  name: string
  difference: string
}

export type ClinicalIndication = {
  condition: string
  description: string
  partUsed: string
  effectivenessLevel?: string
}

export type DoshaInteractionEntry = {
  effect: string
  explanation: string
}

export type DravyagunaEntry = {
  name: 'Rasa' | 'Guna' | 'Virya' | 'Vipaka'
  meaning: string
  function: string
  clinicalRelevance: string
}

export type ClassicalReference = {
  bookName: string
  section: string
  description: string
}

export type ClassicalFormulation = {
  formulationName: string
  type: string
  uses: string
  dosage: string
}

export type ModernResearchEntry = {
  studyType: string
  findings: string
  source: string
  strength: 'Strong' | 'Moderate' | 'Weak'
}

export type DosageEntry = {
  form: string
  amount: string
  notes: string
}

export type PlantDetail = Plant & {
  tagline: string
  description: string
  region?: string
  partsUsed: string[]
  uses: string[]
  benefits: string[]
  careTips: string[]
  caution: string
  hindiName?: string
  family?: string
  synonyms?: string[]
  categoryTags?: string[]
  images?: PlantImageSet
  identification?: {
    wholePlantDescription?: string
    characteristics: {
      height?: string
      leaves?: string
      flowers?: string
      fruit?: string
      root?: string
      smell?: string
    }
    habitat?: string
    similarPlants: SimilarPlant[]
  }
  snapshot?: {
    rasa: string[]
    guna: string[]
    virya: string
    vipaka: string
    prabhava: string
    doshaEffect: string
  }
  overview?: {
    detailedDescription: string
  }
  clinicalIndications?: ClinicalIndication[]
  doshaInteraction?: {
    vata: DoshaInteractionEntry
    kapha: DoshaInteractionEntry
    pitta: DoshaInteractionEntry
  }
  dravyagunaBreakdown?: DravyagunaEntry[]
  classicalReferences?: ClassicalReference[]
  classicalFormulations?: ClassicalFormulation[]
  modernResearch?: ModernResearchEntry[]
  safetyDosage?: {
    contraindications: string[]
    cautions: string[]
    interactions: string[]
    dosage: DosageEntry[]
  }
}
