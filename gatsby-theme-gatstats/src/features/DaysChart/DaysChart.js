/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { StaticQuery, graphql } from "gatsby"
import { ParentSize } from "@vx/responsive"
import { VxBar } from "./VxBar"

import { CardHeaders } from "../../components/CardHeaders"

export const DaysChart = () => {
  return (
    <StaticQuery
      query={graphql`
        query daysQuery {
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
        const vxBarData = data.allMdx.edges
          .map(item => {
            return {
              day: new Date(item.node.frontmatter.date).getDay(),
            }
          })
          .reduce(
            (items, item) => {
              const { day } = item
              items[day] = items[day] || []
              items[day].push(day)
              return items
            },
            [
              [{ label: "M", day: "Mon", count: 0 }],
              [{ label: "T", day: "Tue", count: 0 }],
              [{ label: "W", day: "Wed", count: 0 }],
              [{ label: "T", day: "Thu", count: 0 }],
              [{ label: "F", day: "Fri", count: 0 }],
              [{ label: "S", day: "Sat", count: 0 }],
              [{ label: "S", day: "Sun", count: 0 }],
            ]
          )
          .map(item => {
            return {
              label: item[0].label,
              day: item[0].day,
              count: item.length,
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
                ml: [0, 2],
                padding: 3,
                flex: 1,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardHeaders heading="Posts" subHeading="By day of the week" />

              <Styled.div
                sx={{
                  mb: 4,
                }}
              >
                <ParentSize>
                  {parent => (
                    <VxBar width={parent.width} height={300} data={vxBarData} />
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
