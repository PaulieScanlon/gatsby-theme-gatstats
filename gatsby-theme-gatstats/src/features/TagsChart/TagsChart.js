/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { StaticQuery, graphql } from "gatsby"
import { ParentSize } from "@vx/responsive"
import { VxPie } from "./VxPie"

import { CardHeaders } from "../../components/CardHeaders"

export const TagsChart = () => {
  return (
    <StaticQuery
      query={graphql`
        query tagsQuery {
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
        const vxPieData = data.allMdx.group
          .map(item => {
            return {
              label: item.fieldValue,
              usage: item.totalCount,
            }
          })
          .sort((a, b) => b.usage - a.usage)
          .splice(0, 5)

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
                margin: 3,
                padding: 3,
                flex: 1,
                overflow: "hidden",
              }}
            >
              <CardHeaders heading="Tags" subHeading="By popularity" />
              <Styled.div
                sx={{
                  mb: 4,
                }}
              >
                <ParentSize>
                  {parent => (
                    <VxPie width={parent.width} height={300} data={vxPieData} />
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
