import Tippy, { useSingleton } from '@tippyjs/react'
import { createContext } from 'react'
import { ChildrenProps } from '@/types'
import 'tippy.js/dist/tippy.css'
// Create Context Object
export const TippyContext = createContext(null) as React.Context<any>

// Create a provider for components to consume and subscribe to changes
export const TippySingletonProvider = ({ children }: ChildrenProps) => {
  const [source, target] = useSingleton({
    overrides: ['placement'],
  })
  const contextValue = { source, target }

  return (
    <>
      {/* This is the tippy that gets used as the singleton */}

      <TippyContext.Provider value={contextValue}>
        <Tippy
          singleton={source}
          delay={500}
          // Uncomment for transitions!
          // moveTransition="transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)"
        />
        {children}
      </TippyContext.Provider>
    </>
  )
}
