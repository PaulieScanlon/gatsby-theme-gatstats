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
              const {
                date,
                title,
                description,
                featuredImage,
              } = item.node.childMdx.frontmatter
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
                    date={date}
                    title={title}
                    description={description}
                    fluid={
                      featuredImage ? featuredImage.childImageSharp.fluid : null
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
