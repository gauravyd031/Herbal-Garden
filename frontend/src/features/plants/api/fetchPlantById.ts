import { getPlantDetailById } from '../data/plants.mock'
import type { PlantDetail } from '../types/plant.types'

const simulateDelay = async (duration = 500) =>
  new Promise<void>((resolve) => {
    window.setTimeout(resolve, duration)
  })

export const fetchPlantById = async (
  id: string,
  signal?: AbortSignal,
): Promise<PlantDetail> => {
  try {
    const response = await fetch(`/api/plants/${id}`, { signal })

    if (!response.ok) {
      throw new Error(`Failed to fetch plant ${id}`)
    }

    return (await response.json()) as PlantDetail
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw error
    }

    if (import.meta.env.DEV) {
      await simulateDelay()
      const fallbackPlant = getPlantDetailById(id)

      if (fallbackPlant) {
        return fallbackPlant
      }
    }

    throw error
  }
}
