/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Group } from "@vx/group"
import { GlyphDot } from "@vx/glyph"
import { LinePath } from "@vx/shape"
import { AxisBottom } from "@vx/axis"
import { scaleTime, scaleLinear } from "@vx/scale"
import { curveMonotoneX } from "@vx/curve"
import { withTooltip, Tooltip } from "@vx/tooltip"
import { GridRows } from "@vx/grid"

const month = d => d.month
const count = d => d.count

const VxLineChart = ({
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
  const margin = 32

  if (!data) return null

  const xScale = scaleTime({
    domain: [0, 11],
  })

  const yScale = scaleLinear({
    domain: [0, Math.max(...data.map(count))],
  })

  const x = d => xScale(month(d))
  const y = d => yScale(count(d))

  xScale.range([margin, width - margin])
  yScale.range([height - margin, margin])

  const handleTooltip = ({ cx, cy, d }) => {
    showTooltip({
      tooltipLeft: cx - 24,
      tooltipTop: cy - 36,
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
          g: {
            path: {
              stroke: "primary",
              strokeWidth: 3,
            },
            ".vx-rows": {
              ".vx-line": {
                stroke: "muted",
                opacity: 0.3,
              },
            },
            ".vx-glyph": {
              ".vx-dot-hidden": {
                fill: "transparent",
                cursor: "pointer",
                WebkitTapHighlightColor: "transparent",
              },
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
      <svg width="100%" height={height} style={{ overflow: "visible" }}>
        <Group>
          <GridRows
            lineStyle={{ pointerEvents: "none" }}
            scale={yScale}
            width={width}
            numTicks={6}
          />
          <LinePath data={data} x={x} y={y} curve={curveMonotoneX} />

          {data.map((d, i) => {
            const cx = x(d)
            const cy = y(d)
            return (
              <g key={`line-point-${i}`}>
                <GlyphDot className="vx-dot-outline" cx={cx} cy={cy} r={7} />
                <GlyphDot className="vx-dot-fill" cx={cx} cy={cy} r={4} />
                <GlyphDot
                  className="vx-dot-hidden"
                  cx={cx}
                  cy={cy}
                  r={30}
                  onMouseEnter={() => {
                    if (tooltipTimeout) clearTimeout(tooltipTimeout)
                    handleTooltip({ cx, cy, d })
                  }}
                  onMouseLeave={() => {
                    tooltipTimeout = setTimeout(() => {
                      hideTooltip()
                    }, 500)
                  }}
                  onTouchStart={() => {
                    if (tooltipTimeout) clearTimeout(tooltipTimeout)
                    handleTooltip({ cx, cy, d })
                  }}
                  onTouchEnd={() => {
                    tooltipTimeout = setTimeout(() => {
                      hideTooltip()
                    }, 500)
                  }}
                />
              </g>
            )
          })}
        </Group>
        <AxisBottom top={height} scale={xScale}>
          {axis => {
            return (
              <g>
                {axis.ticks.map((tick, index) => {
                  const tickX = tick.to.x
                  const tickY = tick.to.y * 2
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
            {tooltipData.monthName}
            <strong> {tooltipData.count}</strong>
          </div>
        </Tooltip>
      )}
    </Styled.div>
  )
}

export const VxLine = withTooltip(VxLineChart)
