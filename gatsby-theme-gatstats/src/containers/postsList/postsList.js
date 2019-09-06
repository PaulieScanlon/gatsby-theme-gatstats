/** @jsx jsx */
import React from "react"
import { jsx, Flex, Box } from "theme-ui"
import { StaticQuery, graphql } from "gatsby"

import { Card } from "../../components/Card"
import { PostsSearch } from "../../components/PostsSearch"

import { formatDate } from "../../utils/formatDate"

export const PostsList = () => {
  const [postsFilter, setPostsFiler] = React.useState("")

  return (
    <StaticQuery
      query={graphql`
        query postsQuery {
          allMdx(
            filter: { fileAbsolutePath: { regex: "//posts//" } }
            sort: { order: DESC, fields: [frontmatter___date] }
          ) {
            group(field: frontmatter___tags) {
              fieldValue
              totalCount
            }
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
        const postTags = data.allMdx.group
          .map(item => item.fieldValue)
          .reduce((newTags, tag) => {
            newTags.push({
              value: tag,
            })
            return newTags
          }, [])
          .filter(obj => obj.value === postsFilter || postsFilter === "")

        const postDetails = data.allMdx.edges
          .map(item => item)
          .filter(
            obj =>
              obj.node.frontmatter.tags.includes(postsFilter) ||
              postsFilter === ""
          )

        return (
          <div>
            <PostsSearch
              postTags={postTags}
              onSearch={filterValue => setPostsFiler(filterValue)}
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
                      width: ["100%", "100%", "100%", "50%"],
                      px: 2,
                      mb: 3,
                    }}
                  >
                    <Card
                      link={fields.slug}
                      date={formatDate(frontmatter.date)}
                      title={frontmatter.title}
                      tags={frontmatter.tags}
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
