/** @jsx jsx */
import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { jsx } from 'theme-ui'

import { CardList } from './CardList'

import { Search } from '../Search'

interface ICardListContainerProps {
  /** The directory name to filter mdx nodes from */
  dirName?: string
}

export const CardListContainer: React.FC<ICardListContainerProps> = ({
  dirName = 'posts'
}) => {
  const [listFilter, setListFilter] = React.useState('')

  return (
    <StaticQuery
      query={graphql`
        query listQuery {
          allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
            group(field: frontmatter___tags) {
              fieldValue
              totalCount
            }
            edges {
              node {
                fileAbsolutePath
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
        const listItems = data.allMdx.edges
          .map((item: any) => {
            return item
          })
          .filter((item: any) =>
            item.node.fileAbsolutePath.includes(`/${dirName}/`)
          )
          .filter(
            (obj: any) =>
              obj.node.frontmatter.tags.includes(listFilter) ||
              listFilter === ''
          )

        // TODO sort out the any types!
        const listTags = data.allMdx.group
          .map((item: any) => item.fieldValue)
          .reduce((newTags: any, tag: any) => {
            newTags.push({
              value: tag
            })
            return newTags
          }, [])
          .filter((obj: any) => obj.value === listFilter || listFilter === '')

        return (
          <React.Fragment>
            <Search
              filterData={listTags}
              onSearch={filterValue => setListFilter(filterValue)}
            />
            <CardList listItems={listItems} />
          </React.Fragment>
        )
      }}
    />
  )
}
