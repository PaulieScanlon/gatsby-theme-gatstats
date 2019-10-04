/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { StaticQuery, graphql } from "gatsby"
import { ParentSize } from "@vx/responsive"
import { VxPie } from "./VxPie"

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
              m: 3,
            }}
          >
            <Styled.h5 sx={{ mb: 0 }}>TAGS</Styled.h5>
            <Styled.h6 sx={{ color: "muted" }}>By popularity</Styled.h6>
            <ParentSize>
              {parent => (
                <VxPie width={parent.width} height={300} data={vxPieData} />
              )}
            </ParentSize>
          </Styled.div>
        )
      }}
    />
  )
}
