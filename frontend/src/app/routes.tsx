import type { ReactNode } from 'react'
import HomePage from '../features/home/HomePage'
import HerbDetailPage from '../features/herb/pages/HerbDetailPage'
import PlantDetailPage from '../features/plants/pages/PlantDetailPage'
import PlantListingPage from '../features/plants/pages/PlantListingPage'

export type AppRoute = {
  path: string
  element: ReactNode
}

export const appRoutes: AppRoute[] = [
  { path: '/', element: <HomePage /> },
  { path: '/plants', element: <PlantListingPage /> },
  { path: '/plant/:id', element: <PlantDetailPage /> },
  { path: '/herb/:id', element: <HerbDetailPage /> },
]
