/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Content } from '../components/Content'
import { SideBarContainer } from '../components/SideBar/SideBarContainer'

const Post = ({ data: { mdx } }: any) => {
  return (
    <Styled.div
      sx={{
        margin: '0 auto',
        maxWidth: theme => theme.breakpoints[3]
      }}
    >
      <Content>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </Content>
      <SideBarContainer />
    </Styled.div>
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
