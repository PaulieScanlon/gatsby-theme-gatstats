/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Group } from "@vx/group"
import { GlyphDot } from "@vx/glyph"
import { LinePath } from "@vx/shape"
import { AxisBottom } from "@vx/axis"
import { scaleTime, scaleLinear } from "@vx/scale"
import { curveMonotoneX } from "@vx/curve"

// accessors
const date = d => d.date
const value = d => d.value

export const VxLine = ({ width, height, data }) => {
  const margin = 16

  // scales
  const xScale = scaleTime({
    // domain: [new Date("2018-01-01"), new Date("2018-12-31")],
    domain: [Math.min(...data.map(date)), Math.max(...data.map(date))],
  })

  const yScale = scaleLinear({
    domain: [0, Math.max(...data.map(value))],
  })

  // positions
  const x = d => xScale(date(d))
  const y = d => yScale(value(d))

  // update scale range to match bounds

  xScale.range([margin, width - margin])
  yScale.range([height, margin])

  return (
    <Styled.div
      sx={{
        svg: {
          g: {
            path: {
              stroke: "primary",
              strokeWidth: 3,
            },
            ".vx-glyph": {
              ".vx-dot-fill": {
                fill: "background",
              },
              ".vx-dot-outline": {
                fill: "primary",
              },
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
      <svg width={width} height={height}>
        <Group>
          <LinePath data={data} x={x} y={y} curve={curveMonotoneX} />
          {data.map((d, i) => {
            const cx = x(d)
            const cy = y(d)
            return (
              <g key={`line-point-${i}`}>
                <GlyphDot className="vx-dot-outline" cx={cx} cy={cy} r={7} />
                <GlyphDot className="vx-dot-fill" cx={cx} cy={cy} r={4} />
              </g>
            )
          })}
        </Group>
        <AxisBottom top={height - margin * 2} scale={xScale}>
          {axis => {
            return (
              <g>
                {axis.ticks.map((tick, index) => {
                  // console.log("tick: ", tick)

                  const tickX = tick.to.x
                  const tickY = tick.to.y * 2
                  const value = tick.formattedValue

                  return (
                    <Group key={`tick-${value}-${index}`}>
                      <text transform={`translate(${tickX}, ${tickY})`}>
                        {value}
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
