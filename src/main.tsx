import React from 'react'
import ReactDOM from 'react-dom/client'
import { ReactQueryProvider } from '@/components/providers/ReactQueryProvider'
import { ReactRouterProvider } from '@/components/providers/ReactRouterProvider'
import App from './App'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import './assets/styles/main.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ReactRouterProvider>
      <ReactQueryProvider>
        <App />
      </ReactQueryProvider>
    </ReactRouterProvider>
  </React.StrictMode>
)
