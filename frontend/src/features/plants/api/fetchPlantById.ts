import axios from 'axios'
import { apiClient } from '../../../shared/api/apiClient'
import { getPlantDetailById } from '../data/plants.mock'
import type { PlantDetail } from '../types/plant.types'

export const fetchPlantById = async (
  id: string,
  signal?: AbortSignal,
): Promise<PlantDetail> => {
  try {
    const response = await apiClient.get(`/plants/${id}`, { signal })
    const dbPlant = response.data.plant ?? response.data
    const mockPlant = getPlantDetailById(dbPlant.slug) ?? getPlantDetailById(dbPlant.id) ?? getPlantDetailById(id)

    // Merge: database values override mocks, but missing/null db columns default to mock values
    return {
      ...mockPlant,
      ...dbPlant,
      snapshot: dbPlant.snapshot ?? mockPlant?.snapshot,
      doshaInteraction: dbPlant.doshaInteraction ?? mockPlant?.doshaInteraction,
      dravyagunaBreakdown: dbPlant.dravyagunaBreakdown ?? mockPlant?.dravyagunaBreakdown,
      classicalReferences: dbPlant.classicalReferences ?? mockPlant?.classicalReferences,
      classicalFormulations: dbPlant.classicalFormulations ?? mockPlant?.classicalFormulations,
      clinicalIndications: dbPlant.clinicalIndications ?? mockPlant?.clinicalIndications,
      safetyDosage: dbPlant.safetyDosage ?? mockPlant?.safetyDosage,
      identification: dbPlant.identification ?? mockPlant?.identification,
      modernResearch: dbPlant.modernResearch ?? mockPlant?.modernResearch,
      images: dbPlant.images ?? mockPlant?.images,
    } as PlantDetail
  } catch (error) {
    if (axios.isCancel(error)) {
      throw new DOMException('The request was aborted.', 'AbortError')
    }

    if (import.meta.env.DEV) {
      const fallbackPlant = getPlantDetailById(id)
      if (fallbackPlant) {
        return fallbackPlant
      }
    }

    throw error
  }
}
