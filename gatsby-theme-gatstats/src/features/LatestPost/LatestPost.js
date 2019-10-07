/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { StaticQuery, graphql } from "gatsby"
import { LatestPostCards } from "./LatestsPostCards"

export const LatestPost = () => {
  return (
    <StaticQuery
      query={graphql`
        query latestPostQuery {
          allMdx(
            filter: { fileAbsolutePath: { regex: "//posts//" } }
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 3
          ) {
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
                  featuredImage {
                    childImageSharp {
                      fixed(fit: COVER, width: 100, height: 100) {
                        aspectRatio
                        width
                        height
                        src
                        srcSet
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <Styled.div
            sx={{
              display: "flex",
              height: "100%",
            }}
          >
            <Styled.div
              sx={{
                margin: 3,
                padding: 3,
                boxShadow: 0,
                flex: 1,
              }}
            >
              <Styled.h5 sx={{ mb: 0 }}>NEW POSTS</Styled.h5>
              <Styled.h6 sx={{ color: "muted" }}>Last 3 blog posts</Styled.h6>
              <LatestPostCards data={data.allMdx.edges} />
            </Styled.div>
          </Styled.div>
        )
      }}
    />
  )
}
