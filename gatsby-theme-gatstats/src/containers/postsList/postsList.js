/** @jsx jsx */
import React from "react"
import { jsx, Flex, Box } from "theme-ui"
import { StaticQuery } from "gatsby"

import { Card } from "../../components/Card"
import { PostsSearch } from "../../components/PostsSearch"

import { formatDate } from "../../utils/formatDate"

export const PostsList = () => {
  const [postsFilter, setPostsFiler] = React.useState("")

  const handlePostsFilter = filterValue => {
    setPostsFiler(filterValue)
  }

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
          .filter(obj => obj.value === postsFilter || postsFilter === "")

        const postDetails = data.allMdx.edges
          .map(item => item)
          .filter(
            obj =>
              obj.node.frontmatter.title === postsFilter || postsFilter === ""
          )

        return (
          <div>
            <PostsSearch
              postNames={postNames}
              onSearch={filterValue => handlePostsFilter(filterValue)}
            />
            <Flex
              sx={{
                flexWrap: "wrap",
              }}
            >
              {postDetails.map((item, index) => {
                const { fields, excerpt, frontmatter } = item.node

                return (
                  <Box
                    key={index}
                    sx={{
                      width: ["100%", "100%", "50%"],
                      px: 2,
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
