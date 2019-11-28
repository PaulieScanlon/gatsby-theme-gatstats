/** @jsx jsx */
import { jsx } from 'theme-ui'
import { StaticQuery, graphql } from 'gatsby'
import { ParentSize } from '@vx/responsive'

import { Panel } from '../Panel'
import { YearChart } from './YearChart'

type YearChartObjectShape = {
  /** The count of times an .mdx file is dated in a single month */
  count?: number
  /** A single letter represenation for month */
  label: string
  /** Month */
  month: number
  /** Three digit letter representation for month */
  monthName: string
  // Year
  year: number
}

const nowYear = new Date().getFullYear()

enum yearNames {
  CURRENT_YEAR = 'currentYear',
  PREVIOUS_YEAR = 'previousYear'
}

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

type MonthCount = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number
]

type YearChartObject = {
  /** Amount of posts per month */
  count: number
  /** Single character month name used in legend */
  label: string
  /** Month number in array */
  month: number
  /** Three digit character name used in tooltip */
  monthName: string
  /** Year data is from */
  year?: number
}

interface Dictionary<T = any> {
  [key: string]: T
}

const convertToChartObject = (
  count: number,
  index: number
): YearChartObject => {
  return {
    count: count,
    label: monthNames[index].charAt(0),
    month: index,
    monthName: monthNames[index]
  }
}

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
        const postsByMonth = data.allMdx.edges
          .map(
            (item: { node: { frontmatter: { date: string } } }) =>
              item.node.frontmatter.date
          )
          .reduce((dates: Dictionary<MonthCount>, date: string) => {
            const month = new Date(date).getMonth()
            const year = new Date(date).getFullYear()

            dates[year] = dates[year] || [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            dates[year][month]++

            return dates
          }, [])

        const currentYearData = postsByMonth[postsByMonth.length - 1].map(
          convertToChartObject
        )

        const previousData = postsByMonth[postsByMonth.length - 2].map(
          convertToChartObject
        )

        // console.log(previousData)

        // console.log(postsByMonth)

        return (
          <Panel heading="Posts" subHeading="This year">
            <ParentSize>
              {(parent: any) => (
                <YearChart
                  currentYearData={currentYearData}
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
