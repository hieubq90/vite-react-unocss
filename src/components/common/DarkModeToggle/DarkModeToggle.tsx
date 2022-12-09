import React, { useMemo } from 'react'
import { TooltipWrapper } from '@/components/common/Tooltip'
import { useDarkMode } from '@/hooks'

const getToggleTooltip = (isDark: boolean) => {
  if (isDark) return 'Switch to light mode'
  return 'Switch to dark mode'
}

interface Props {
  className?: string
  darkIcon?: string
  lightIcon?: string
}

const DarkModeToggle: React.FC<Props> = ({
  className,
  darkIcon = 'i-carbon-moon',
  lightIcon = 'i-carbon-sun',
}) => {
  const darkMode = useDarkMode()
  const tooltip = useMemo(() => getToggleTooltip(darkMode.value), [darkMode.value])
  const darkIconClass = useMemo(() => `dark:${lightIcon}`, [lightIcon])
  return (
    <TooltipWrapper tooltip={tooltip}>
      <button className={`${className} !outline-none`} onClick={darkMode.toggle}>
        <span className={`${darkIconClass} ${darkIcon} block1`} aria-hidden="true" />
      </button>
    </TooltipWrapper>
  )
}

export default DarkModeToggle
