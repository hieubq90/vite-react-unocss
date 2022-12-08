import React from 'react'
import { useRoutes } from 'react-router-dom'
import PageLoadingState from '@/pages/loading'
import routes from './Routes'

function App() {
  const element = useRoutes(routes)

  return (
    <>
      <main className="h-screen w-screen">
        <React.Suspense fallback={<PageLoadingState />}>{element}</React.Suspense>
      </main>
    </>
  )
}

export default App
