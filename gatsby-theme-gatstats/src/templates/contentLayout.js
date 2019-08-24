/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"

import DefaultLayout from "./defaultLayout"

const ContentLayout = ({ data: { mdx } }) => {
  const { title, featuredImage } = mdx.frontmatter

  return (
    <DefaultLayout>
      {featuredImage && (
        <Styled.div
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: [250, 300],
            overflow: "hidden",
          }}
        >
          <Img
            fluid={featuredImage.childImageSharp.fluid}
            alt={title}
            style={{
              display: "block",
              width: "100%",
              height: "100%",
            }}
          />
        </Styled.div>
      )}

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
