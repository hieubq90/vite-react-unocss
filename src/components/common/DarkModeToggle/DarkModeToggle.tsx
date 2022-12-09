import React from 'react'
import { useDarkMode } from '@/hooks'

const DarkModeToggle: React.FC = () => {
  const darkMode = useDarkMode()

  return (
    <button
      className="!outline-none"
      title={darkMode.value ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={darkMode.toggle}
    >
      <span className="dark:i-carbon-moon i-carbon-sun block" aria-hidden="true" />
    </button>
  )
}

export default DarkModeToggle
