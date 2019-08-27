/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui"
import { StaticQuery } from "gatsby"

import { Card } from "../../components/Card"
import { PostsSearch } from "../../components/PostsSearch"

import { formatDate } from "../../utils/formatDate"

export const PostsList = () => {
  return (
    <StaticQuery
      query={graphql`
        query postsQuery {
          allMdx(
            filter: { fileAbsolutePath: { regex: "//posts//" } }
            sort: { order: DESC, fields: [frontmatter___date] }
          ) {
            edges {
              node {
                excerpt(pruneLength: 100)
                fields {
                  slug
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
        const postNames = data.allMdx.edges
          .map(item => item.node.frontmatter.title)
          .reduce((newtitiles, title) => {
            newtitiles.push({
              value: title,
            })

            return newtitiles
          }, [])

        return (
          <div>
            <PostsSearch postNames={postNames} />
            <Flex
              sx={{
                flexWrap: "wrap",
              }}
            >
              {data.allMdx.edges.map((item, index) => {
                const { fields, excerpt, frontmatter } = item.node

                return (
                  <Box
                    key={index}
                    sx={{
                      width: ["100%", "100%", "50%"],
                      px: [1, 2],
                      mb: 3,
                    }}
                  >
                    <Card
                      link={fields.slug}
                      date={formatDate(frontmatter.date)}
                      title={frontmatter.title}
                      excerpt={excerpt}
                      fluid={
                        frontmatter.featuredImage
                          ? frontmatter.featuredImage.childImageSharp.fluid
                          : null
                      }
                    />
                  </Box>
                )
              })}
            </Flex>
          </div>
        )
      }}
    />
  )
}
