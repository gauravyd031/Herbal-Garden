import { apiClient } from '../../../shared/api/apiClient'
import type { Plant } from '../types/plant.types'

type FetchPlantsOptions = {
  signal?: AbortSignal
}

export const fetchPlants = async ({ signal }: FetchPlantsOptions = {}): Promise<Plant[]> => {
  const response = await apiClient.get('/plants', { signal })
  return response.data.plants as Plant[]
}
