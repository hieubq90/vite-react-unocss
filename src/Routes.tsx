import React from 'react'
import type { RouteObject } from 'react-router-dom'

const PageNotFound = React.lazy(() => import('@/pages/404'))
const HomePage = React.lazy(() => import('@/pages/index'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  { path: '*', element: <PageNotFound /> },
]

export default routes
