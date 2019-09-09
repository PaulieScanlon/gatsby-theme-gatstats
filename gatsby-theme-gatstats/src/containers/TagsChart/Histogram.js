import React from "react"
import * as d3 from "d3"

import { HistogramBar } from "./HistogramBar"

export const Histogram = ({ data, barHeight, barGap, value }) => {
  const histogram = d3.histogram()
  histogram.thresholds(data.length).value(value)
  console.log(histogram(data))
  const dataLength = data.length
  const chartHeight = (dataLength - 1) * barHeight + dataLength * barGap

  return (
    <svg
      width="100%"
      height={chartHeight + barGap}
      style={{ border: "1px solid white" }}
    >
      <g className="histogram">
        <g className="bars">
          {histogram(data).map((bar, index) => {
            return (
              <HistogramBar
                key={`historgram-bar-${index}`}
                index={index}
                barWidth={Math.round((bar.length / dataLength) * 100)}
                barHeight={barHeight}
                barGap={barGap}
              />
            )
          })}
        </g>
      </g>
    </svg>
  )
}
