/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

interface ITagProps {
  /** RGB colour created by colorRange */
  color?: string
}

//@TODO get the theme colour and use as default or make this prop required and use the theme color in the story
export const Tag: React.FC<ITagProps> = ({ children, color = '#ff00ff' }) => {
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
        borderRadius: 0,
        borderWidth: 0,
        borderStyle: 'solid',
        borderColor: color,
        backgroundColor: 'surface'
      }}
    >
      {children}
    </li>
  )
}
