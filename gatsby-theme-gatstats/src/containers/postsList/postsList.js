/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui"
import { StaticQuery } from "gatsby"

import { Card } from "../../components/Card"

export const PostsList = () => {
  return (
    <StaticQuery
      query={graphql`
        query postsQuery {
          allFile(
            filter: {
              absolutePath: { regex: "/posts/" }
              extension: { eq: "mdx" }
              name: { ne: "posts" }
            }
          ) {
            edges {
              node {
                name
                relativeDirectory
                childMdx {
                  excerpt(pruneLength: 100)
                  frontmatter {
                    title
                    tags
                    date(formatString: "MMMM DD, YYYY")
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
        }
      `}
      render={data => {
        const { edges } = data.allFile

        return (
          <Flex
            sx={{
              flexWrap: "wrap",
            }}
          >
            {edges.map((item, index) => {
              const { frontmatter, excerpt } = item.node.childMdx
              const { relativeDirectory, name } = item.node

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
                    link={`/posts/${relativeDirectory}/${name}`}
                    date={frontmatter.date}
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
        )
      }}
    />
  )
}
