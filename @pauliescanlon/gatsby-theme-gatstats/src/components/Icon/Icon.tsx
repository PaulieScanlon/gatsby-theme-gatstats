import * as React from 'react'

import { IIcon } from '../../types'
interface IIconProps extends IIcon, React.HTMLAttributes<HTMLOrSVGElement> {}

export const Icon: React.FC<IIconProps> = ({
  style,
  className,
  iconPath,
  iconFill = 'currentcolor',
  iconSize = 24
}) => (
  <svg
    style={{ ...style }}
    className={`jato-icon ${className}`}
    width={iconSize}
    height={iconSize}
    viewBox={`0 0 24 24`}
    preserveAspectRatio="xMidYMid meet"
    x="0"
    y="0"
    id={iconPath}
  >
    <path d={iconPath} fill={iconFill} />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
)
