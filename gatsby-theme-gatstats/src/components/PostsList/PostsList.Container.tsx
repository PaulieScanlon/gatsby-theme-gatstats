/** @jsx jsx */
import * as React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { jsx, Flex, Box, Styled } from 'theme-ui'

import { PostCard } from '../PostCard'

import { IPostCard } from '../../types'
import { Search } from '../Search'
interface IPostsListContainerProps {
  /** Amount of items to display in the list */
  listAmount?: number
}

export const PostsListContainer: React.FC<IPostsListContainerProps> = () => {
  const [postsFilter, setPostsFiler] = React.useState('')

  return (
    <StaticQuery
      query={graphql`
        query postsListQuery {
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
        // TODO sort out the any types!
        const postTags = data.allMdx.group
          .map((item: any) => item.fieldValue)
          .reduce((newTags: any, tag: any) => {
            newTags.push({
              value: tag
            })
            return newTags
          }, [])
          .filter((obj: any) => obj.value === postsFilter || postsFilter === '')

        const postItems = data.allMdx.edges
          .map((item: any) => item)
          .filter(
            (obj: any) =>
              obj.node.frontmatter.tags.includes(postsFilter) ||
              postsFilter === ''
          )

        return (
          <React.Fragment>
            <Search
              filterData={postTags}
              onSearch={filterValue => setPostsFiler(filterValue)}
            />
            <Styled.div
              sx={{
                mb: 4
              }}
            />
            <Flex
              sx={{
                flexWrap: 'wrap',
                '> :nth-of-type(odd)': {
                  pr: [0, 0, 4]
                }
              }}
            >
              {postItems.map((item: IPostCard, index: number) => {
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
          </React.Fragment>
        )
      }}
    />
  )
}
