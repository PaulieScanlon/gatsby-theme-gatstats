/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled } from 'theme-ui'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Img from 'gatsby-image'

import { formatDate } from '..//utils'

const Post = ({ data: { mdx } }: any) => {
  const { timeToRead, wordCount } = mdx
  const { title, date, featuredImage } = mdx.frontmatter

  return (
    <React.Fragment>
      {featuredImage && (
        <Styled.div
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            height: [250, 300],
            overflow: 'hidden',
            mb: 4
          }}
        >
          <Img
            fluid={featuredImage.childImageSharp.fluid}
            alt={title}
            style={{
              display: 'block',
              width: '100%',
              height: '100%'
            }}
          />
        </Styled.div>
      )}
      <Styled.div
        sx={{
          fontSize: 2,
          fontFamily: 'body',
          color: 'secondary',
          mb: 3
        }}
      >
        {formatDate(date)}
      </Styled.div>
      <Styled.h1>{title}</Styled.h1>
      <Styled.p
        sx={{
          mb: 4,
          color: 'textMuted'
        }}
      >{`${timeToRead} min read / ${wordCount.words} words`}</Styled.p>

      <MDXRenderer>{mdx.body}</MDXRenderer>
    </React.Fragment>
  )
}

export const contentQuery = graphql`
  query postQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      excerpt
      timeToRead
      wordCount {
        words
      }
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid {
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
`
export default Post
