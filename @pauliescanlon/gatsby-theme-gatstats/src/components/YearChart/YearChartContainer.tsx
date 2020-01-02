/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { StaticQuery, graphql } from 'gatsby'
import { ParentSize } from '@vx/responsive'

import { Panel } from '../Panel'
import { YearChart } from './YearChart'
import { Dictionary, ILineChart } from '../../types'
import { monthNames } from '../../utils'

interface IYearChartQuery {
  node: {
    frontmatter: {
      date: string
    }
  }
}

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

const convertToChartObject = (count: number, index: number): ILineChart => {
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
        const nowYear = new Date().getFullYear()
        const lastYear = nowYear - 1

        const postsByMonth = data.allMdx.edges
          .map((item: IYearChartQuery) => item.node.frontmatter.date)
          .reduce((dates: Dictionary<MonthCount>, date: string) => {
            const year = new Date(date).getFullYear()
            const month = new Date(date).getMonth()

            dates[year] = dates[year] || [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            dates[year][month]++

            return dates
          }, [])

        const currentYearData = postsByMonth[nowYear].map(convertToChartObject)

        const previousYearData = postsByMonth[lastYear].map(
          convertToChartObject
        )

        return (
          <Panel heading="Posts">
            <Styled.div
              sx={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              {postsByMonth[lastYear] && (
                <Styled.p
                  sx={{
                    display: 'inline',
                    margin: 0,
                    color: 'secondary',
                    borderBottomWidth: '2px',
                    borderBottomStyle: 'dashed',
                    borderBottomColor: 'secondary'
                  }}
                >
                  {nowYear - 1}
                </Styled.p>
              )}
              <Styled.p
                sx={{
                  display: 'inline',
                  margin: 0,
                  color: 'primary',
                  borderBottomWidth: '2px',
                  borderBottomStyle: 'solid',
                  borderBottomColor: 'primary'
                }}
              >
                {nowYear}
              </Styled.p>
            </Styled.div>
            <ParentSize>
              {(parent: any) => (
                <YearChart
                  previousYearData={previousYearData}
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
