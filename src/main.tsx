import React from 'react'
import ReactDOM from 'react-dom/client'
import { ReactQueryProvider } from '@/components/providers/ReactQueryProvider'
import { ReactRouterProvider } from '@/components/providers/ReactRouterProvider'
import { TippySingletonProvider } from '@/components/providers/TippySigletonProvider'
import App from './App'
import '@unocss/reset/tailwind.css'
import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'virtual:uno.css'
import './assets/styles/main.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ReactRouterProvider>
      <ReactQueryProvider>
        <TippySingletonProvider>
          <App />
        </TippySingletonProvider>
      </ReactQueryProvider>
    </ReactRouterProvider>
  </React.StrictMode>
)
