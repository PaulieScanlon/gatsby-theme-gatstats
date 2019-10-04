/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import { StaticQuery, graphql } from "gatsby"

import { Card } from "../../components/Card"
import { PostsSearch } from "../../components/PostsSearch"

import { formatDateForPosts } from "../../utils/formatDate"

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
            <Styled.div>
              {postDetails.map((item, index) => {
                const {
                  fields,
                  excerpt,
                  frontmatter,
                  timeToRead,
                  wordCount,
                } = item.node
                return (
                  <Styled.div
                    key={index}
                    sx={{
                      mb: 3,
                    }}
                  >
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
                      fixed={
                        frontmatter.featuredImage
                          ? frontmatter.featuredImage.childImageSharp.fixed
                          : null
                      }
                      timeToRead={timeToRead}
                      wordCount={wordCount}
                    />
                  </Styled.div>
                )
              })}
            </Styled.div>
          </div>
        )
      }}
    />
  )
}
