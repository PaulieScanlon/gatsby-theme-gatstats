/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled, useThemeUI } from 'theme-ui'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Img from 'gatsby-image'

import { Tag } from '../components/Tag'

import { formatDate, colorRange } from '..//utils'

const Post = ({ data: { mdx } }: any) => {
  const context = useThemeUI()
  const { timeToRead, wordCount } = mdx
  const { title, date, tags, featuredImage } = mdx.frontmatter

  const scale = colorRange(
    context.theme.colors!.primary!,
    context.theme.colors!.secondary!,
    tags.length
  )

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
        <Styled.h1>{title}</Styled.h1>
        {formatDate(date)}
      </Styled.div>
      <ul
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          p: 0,
          mt: 4,
          mb: 3,
          '> :nth-of-type(n)': {
            mr: 2
          }
        }}
      >
        {tags.map((tag: string, index: number) => (
          <Tag key={index} color={scale[index]}>
            {tag}
          </Tag>
        ))}
      </ul>
      <Styled.div
        sx={{
          mb: 4,
          color: 'textMuted',
          fontSize: 1,
          fontFamily: 'body',
          textAlign: 'right'
        }}
      >{`${timeToRead} min read / ${wordCount.words} words`}</Styled.div>

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
