/* eslint-disable arrow-body-style */
import React, { CSSProperties, MutableRefObject } from 'react'

interface Props {
  innerRef?: MutableRefObject<HTMLDivElement | null>
  className?: string
  style?: CSSProperties
  [key: string]: any
}

const Scrollbar: React.FC<Props> = ({ innerRef, children, className = '', ...rest }) => {
  return (
    <div
      ref={innerRef}
      className={`hover:overflow-auto overflow-hidden scrollbar-rounded ${className}`}
      edso-scrollbar="~ rounded track-color-scroll-track thumb-color-scroll-thumb"
      {...rest}
    >
      {children}
    </div>
  )
}

export default Scrollbar
