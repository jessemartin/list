'use strict'

import React from 'react'
import { render } from 'react-dom'
import IconPaths from '../icons/iconPaths.js'

export default ({ icon, size=12 }) => {
  const scale = size / 1024
  const transform = `scale(${scale} ${scale})`
  return (
    <div className={icon}>
      <svg width={size} height={size}>
        <g transform={transform}>
          { IconPaths[icon].map((path, i) => <path key={i} d={path}></path>) }
        </g>
      </svg>
    </div>
  )
}
