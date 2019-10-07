/** @jsx jsx */
// import React from "react"
// import PropTypes from "prop-types"
import { jsx, Styled } from "theme-ui"
import { Bar, Line } from "@vx/shape"
import { Group } from "@vx/group"
import { AxisBottom } from "@vx/axis"
import { scaleBand, scaleLinear } from "@vx/scale"

// accessors
const x = d => d.day
const y = d => d.count

export const VxBar = ({ data, width, height }) => {
  // bounds
  const xMax = width
  const yMax = height

  // scales
  const xScale = scaleBand({
    rangeRound: [0, xMax],
    domain: data.map(x),
    padding: 0.4,
  })

  const yScale = scaleLinear({
    rangeRound: [yMax, 0],
    domain: [0, Math.max(...data.map(y))],
  })

  return (
    <Styled.div
      sx={{
        svg: {
          rect: {
            fill: "none",
          },
          ".vx-group": {
            rect: {
              fill: "primary",
            },
          },
          ".vx-axis-bottom": {
            g: {
              g: {
                text: {
                  fill: "muted",
                  fontSize: 1,
                  textAnchor: "middle",
                },
              },
            },
          },
        },
      }}
    >
      <svg width="100%" height={height} style={{ overflow: "visible" }}>
        <rect width={width} height={height} />
        <Group>
          {data.map((d, i) => {
            const day = x(d)
            const barWidth = 16
            const barHeight = yMax - yScale(y(d))
            const barX = xScale(day)
            const barY = yMax - barHeight

            return (
              <Bar
                key={`bar-${day}-${i}`}
                x={barX}
                y={barY}
                width={barWidth}
                height={barHeight}
                rx={8}
              />
            )
          })}
        </Group>
        <AxisBottom
          top={yMax}
          // left={-10}
          scale={xScale}
          hideAxisLine={true}
          tickLabelProps={() => ({
            textAnchor: "middle",
          })}
        >
          {axis => {
            return (
              <g>
                {axis.ticks.map((tick, index) => {
                  // TODO the 14 and8 is hard coded to center the text... they shouldn't be
                  const tickX = tick.to.x - 14
                  const tickY = tick.to.y + 8
                  return (
                    <Group key={`tick-${data[index].day}-{index}`}>
                      <text transform={`translate(${tickX}, ${tickY})`}>
                        {data[index].label}
                      </text>
                    </Group>
                  )
                })}
              </g>
            )
          }}
        </AxisBottom>
      </svg>
    </Styled.div>
  )
}
