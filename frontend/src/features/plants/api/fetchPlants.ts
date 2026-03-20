import { plantsMockData } from '../data/plants.mock'
import type { Plant } from '../types/plant.types'

type FetchPlantsOptions = {
  signal?: AbortSignal
}

export const fetchPlants = async ({ signal }: FetchPlantsOptions = {}): Promise<Plant[]> => {
  await new Promise<void>((resolve, reject) => {
    const timeoutId = window.setTimeout(resolve, 650)

    signal?.addEventListener(
      'abort',
      () => {
        window.clearTimeout(timeoutId)
        reject(new DOMException('The request was aborted.', 'AbortError'))
      },
      { once: true },
    )
  })

  return plantsMockData
}
