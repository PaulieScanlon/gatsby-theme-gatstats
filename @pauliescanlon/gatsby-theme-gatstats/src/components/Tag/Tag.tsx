/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

interface ITagProps {
  /** RGB colour created by colorRange */
  color: string
}

export const Tag: React.FC<ITagProps> = ({ children, color }) => {
  return (
    <li
      sx={{
        color: color,
        display: 'inline-flex',
        fontFamily: 'body',
        fontSize: 0,
        pt: 1,
        pb: 1,
        pl: 2,
        pr: 2,
        mb: 2,
        borderRadius: 0,
        borderWidth: 0,
        borderStyle: 'solid',
        borderColor: color
      }}
    >
      {children}
    </li>
  )
}
