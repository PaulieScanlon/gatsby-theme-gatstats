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
        // TODO create an array of dates from Jan to Dec then add the counts to that rather than
        // trying to create them from map and reduce. The chart needs all the months
        // regardless of if there's an associated value
        const prepData = data.allMdx.edges
          .map(item => {
            let newDate = new Date(item.node.frontmatter.date)
            return {
              day: newDate.getDay(),
              month: newDate.getMonth(),
              year: newDate.getFullYear(),
              date: item.node.frontmatter.date,
            }
          })
          .filter(item => item.year === currentYear)
          .reduce((items, item) => {
            let { date } = item

            items[date] = items[date] = {
              date: new Date(date),
              value: items[date] ? items[date].value + 1 : 1,
            }
            return items
          }, [])

        const vxLineData = Object.keys(prepData).map(item => {
          return { date: prepData[item].date, value: prepData[item].value }
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
                margin: 3,
                padding: 3,
                boxShadow: 0,
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
                  mb: 3,
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

//date: Tue Oct 08 2019 14:27:51 GMT+0100 (British Summer Time) {}
//value: 1306
