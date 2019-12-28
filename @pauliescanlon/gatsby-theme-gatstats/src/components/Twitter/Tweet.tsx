/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled } from 'theme-ui'

export interface ITweetProps {
  /** The YouTube id */
  id: string
}

export const Tweet: React.FC<ITweetProps> = ({ id }) => {
  return (
    <Styled.div>
      <blockquote className="twitter-tweet">
        <a href={`https://twitter.com/gatsbyjs/status/${id}`} />
      </blockquote>
    </Styled.div>
  )
}
