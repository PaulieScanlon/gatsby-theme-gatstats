/** @jsx jsx */

import { jsx, Flex, Box } from "theme-ui"
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
          <Flex
            sx={{
              flexWrap: "wrap",
            }}
          >
            {data.allMdx.edges.map((item, index) => {
              const {
                fields,
                excerpt,
                frontmatter,
                timeToRead,
                wordCount,
              } = item.node

              return (
                <Box
                  key={index}
                  sx={{
                    width: "100%",
                    px: 2,
                    mb: 3,
                  }}
                >
                  <Card
                    key={index}
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
                    fixed={
                      frontmatter.featuredImage
                        ? frontmatter.featuredImage.childImageSharp.fixed
                        : null
                    }
                    timeToRead={timeToRead}
                    wordCount={wordCount}
                  />
                </Box>
              )
            })}
          </Flex>
        )
      }}
    />
  )
}
