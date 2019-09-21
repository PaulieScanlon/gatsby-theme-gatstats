import React from "react"

import {
  VictoryChart,
  VictoryScatter,
  VictoryAxis,
  VictoryTooltip,
} from "victory"

import { monthNames } from "../../utils/formatDate"

export const VictoryLineChart = ({ data }) => {
  const theData = data.map(item => {
    return {
      tag: item.fieldValue,
      dates: item.edges.map(date => {
        return {
          date: date.node.frontmatter.date,
          tag: item.fieldValue,
          amount: 1,
        }
      }),
    }
  })

  return (
    <VictoryChart
      padding={{ left: 15, bottom: 30, right: 15 }}
      categories={{
        x: monthNames,
      }}
      domainPadding={{ y: 15 }}
      standalone={true}
    >
      {theData.map((scatter, index) => {
        let yIndex = index + 1
        const chartData = scatter.dates.map(item => {
          return {
            x: new Date(item.date).getMonth() + 1,
            y: yIndex,
            label: item.tag,
          }
        })

        return (
          <VictoryScatter
            key={index}
            size={7}
            data={[...chartData]}
            labelComponent={<VictoryTooltip />}
          />
        )
      })}
      <VictoryAxis crossAxis={false} />
    </VictoryChart>
  )
}

// VictoryLineChart.PropTypes = {
//   data:
// }
