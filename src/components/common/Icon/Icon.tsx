import React, { MouseEventHandler } from 'react'

import TooltipWrapper from '@/components/common/Tooltip/TooltipWrapper'

export interface Props {
  tooltip?: string
  className?: string
  name?: string
  onClick?: MouseEventHandler<HTMLDivElement>
}
// const iconName = useMemo(() => `i-edso-${name}`, [name])

const Icon: React.FC<Props> = ({
  tooltip,
  className = '',
  name = 'i-edso-home-solid',
  onClick,
}) => (
  <TooltipWrapper tooltip={tooltip}>
    <div className={`${name} ${className}`} onClick={onClick} />
  </TooltipWrapper>
)

export default Icon
