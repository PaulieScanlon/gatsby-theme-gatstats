/** @jsx jsx */
import { jsx } from 'theme-ui'
import { StaticQuery, graphql } from 'gatsby'
import { ParentSize } from '@vx/responsive'

import { Panel } from '../Panel'
import { TagsChart } from './TagsChart'

interface ITagsChartQuery {
  fieldValue: string
  totalCount: number
}

interface ITagChartData {
  label: string
  usage: number
}

export const TagsChartContainer = () => {
  return (
    <StaticQuery
      query={graphql`
        query tagsChartQuery {
          allMdx(
            filter: {
              fileAbsolutePath: { regex: "//posts//" }
              frontmatter: { status: { ne: "draft" } }
            }
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
          .map(
            (item: ITagsChartQuery): ITagChartData => {
              return {
                label: item.fieldValue,
                usage: item.totalCount
              }
            }
          )
          .sort((a: ITagChartData, b: ITagChartData) => b.usage - a.usage)
          .splice(0, 5)

        return (
          <Panel heading="Tags" subHeading="By most used">
            <ParentSize>
              {(parent: any) => (
                <TagsChart
                  tagsChartData={tagsChartData}
                  width={parent.width}
                  height={223}
                />
              )}
            </ParentSize>
          </Panel>
        )
      }}
    />
  )
}
