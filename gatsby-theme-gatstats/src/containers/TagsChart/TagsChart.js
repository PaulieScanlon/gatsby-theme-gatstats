/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import { StaticQuery, graphql } from "gatsby"
import { VictoryLineChart } from "./VictoryLineChart"

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
        const { group } = data.allMdx

        return (
          <Styled.div>
            <VictoryLineChart data={group} />
          </Styled.div>
        )
      }}
    />
  )
}
