import React, { PropsWithChildren, useCallback } from 'react'
import Tooltip from './Tooltip'

interface Props {
  tooltip?: any
  [key: string]: any
}

const TooltipWrapper: React.FC<PropsWithChildren<Props>> = (props) => {
  const MyTooltipWrapper = useCallback(({ children, tooltip, ...rest }: any) => {
    if (!tooltip) return children

    return (
      <Tooltip content={tooltip} {...rest}>
        {children}
      </Tooltip>
    )
  }, [])

  return <MyTooltipWrapper {...props} />
}

export default TooltipWrapper
