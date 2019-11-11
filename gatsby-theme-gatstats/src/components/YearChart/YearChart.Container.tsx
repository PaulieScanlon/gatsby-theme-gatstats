/** @jsx jsx */
import { jsx } from 'theme-ui'
import { StaticQuery, graphql } from 'gatsby'
import { ParentSize } from '@vx/responsive'

import { Panel } from '../Panel'
import { YearChart } from './YearChart'

const currentYear = new Date().getFullYear()

export const YearChartContainer = () => {
  return (
    <StaticQuery
      query={graphql`
        query yearChartQuery {
          allMdx(
            filter: { fileAbsolutePath: { regex: "//posts//" } }
            sort: { order: DESC, fields: [frontmatter___date] }
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
        const yearChartData = data.allMdx.edges
          .map((item: any) => {
            return {
              month: new Date(item.node.frontmatter.date).getMonth(),
              year: new Date(item.node.frontmatter.date).getFullYear()
            }
          })
          .filter((item: any) => item.year === currentYear)
          .reduce(
            (items: any, item: any) => {
              const { month } = item
              items[month] = items[month] || []
              items[month].push(month)
              return items
            },
            [
              [{ label: 'J', monthName: 'Jan', month: 0, count: 0 }],
              [{ label: 'F', monthName: 'Feb', month: 1, count: 0 }],
              [{ label: 'M', monthName: 'Mar', month: 2, count: 0 }],
              [{ label: 'A', monthName: 'Apr', month: 3, count: 0 }],
              [{ label: 'M', monthName: 'May', month: 4, count: 0 }],
              [{ label: 'J', monthName: 'Jun', month: 5, count: 0 }],
              [{ label: 'J', monthName: 'Jul', month: 6, count: 0 }],
              [{ label: 'A', monthName: 'Aug', month: 7, count: 0 }],
              [{ label: 'S', monthName: 'Sep', month: 8, count: 0 }],
              [{ label: 'O', monthName: 'Oct', month: 9, count: 0 }],
              [{ label: 'N', monthName: 'Nov', month: 10, count: 0 }],
              [{ label: 'D', monthName: 'Dec', month: 11, count: 0 }]
            ]
          )
          .map((item: any) => {
            return {
              label: item[0].label,
              monthName: item[0].monthName,
              month: item[0].month,
              count: item.length - 1
            }
          })

        return (
          <Panel heading="Posts" subHeading="This Year">
            <ParentSize>
              {(parent: any) => (
                <YearChart
                  yearChartData={yearChartData}
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
