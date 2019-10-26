/** @jsx jsx */

import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const Post = ({ data: { mdx } }: any) => {
  return <MDXRenderer>{mdx.body}</MDXRenderer>
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
      }
    }
  }
`
export default Post
