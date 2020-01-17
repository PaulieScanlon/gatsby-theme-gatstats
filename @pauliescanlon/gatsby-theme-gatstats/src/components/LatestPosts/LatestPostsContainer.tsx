/** @jsx jsx */
import { StaticQuery, graphql, Link } from 'gatsby'
import { jsx, Styled } from 'theme-ui'

import { Panel } from '../Panel'
import { LatestPosts } from './LatestPosts'

const STATUS = 'draft'

import { ILatestPosts } from '../../types'

export const LatestPostsContainer = () => {
  return (
    <StaticQuery
      query={graphql`
        query latestPostQuery {
          allMdx(
            filter: {
              fileAbsolutePath: { regex: "//posts//" }
              frontmatter: { status: { ne: "draft" } }
            }
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 2
          ) {
            edges {
              node {
                excerpt(pruneLength: 90)
                fields {
                  slug
                }
                frontmatter {
                  title
                  status
                  date
                }
              }
            }
          }
        }
      `}
      render={data => {
        const listItems = data.allMdx.edges

        return (
          <Panel heading="Latest Posts" subHeading="New posts!">
            <Styled.div
              sx={{
                mb: 3
              }}
            />
            {listItems.map((item: ILatestPosts, index: number) => {
              const { slug } = item.node.fields

              return (
                <Link
                  key={index}
                  to={slug}
                  sx={{
                    display: 'flex',
                    textDecoration: 'none',
                    borderRadius: 1,
                    mb: 3,
                    ':focus': {
                      outline: 'none',
                      boxShadow: theme =>
                        `${theme.shadows[0]} ${theme.colors.textMuted}`
                    }
                  }}
                >
                  <LatestPosts {...item} />
                </Link>
              )
            })}
          </Panel>
        )
      }}
    />
  )
}
