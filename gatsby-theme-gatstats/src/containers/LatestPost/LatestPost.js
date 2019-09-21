/** @jsx jsx */
import { jsx } from "theme-ui"
import { StaticQuery, graphql } from "gatsby"

import { Card } from "../../components/Card"

import { formatDateForPosts } from "../../utils/formatDate"

export const LatestPost = () => {
  return (
    <StaticQuery
      query={graphql`
        query latestPostQuery {
          allMdx(
            filter: { fileAbsolutePath: { regex: "//posts//" } }
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 1
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
                      fluid(maxWidth: 786) {
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
          }
        }
      `}
      render={data => {
        const {
          fields,
          excerpt,
          frontmatter,
          timeToRead,
          wordCount,
        } = data.allMdx.edges[0].node

        return (
          <Card
            link={fields.slug}
            date={formatDateForPosts(frontmatter.date)}
            title={frontmatter.title}
            tags={frontmatter.tags}
            excerpt={excerpt}
            fluid={
              frontmatter.featuredImage
                ? frontmatter.featuredImage.childImageSharp.fluid
                : null
            }
            timeToRead={timeToRead}
            wordCount={wordCount}
          />
        )
      }}
    />
  )
}
