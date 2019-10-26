/** @jsx jsx */
import { StaticQuery, graphql } from 'gatsby'
import { jsx } from 'theme-ui'

interface IPostsListContainerProps {
  /** Amount of items to display in the list */
  listAmount?: number
}

export const PostsListContainer: React.FC<IPostsListContainerProps> = () => (
  <StaticQuery
    query={graphql`
      query postsListQuery {
        allMdx(
          filter: { fileAbsolutePath: { regex: "//posts//" } }
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
          edges {
            node {
              excerpt(pruneLength: 100)
              fields {
                slug
              }
              timeToRead
              wordCount {
                words
              }
              frontmatter {
                title
                tags
                date
              }
            }
          }
        }
      }
    `}
    render={data => {
      console.log(data)

      return <div>Posts List</div>
    }}
  />
)
