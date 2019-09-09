/** @jsx jsx */

import { jsx } from "theme-ui"
import { StaticQuery, graphql } from "gatsby"

import { Histogram } from "./Histogram"

const mockData = require("./mock.data.json")

export const TagsChart = () => {
  return (
    <StaticQuery
      query={graphql`
        query tagssQuery {
          allMdx(filter: { frontmatter: { tags: { ne: null } } }) {
            group(field: frontmatter___tags) {
              fieldValue
              totalCount
            }
          }
        }
      `}
      render={data => {
        const { group } = data.allMdx

        // console.log("group: ", group)

        return (
          <Histogram
            data={group}
            value={d => d.totalCount}
            barHeight={20}
            barGap={5}
          />
        )
      }}
    />
  )
}
