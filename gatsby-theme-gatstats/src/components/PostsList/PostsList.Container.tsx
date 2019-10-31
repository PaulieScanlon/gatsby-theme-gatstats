/** @jsx jsx */
import * as React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { jsx, Flex, Box } from 'theme-ui'

import { PostCard } from '../PostCard'

import { IPostCard } from '../../types'
interface IPostsListContainerProps {
  /** Amount of items to display in the list */
  listAmount?: number
}

export const PostsListContainer: React.FC<IPostsListContainerProps> = () => (
  <StaticQuery
    query={graphql`
      query postsListQuery {
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
                    fixed(fit: COVER, width: 130, height: 130) {
                      aspectRatio
                      width
                      height
                      src
                      srcSet
                    }
                    fluid {
                      aspectRatio
                      sizes
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
      const { edges } = data.allMdx

      return (
        <Flex
          sx={{
            flexWrap: 'wrap',
            '> :nth-of-type(odd)': {
              pr: [0, 0, 4]
            }
          }}
        >
          {edges.map((item: IPostCard, index: number) => {
            const { slug } = item.node.fields

            return (
              <Box
                key={index}
                sx={{
                  width: ['100%', '100%', '50%']
                }}
              >
                <Link
                  to={slug}
                  sx={{
                    display: 'flex',
                    textDecoration: 'none',
                    borderRadius: 1,
                    mb: 4,
                    ':focus': {
                      outline: 'none',
                      boxShadow: theme =>
                        `${theme.shadows[0]} ${theme.colors.textMuted}`
                    }
                  }}
                >
                  <PostCard {...item} />
                </Link>
              </Box>
            )
          })}
        </Flex>
      )
    }}
  />
)
