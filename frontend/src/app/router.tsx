import { appRoutes } from './routes'

const AppRouter = () => {
  const pathname = window.location.pathname

  // Temporary lightweight router until react-router is introduced.
  if (pathname === '/plants') {
    return appRoutes[1].element
  }

  if (pathname.startsWith('/plant/')) {
    return appRoutes[2].element
  }

  if (pathname.startsWith('/herb/')) {
    return appRoutes[3].element
  }

  return appRoutes[0].element
}

export default AppRouter
