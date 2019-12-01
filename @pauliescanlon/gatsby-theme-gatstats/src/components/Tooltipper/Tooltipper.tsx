/** @jsx jsx */
import { jsx } from 'theme-ui'

import { Tooltip } from '@vx/tooltip'

interface ITooltipProps {
  /** The tooltip title */
  title: string
  /** The tooltip value */
  value: number | string
  /** Left position required by @vx/toottip */
  left: number
  /** Top position required by @vx/toottip */
  top: number
}

export const Tooltipper: React.FC<ITooltipProps> = ({
  title,
  value,
  left,
  top
}) => {
  return (
    <Tooltip
      left={`${left - 3}px`}
      top={`${top - 15}px`}
      style={{
        backgroundColor: 'none',
        padding: 0,
        margin: 0,
        boxShadow: 'none'
      }}
    >
      <span
        sx={{
          position: 'relative',
          color: 'primary',
          backgroundColor: 'background',
          display: 'inline-flex',
          fontFamily: 'body',
          fontSize: 0,
          p: 2,
          borderRadius: 0,
          borderWidth: 0,
          borderStyle: 'solid',
          borderColor: 'primary',
          ':after': {
            content: `''`,
            position: 'absolute',
            width: '12px',
            height: '12px',
            top: '100%',
            left: '50%',
            transform: 'translate(-50%,-50%) rotate(45deg)',
            backgroundColor: 'background',
            borderBottomWidth: 0,
            borderBottomStyle: 'solid',
            borderBottomColor: 'primary',
            borderRightWidth: 0,
            borderRightStyle: 'solid',
            borderRightColor: 'primary'
          },
          span: {
            mr: 1
          }
        }}
      >
        <span>{`${title}:`}</span>
        <strong>{`x${value}`}</strong>
      </span>
    </Tooltip>
  )
}
