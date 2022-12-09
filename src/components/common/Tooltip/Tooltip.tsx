import Tippy, { TippyProps } from '@tippyjs/react'
import React, { useContext, PropsWithChildren } from 'react'
import { TippyContext } from '@/components/providers/TippySigletonProvider'

interface Props extends TippyProps {
  background?: 'primary' | 'white'
}

const Tooltip: React.FC<PropsWithChildren<Props>> = ({
  className = '',
  background = 'primary',
  disabled = false,
  ...rest
}) => {
  const { target } = useContext(TippyContext)
  return (
    <Tippy
      disabled={disabled}
      singleton={target}
      {...rest}
      className={`edso-tooltip tooltip-${background} ${className}`}
    />
  )
}

export default Tooltip
