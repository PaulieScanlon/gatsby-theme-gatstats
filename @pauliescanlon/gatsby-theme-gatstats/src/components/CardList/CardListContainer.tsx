/** @jsx jsx */
import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { jsx } from 'theme-ui'
import { History } from '@reach/router'

import queryString from 'query-string'

import { CardList } from './CardList'
import { Search } from '../Search'

interface ICardListContainerProps extends History {}
const DIR_NAME = 'posts'

export const CardListContainer: React.FC<ICardListContainerProps> = ({
  location
}) => {
  const [searchParam, setSearchParam] = React.useState('')

  const handleSearchParam = (filterValue: string) => {
    !filterValue
      ? history.replaceState(null, null, location.pathname)
      : history.replaceState({}, '', `?tag=${filterValue}`)

    setSearchParam(filterValue)
  }

  React.useEffect(() => {
    const filterVal = queryString.parse(location.search).tag
    filterVal && setSearchParam(filterVal)
  }, [])

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
            item.node.fileAbsolutePath.includes(`/${DIR_NAME}/`)
          )
          .filter(
            (obj: any) =>
              obj.node.frontmatter.tags.includes(searchParam) ||
              searchParam === ''
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
          .filter((obj: any) => obj.value === searchParam || searchParam === '')

        return (
          <React.Fragment>
            <Search
              selectedTag={searchParam}
              filterData={listTags}
              onSearch={filterValue => handleSearchParam(filterValue)}
            />
            <CardList listItems={listItems} />
          </React.Fragment>
        )
      }}
    />
  )
}
