/** @jsx jsx */
import { jsx, Styled, useThemeUI } from 'theme-ui'
import { css } from '@emotion/core'

import { Group } from '@vx/group'
import { withTooltip } from '@vx/tooltip'
import { Bar } from '@vx/shape'
import { AxisBottom } from '@vx/axis'
import { scaleBand, scaleLinear } from '@vx/scale'
import { GridRows } from '@vx/grid'

import { Tooltipper } from '../Tooltipper'

import { fadeIn, colorRange, dayNames } from '../../utils'
import { IBarChart } from '../../types'

const x = (d: any) => d.day
const y = (d: any) => d.count

interface IDaysChartProps {
  /** Current years data */
  currentYearData: IBarChart[]
  /** The width of the chart */
  width: number
  /** The height of the chart */
  height: number
}

const DaysChartComponent: React.FC<IDaysChartProps> = ({ ...props }: any) => {
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

  const context = useThemeUI()

  const margin = 32
  let tooltipTimeout = null

  const xScale = scaleBand({
    rangeRound: [0, width],
    domain: currentYearData.map(x),
    padding: 0.6
  })

  const yScale = scaleLinear({
    rangeRound: [height, 0],
    domain: [0, Math.max(...currentYearData.map(y))]
  })

  const colorScale = colorRange(
    context.theme.colors!.primary!,
    context.theme.colors!.secondary!,
    currentYearData.length
  )

  const handleTooltip = ({ barX, barY, d }) => {
    showTooltip({
      tooltipLeft: barX - 18,
      tooltipTop: barY,
      tooltipData: d
    })
  }

  return (
    <Styled.div>
      <svg
        width="100%"
        height={height + margin}
        style={{ overflow: 'visible', marginTop: margin }}
        css={css`
          animation: ${fadeIn} 2s linear;
        `}
        sx={{
          g: {
            '.vx-rows': {
              '.vx-line': {
                stroke: 'textMuted',
                opacity: 0.3
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
          />
          {currentYearData.map((d: any, index: number) => {
            const day = x(d)
            const barWidth = xScale.bandwidth()
            const barHeight = height - yScale(y(d))
            const barX = xScale(day)
            const barY = height - barHeight

            return (
              <Bar
                key={`bar-${day}-${index}`}
                x={barX}
                y={barY}
                width={barWidth}
                height={barHeight}
                rx={8}
                fill={colorScale[index]}
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
          {(axis: any) => {
            return (
              <g>
                {axis.ticks.map((tick: any, index: number) => {
                  const tickX = tick.to.x
                  const tickY = tick.to.y * 4
                  return (
                    <Group key={`tick-${currentYearData[index].day}-${index}`}>
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
          title={tooltipData.day}
          value={tooltipData.count}
          left={tooltipLeft}
          top={tooltipTop}
        />
      )}
    </Styled.div>
  )
}

export const DaysChart = withTooltip(DaysChartComponent)
