import React from "react"
import { graphql } from "gatsby"
import { Styled } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"

import DefaultLayout from "./defaultLayout"

const ContentLayout = ({ data: { mdx } }) => {
  const { title } = mdx.frontmatter
  const { fluid } = mdx.frontmatter.featuredImage.childImageSharp

  return (
    <DefaultLayout>
      <Img
        css={{
          height: 200,
        }}
        fluid={fluid}
        alt={title}
      />
      <Styled.h1>{title}</Styled.h1>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </DefaultLayout>
  )
}

export const contentQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid {
              base64
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
export default ContentLayout
