/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Bar } from "@vx/shape"
import { Group } from "@vx/group"
import { AxisBottom } from "@vx/axis"
import { scaleBand, scaleLinear } from "@vx/scale"
import { withTooltip, Tooltip } from "@vx/tooltip"
import { GridRows } from "@vx/grid"

const x = d => d.day
const y = d => d.count

const VxBarChart = ({
  showTooltip,
  hideTooltip,
  tooltipData,
  tooltipOpen,
  tooltipLeft,
  tooltipTop,
  tooltipTimeout,
  width,
  height,
  data,
}) => {
  if (!data) return null

  const xScale = scaleBand({
    rangeRound: [0, width],
    domain: data.map(x),
    padding: 0.6,
  })

  const yScale = scaleLinear({
    rangeRound: [height, 0],
    domain: [0, Math.max(...data.map(y))],
  })

  const handleTooltip = ({ barX, barY, d }) => {
    showTooltip({
      tooltipLeft: barX - 15,
      tooltipTop: barY - 34,
      tooltipData: d,
    })
  }

  return (
    <Styled.div
      sx={{
        ".vx-tooltip-portal": {
          ".tooltip-text": {
            color: "primary",
          },
        },
        svg: {
          rect: {
            fill: "none",
          },
          ".vx-rows": {
            ".vx-line": {
              stroke: "muted",
              opacity: 0.3,
            },
          },
          ".vx-group": {
            rect: {
              fill: "primary",
              cursor: "pointer",
              WebkitTapHighlightColor: "transparent",
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
        <Group>
          <GridRows
            lineStyle={{ pointerEvents: "none" }}
            scale={yScale}
            width={width}
          />
          {data.map((d, i) => {
            const day = x(d)
            const opacity = 0.1 * (d.count + 2)
            const barWidth = xScale.bandwidth()
            const barHeight = height - yScale(y(d))
            const barX = xScale(day)
            const barY = height - barHeight

            return (
              <Bar
                key={`bar-${day}-${i}`}
                x={barX}
                y={barY}
                width={barWidth}
                height={barHeight}
                rx={8}
                opacity={opacity}
                onMouseEnter={() => {
                  if (tooltipTimeout) clearTimeout(tooltipTimeout)
                  handleTooltip({ barX, barY, d })
                }}
                onMouseLeave={() => {
                  tooltipTimeout = setTimeout(() => {
                    hideTooltip()
                  }, 500)
                }}
                onTouchStart={() => {
                  if (tooltipTimeout) clearTimeout(tooltipTimeout)
                  handleTooltip({ barX, barY, d })
                }}
                onTouchEnd={() => {
                  tooltipTimeout = setTimeout(() => {
                    hideTooltip()
                  }, 500)
                }}
              />
            )
          })}
        </Group>
        <AxisBottom top={height} scale={xScale}>
          {axis => {
            return (
              <g>
                {axis.ticks.map((tick, index) => {
                  const tickX = tick.to.x
                  const tickY = tick.to.y * 4
                  return (
                    <Group key={`tick-${data[index].day}-${index}`}>
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
      {tooltipOpen && (
        <Tooltip left={tooltipLeft} top={tooltipTop}>
          <div className="tooltip-text">
            {tooltipData.day}
            <strong> {tooltipData.count}</strong>
          </div>
        </Tooltip>
      )}
    </Styled.div>
  )
}

export const VxBar = withTooltip(VxBarChart)
