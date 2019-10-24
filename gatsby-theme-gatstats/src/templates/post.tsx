/** @jsx jsx */

import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from './layout'

const Post = ({ data: { mdx } }: any) => {
  return (
    <Layout>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
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
      }
    }
  }
`
export default Post
