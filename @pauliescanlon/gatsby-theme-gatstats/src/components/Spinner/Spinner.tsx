/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { keyframes } from '@emotion/core'

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

export const Spinner: React.FC = () => {
  const slices = new Array(12).fill(null)
  const angle = Math.abs(360 / slices.length)
  const delayDuration = slices.length / 10
  const spinnerSize = 20

  return (
    <div
      sx={{
        position: 'relative',
        display: 'inline-block',
        width: spinnerSize,
        height: spinnerSize
      }}
    >
      {slices.map((slice, index) => (
        <div
          key={index}
          sx={{
            animation: `${fadeOut} 1.2s linear infinite`,
            transformOrigin: `${spinnerSize / 2}px ${spinnerSize / 2}px`,
            ':after': {
              content: `' '`,
              display: 'block',
              position: 'absolute',
              top: 0,
              left: `${spinnerSize / 2}px`,
              width: `${spinnerSize / 12}px`,
              height: `${spinnerSize / 4}px`,
              borderRadius: 2,
              backgroundColor: 'primary'
            }
          }}
          style={{
            transform: `rotate(${index * angle}deg)`,
            animationDelay: `-${delayDuration - index / 10}s`
          }}
        >
          {slice}
        </div>
      ))}
    </div>
  )
}
