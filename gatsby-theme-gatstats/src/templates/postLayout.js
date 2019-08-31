/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"

import { Link } from "../components/Link"
import DefaultLayout from "./defaultLayout"

const PostLayout = ({ data: { mdx } }) => {
  const { title, date, featuredImage } = mdx.frontmatter

  return (
    <DefaultLayout>
      <Link href="/posts/">Back</Link>
      {featuredImage && (
        <Styled.div
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: [250, 300],
            overflow: "hidden",
            marginBottom: 4,
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
      <Styled.h5>{date}</Styled.h5>
      <Styled.h1>{title}</Styled.h1>
      <MDXRenderer>{mdx.body}</MDXRenderer>
      <Styled.div
        sx={{
          mb: 4,
        }}
      >
        <Link href="/posts/">Back</Link>
      </Styled.div>
    </DefaultLayout>
  )
}

export const contentQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      wordCount {
        paragraphs
        sentences
        words
      }
      timeToRead
      frontmatter {
        title
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
export default PostLayout
