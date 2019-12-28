/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled, useThemeUI } from 'theme-ui'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import Img from 'gatsby-image'

import { preToCodeBlock } from 'mdx-utils'

import { Tag } from '../components/Tag'
import { Seo } from '../components/Seo'
import { Code } from '../components/Code'

import { formatDate, colorRange } from '../utils'
import { ButtonIcon } from '../components/ButtonIcon'

// https://www.lekoarts.de/en/blog/language-tabs-for-gatsbys-code-blocks
const components = {
  pre: (preProps: any) => {
    const props = preToCodeBlock(preProps)
    if (props) {
      return <Code {...props} />
    }
    return <pre {...preProps} />
  },
  wrapper: ({ children }: any) => <React.Fragment>{children}</React.Fragment>
}

const Post = ({ data: { mdx, site }, pageContext, ...props }: any) => {
  const context = useThemeUI()

  const { body, timeToRead, wordCount, excerpt, fields } = mdx
  const { title, date, tags, featuredImage, embeddedImages } = mdx.frontmatter
  const { next, prev } = pageContext

  // https://deltaskelta.github.io/blog/using-gatsby-images-with-gatsby-mdx/
  const embedded: { [k: string]: React.ReactNode } = {}

  if (embeddedImages) {
    embeddedImages.forEach((image: any, index: number) => {
      if (image && image.childImageSharp.fluid) {
        embedded[`image${index + 1}`] = () =>
          image.childImageSharp.fluid || null
      }
    })
  }

  const colorScale = colorRange(
    context.theme.colors!.primary!,
    context.theme.colors!.secondary!,
    tags ? tags.length : []
  )

  return (
    <article
      sx={{
        mb: 5
      }}
    >
      <Seo
        title={`${site.siteMetadata.title} | ${title}`}
        description={excerpt}
        keywords={tags || []}
        siteURL={site.siteMetadata.siteURL}
        path={fields.slug}
        image={
          featuredImage
            ? featuredImage.childImageSharp.fluid.src.replace('/', '')
            : ''
        }
      />
      {featuredImage && (
        <Styled.div
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
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
        {title && <Styled.h1>{title}</Styled.h1>}

        {date && formatDate(date)}
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
        {tags &&
          tags.map((tag: string, index: number) => (
            <Tag key={index} color={colorScale[index]}>
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
      >
        {`${timeToRead} min read / ${wordCount.words} words`}
      </Styled.div>

      <MDXProvider components={components}>
        <MDXRenderer embedded={embedded} location={props.location}>
          {body}
        </MDXRenderer>
      </MDXProvider>
      <Styled.div
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: 5,
          a: {
            ':focus': {
              outline: 'none'
            }
          }
        }}
      >
        <span>
          {prev && (
            <Link to={prev.fields.slug} tabIndex={-1}>
              <ButtonIcon iconPath="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
            </Link>
          )}
        </span>
        <span>
          {next && (
            <Link to={next.fields.slug} tabIndex={-1}>
              <ButtonIcon iconPath="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            </Link>
          )}
        </span>
      </Styled.div>
    </article>
  )
}

// {
//   mdx(id: {eq: "64d8121e-1838-50ff-b8bf-cf5dff069084"}) {
//     id
//     excerpt
//   }
// }
export const contentQuery = graphql`
  query postQuery($id: String) {
    site {
      siteMetadata {
        title
        siteURL
      }
    }
    mdx(id: { eq: $id }) {
      id
      body
      excerpt
      timeToRead
      wordCount {
        words
      }
      fields {
        slug
      }
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid(quality: 90) {
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
        embeddedImages {
          publicURL
          childImageSharp {
            fluid {
              base64
              tracedSVG
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
              originalImg
              originalName
              presentationWidth
              presentationHeight
            }
          }
        }
      }
    }
  }
`
export default Post
