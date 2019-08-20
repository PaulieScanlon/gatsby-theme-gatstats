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
            sort: { fields: [birthtime], order: DESC }
          ) {
            edges {
              node {
                name
                modifiedTime(formatString: "MMM DD, YYYY")
                relativeDirectory
                childMdx {
                  frontmatter {
                    title
                    description
                    tags
                    date
                    featuredImage {
                      childImageSharp {
                        fluid {
                          base64
                          aspectRatio
                          src
                          srcSet
                          sizes
                        }
                        fixed {
                          base64
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
              const { frontmatter } = item.node.childMdx
              const { relativeDirectory, name } = item.node

              return (
                <Box
                  key={index}
                  sx={{
                    width: ["100%", "50%", "50%", "33%"],
                    px: [1, 2],
                    mb: 4,
                  }}
                >
                  <Card
                    link={`/posts/${relativeDirectory}/${name}`}
                    date={frontmatter.date}
                    title={frontmatter.title}
                    description={frontmatter.description}
                    fluidImage={frontmatter.featuredImage.childImageSharp.fluid}
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
