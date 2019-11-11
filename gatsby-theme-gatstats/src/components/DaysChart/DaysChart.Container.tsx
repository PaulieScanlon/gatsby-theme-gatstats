/** @jsx jsx */
import { jsx } from 'theme-ui'
import { StaticQuery, graphql } from 'gatsby'
import { ParentSize } from '@vx/responsive'

import { Panel } from '../Panel'
import { DaysChart } from './DaysChart'

export const DaysChartContainer = () => {
  return (
    <StaticQuery
      query={graphql`
        query daysChartQuery {
          allMdx(
            filter: { fileAbsolutePath: { regex: "//posts//" } }
            sort: { fields: [frontmatter___date] }
          ) {
            edges {
              node {
                frontmatter {
                  date
                }
              }
            }
          }
        }
      `}
      render={data => {
        const daysChartData = data.allMdx.edges
          .map((item: any) => {
            return {
              day: new Date(item.node.frontmatter.date).getDay()
            }
          })
          .reduce(
            (items: any, item: any) => {
              const { day } = item
              items[day] = items[day] || []
              items[day].push(day)
              return items
            },
            [
              [{ label: 'M', day: 'Mon', count: 0 }],
              [{ label: 'T', day: 'Tue', count: 0 }],
              [{ label: 'W', day: 'Wed', count: 0 }],
              [{ label: 'T', day: 'Thu', count: 0 }],
              [{ label: 'F', day: 'Fri', count: 0 }],
              [{ label: 'S', day: 'Sat', count: 0 }],
              [{ label: 'S', day: 'Sun', count: 0 }]
            ]
          )
          .map((item: any) => {
            return {
              label: item[0].label,
              day: item[0].day,
              count: item.length
            }
          })

        return (
          <Panel heading="Posts" subHeading="By day of the week">
            <ParentSize>
              {(parent: any) => (
                <DaysChart
                  daysChartData={daysChartData}
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
