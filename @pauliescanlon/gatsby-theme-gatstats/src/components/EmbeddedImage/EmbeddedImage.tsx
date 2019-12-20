/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled } from 'theme-ui'

import Img from 'gatsby-image'

// https://deltaskelta.github.io/blog/using-gatsby-images-with-gatsby-mdx/

interface IEmbeddedImageProps {
  /** src function to get childImageSharp fluid */
  src: any
  /** sx with values */
  width?: string | string[]
  /** Css justify-content */
  justifyContent?: 'flex-start' | 'flex-end' | 'center'
}

export const EmbeddedImage: React.FC<IEmbeddedImageProps> = ({
  src,
  width,
  justifyContent = 'flex-start'
}) => (
  <Styled
    sx={{
      display: 'inline-flex',
      alignItems: 'center',
      width: '100%',
      overflow: 'hidden',
      mb: 4,
      justifyContent: justifyContent
    }}
  >
    <Styled.div
      sx={{
        width: width || '100%'
      }}
    >
      <Img
        fluid={src()}
        style={{
          display: 'block',
          width: '100%',
          height: '100%'
        }}
      />
    </Styled.div>
  </Styled>
)
