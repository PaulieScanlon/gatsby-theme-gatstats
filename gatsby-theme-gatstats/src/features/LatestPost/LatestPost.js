/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { StaticQuery, graphql } from "gatsby"
import { LatestPostCards } from "./LatestsPostCards"

import { CardHeaders } from "../../components/CardHeaders"

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
                      fixed(fit: COVER, width: 70, height: 70) {
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
              <CardHeaders heading="New posts" subHeading="Last 3 blog posts" />
              <LatestPostCards data={data.allMdx.edges} />
            </Styled.div>
          </Styled.div>
        )
      }}
    />
  )
}
