/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { css } from '@emotion/core'

import { Group } from '@vx/group'
import { withTooltip } from '@vx/tooltip'
import { LinePath } from '@vx/shape'
import { AxisBottom } from '@vx/axis'
import { scaleTime, scaleLinear } from '@vx/scale'
import { curveMonotoneX } from '@vx/curve'
import { GridRows } from '@vx/grid'
import { GlyphDot } from '@vx/glyph'

import { fadeIn } from '../../utils'

import { Tooltipper } from '../Tooltipper'

import { ILineChart } from '../../types'

interface IYearChartProps {
  currentYearData: ILineChart[]
  /** The width of the chart */
  width: number
  /** The height of the chart */
  height: number
}

const YearChartComponent: React.FC<IYearChartProps> = ({ ...props }: any) => {
  const {
    currentYearData,
    width,
    height,
    showTooltip,
    hideTooltip,
    tooltipData,
    tooltipOpen,
    tooltipLeft,
    tooltipTop
  } = props

  if (!currentYearData) return null

  const margin = 32
  let tooltipTimeout = null

  const month = (d: ILineChart) => d.month
  const count = (d: ILineChart) => d.count

  const xScale = scaleTime({
    domain: [0, 11]
  })

  const yScale = scaleLinear({
    domain: [0, Math.max(...currentYearData.map(count))]
  })

  const x = (d: ILineChart) => xScale(month(d))
  const y = (d: ILineChart) => yScale(count(d))

  xScale.range([margin, width - margin])
  yScale.range([height - margin, margin])

  const handleTooltip = ({ cx, cy, d }) => {
    showTooltip({
      tooltipLeft: cx - 24,
      tooltipTop: cy - 36,
      tooltipData: d
    })
  }

  return (
    <Styled.div>
      <svg
        width="100%"
        height={height + margin}
        style={{ overflow: 'hidden' }}
        css={css`
          animation: ${fadeIn} 2s linear;
        `}
        sx={{
          g: {
            path: {
              stroke: 'primary',
              strokeWidth: 3
            },
            '.vx-rows': {
              '.vx-line': {
                stroke: 'textMuted',
                opacity: 0.3
              }
            },
            '.vx-glyph': {
              '.vx-dot-hidden': {
                fill: 'transparent',
                WebkitTapHighlightColor: 'transparent'
              },
              '.vx-dot-fill': {
                fill: 'surface'
              },
              '.vx-dot-outline': {
                fill: 'primary'
              }
            }
          },
          '.vx-axis-bottom': {
            g: {
              '.vx-group': {
                text: {
                  fill: 'textMuted',
                  fontSize: 0,
                  fontFamily: 'body',
                  textAnchor: 'middle'
                }
              }
            }
          }
        }}
      >
        <Group>
          <GridRows
            lineStyle={{ pointerEvents: 'none' }}
            scale={yScale}
            width={width}
            numTicks={6}
          />

          <LinePath data={currentYearData} x={x} y={y} curve={curveMonotoneX} />

          {currentYearData.map((d: any, index: number) => {
            const cx = x(d)
            const cy = y(d)
            return (
              <g key={`line-point-${index}`}>
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
          {(axis: any) => {
            return (
              <g>
                {axis.ticks.map((tick: any, index: number) => {
                  const tickX = tick.to.x
                  const tickY = tick.to.y * 2
                  return (
                    <Group
                      key={`tick-${currentYearData[index].label}-${index}`}
                    >
                      <text transform={`translate(${tickX}, ${tickY})`}>
                        {currentYearData[index].label}
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
        <Tooltipper
          title={tooltipData.monthName}
          value={tooltipData.count}
          left={tooltipLeft}
          top={tooltipTop}
        />
      )}
    </Styled.div>
  )
}

export const YearChart = withTooltip(YearChartComponent)
