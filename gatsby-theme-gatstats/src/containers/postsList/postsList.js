/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import { StaticQuery } from "gatsby"
import { Flex, Box } from "reflexbox"

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
          <Styled.ul
            style={{
              padding: 0,
              margin: 0,
              listStyle: "none",
            }}
          >
            {edges.map((item, index) => {
              const { frontmatter } = item.node.childMdx
              const { relativeDirectory, name } = item.node

              return (
                <Styled.li
                  key={index}
                  sx={{
                    display: "inline-flex",
                    boxShadow: 1,
                    transition: "0.2s linear box-shadow",
                    ":hover": {
                      boxShadow: 3,
                    },
                    width: "33%",
                  }}
                >
                  <Card
                    link={`/posts/${relativeDirectory}/${name}`}
                    date={frontmatter.date}
                    title={frontmatter.title}
                    description={frontmatter.description}
                    fluidImage={frontmatter.featuredImage.childImageSharp.fluid}
                  />
                </Styled.li>
              )
            })}
          </Styled.ul>
        )
      }}
    />
  )
}
