/** @jsx jsx */

import { jsx, Styled } from "theme-ui"
import { StaticQuery, graphql } from "gatsby"
import { ParentSize } from "@vx/responsive"
import { VxLine } from "./VxLine"

import { CardHeaders } from "../../components/CardHeaders"

const currentYear = new Date().getFullYear()

export const YearChart = () => {
  return (
    <StaticQuery
      query={graphql`
        query yearQuery {
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
        const vxLineData = data.allMdx.edges
          .map(item => {
            return {
              month: new Date(item.node.frontmatter.date).getMonth(),
              year: new Date(item.node.frontmatter.date).getFullYear(),
            }
          })
          .filter(item => item.year === currentYear)
          .reduce(
            (items, item) => {
              const { month } = item
              items[month] = items[month] || []
              items[month].push(month)
              return items
            },
            [
              [{ label: "J", monthName: "Jan", month: 0, count: 0 }],
              [{ label: "F", monthName: "Feb", month: 1, count: 0 }],
              [{ label: "M", monthName: "Mar", month: 2, count: 0 }],
              [{ label: "A", monthName: "Apr", month: 3, count: 0 }],
              [{ label: "M", monthName: "May", month: 4, count: 0 }],
              [{ label: "J", monthName: "Jun", month: 5, count: 0 }],
              [{ label: "J", monthName: "Jul", month: 6, count: 0 }],
              [{ label: "A", monthName: "Aug", month: 7, count: 0 }],
              [{ label: "S", monthName: "Sep", month: 8, count: 0 }],
              [{ label: "O", monthName: "Oct", month: 9, count: 0 }],
              [{ label: "N", monthName: "Nov", month: 10, count: 0 }],
              [{ label: "D", monthName: "Dec", month: 11, count: 0 }],
            ]
          )
          .map(item => {
            return {
              label: item[0].label,
              monthName: item[0].monthName,
              month: item[0].month,
              count: item.length - 1,
            }
          })

        return (
          <Styled.div
            sx={{
              display: "flex",
              height: "100%",
            }}
          >
            <Styled.div
              sx={{
                borderRadius: 1,
                backgroundColor: "surface",
                mb: 3,
                padding: 3,
                flex: 1,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardHeaders heading="Posts" subHeading="This Year" />
              <Styled.div
                sx={{
                  mb: 4,
                }}
              >
                <ParentSize>
                  {parent => (
                    <VxLine
                      width={parent.width}
                      height={200}
                      data={vxLineData}
                    />
                  )}
                </ParentSize>
              </Styled.div>
            </Styled.div>
          </Styled.div>
        )
      }}
    />
  )
}
