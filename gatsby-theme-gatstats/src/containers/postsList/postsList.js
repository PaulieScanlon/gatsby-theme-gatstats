import React from "react"
import { StaticQuery } from "gatsby"
import Img from "gatsby-image"

import { Link } from "../../components/Link"

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
          <ul>
            {edges.map((item, index) => {
              const { frontmatter } = item.node.childMdx
              const { relativeDirectory, name } = item.node

              return (
                <li key={index}>
                  <Link
                    href={`/posts/${relativeDirectory}/${name}`}
                    sx={{
                      textDecoration: "none",
                    }}
                  >
                    {frontmatter.title}
                  </Link>
                  <Img
                    fluid={frontmatter.featuredImage.childImageSharp.fluid}
                    sizes={frontmatter.featuredImage.childImageSharp.sizes}
                  />
                </li>
              )
            })}
          </ul>
        )
      }}
    />
  )
}
