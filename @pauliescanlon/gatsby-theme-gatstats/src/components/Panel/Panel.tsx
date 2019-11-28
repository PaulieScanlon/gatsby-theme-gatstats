/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled } from 'theme-ui'

interface IPanelProps {
  /** The heading to display */
  heading: string
  /** The subHeading to display */
  subHeading?: string
}

export const Panel: React.FC<IPanelProps> = ({
  children,
  heading,
  subHeading
}) => {
  return (
    <article
      sx={{
        display: 'flex',
        flexDirection: 'column',
        color: 'text',
        fontFamily: 'body',
        backgroundColor: 'surface',
        overflow: 'hidden',
        borderRadius: 1,
        p: 3
      }}
    >
      <Styled.div>
        <Styled.h4>{heading}</Styled.h4>
        <Styled.h6
          sx={{
            color: 'secondary'
          }}
        >
          {subHeading}
        </Styled.h6>
      </Styled.div>
      {children}
    </article>
  )
}
