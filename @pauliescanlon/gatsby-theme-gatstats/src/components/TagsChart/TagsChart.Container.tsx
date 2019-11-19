/** @jsx jsx */
import { jsx } from 'theme-ui'
import { StaticQuery, graphql } from 'gatsby'
import { ParentSize } from '@vx/responsive'

import { Panel } from '../Panel'
import { TagsChart } from './TagsChart'

export const TagsChartContainer = () => {
  return (
    <StaticQuery
      query={graphql`
        query tagsChartQuery {
          allMdx(
            filter: { fileAbsolutePath: { regex: "//posts//" } }
            sort: { order: DESC, fields: [frontmatter___date] }
          ) {
            group(field: frontmatter___tags) {
              fieldValue
              totalCount
              edges {
                node {
                  frontmatter {
                    date
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const tagsChartData = data.allMdx.group
          .map((item: any) => {
            return {
              label: item.fieldValue,
              usage: item.totalCount
            }
          })
          .sort((a: any, b: any) => b.usage - a.usage)
          .splice(0, 5)
        return (
          <Panel heading="Tags" subHeading="By popularity">
            <ParentSize>
              {(parent: any) => (
                <TagsChart
                  tagsChartData={tagsChartData}
                  width={parent.width}
                  height={260}
                />
              )}
            </ParentSize>
          </Panel>
        )
      }}
    />
  )
}