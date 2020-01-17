/** @jsx jsx */
import { jsx } from 'theme-ui'
import { StaticQuery, graphql } from 'gatsby'
import { ParentSize } from '@vx/responsive'

import { Panel } from '../Panel'
import { DaysChart } from './DaysChart'
import { Dictionary, IBarChart } from '../../types'

import { dayNames } from '../../utils'

interface IDaysChartQuery {
  node: {
    frontmatter: {
      date: string
    }
  }
}

type DayCount = [number, number, number, number, number, number, number]

const convertToChartObject = (count: number, index: number): IBarChart => {
  return {
    count: count,
    label: dayNames[index].charAt(0),
    day: dayNames[index]
  }
}

export const DaysChartContainer = () => {
  return (
    <StaticQuery
      query={graphql`
        query daysChartQuery {
          allMdx(
            filter: {
              fileAbsolutePath: { regex: "//posts//" }
              frontmatter: { status: { ne: "draft" } }
            }
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
        const nowYear = new Date().getFullYear()
        const emptyDays = [0, 0, 0, 0, 0, 0, 0]

        const postsByDay = data.allMdx.edges
          .map((item: IDaysChartQuery) => item.node.frontmatter.date)
          .reduce((dates: Dictionary<DayCount>, date: string) => {
            const year = new Date(date).getFullYear()
            const day = new Date(date).getDay() - 1

            dates[year] = dates[year] || [0, 0, 0, 0, 0, 0, 0]
            dates[year][day]++

            return dates
          }, [])

        const currentYearData = postsByDay[nowYear]
          ? postsByDay[nowYear].map(convertToChartObject)
          : emptyDays.map(convertToChartObject)

        return (
          <Panel heading="Posts" subHeading="By day of the week">
            <ParentSize>
              {(parent: any) => (
                <DaysChart
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
