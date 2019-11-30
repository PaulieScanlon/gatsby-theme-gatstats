/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled, useThemeUI } from 'theme-ui'
import { css } from '@emotion/core'

import { Pie } from '@vx/shape'
import { Group } from '@vx/group'
import { withTooltip } from '@vx/tooltip'

import { Tooltipper } from '../Tooltipper'

import { colorRange, fadeIn } from '../../utils'

import { IPieChart } from '../../types'

interface IYearChartProps {
  tagsChartData: IPieChart[]
  /** The width of the chart */
  width: number
  /** The height of the chart */
  height: number
}

const TagsChartComponent: React.FC<IYearChartProps> = ({ ...props }: any) => {
  const context = useThemeUI()
  const {
    tagsChartData,
    width,
    height,
    showTooltip,
    hideTooltip,
    tooltipData,
    tooltipOpen,
    tooltipLeft,
    tooltipTop
  } = props

  if (!tagsChartData) return null

  const margin = 32
  let tooltipTimeout = null

  const radius = Math.min(width, height) / 2
  const centerX = width / 2
  const centerY = height / 2

  const colorScale = colorRange(
    context.theme.colors!.primary!,
    context.theme.colors!.secondary!,
    tagsChartData.length
  )

  const handleTooltip = ({ arc, index }) => {
    const d = {
      usage: arc.data.usage,
      label: arc.data.label,
      color: colorScale[index]
    }
    showTooltip({
      tooltipData: d
    })
  }

  return (
    <Styled.div
      css={css`
        animation: ${fadeIn} 2s linear;
      `}
    >
      <svg
        width="100%"
        height={height + margin}
        sx={{
          rect: {
            fill: 'none'
          },
          '.vx-group': {
            '.chart-label': {
              fill: 'text',
              fontSize: 0,
              fontFamily: 'body'
            },
            '.tooltip-usage': {
              fill: 'text',
              fontSize: 6,
              fontFamily: 'body'
            },
            '.tooltip-label': {
              fontSize: 0,
              fontFamily: 'body'
            }
          }
        }}
      >
        <rect width={width} height={height} />
        <Group top={centerY + margin / 2} left={centerX}>
          <Pie
            data={tagsChartData}
            pieValue={(d: any) => d.usage}
            outerRadius={radius - 0}
            innerRadius={radius - 60}
            cornerRadius={6}
            padAngle={0.04}
          >
            {(pie: any) => {
              return pie.arcs.map((arc: any, index: number) => {
                const [centroidX, centroidY] = pie.path.centroid(arc)
                const { startAngle, endAngle } = arc
                const hasSpaceForLabel = endAngle - startAngle >= 0.1
                return (
                  <g
                    key={`arc-${arc.data.label}-${index}`}
                    onMouseEnter={() => {
                      if (tooltipTimeout) clearTimeout(tooltipTimeout)
                      handleTooltip({ arc, index })
                    }}
                    onMouseLeave={() => {
                      tooltipTimeout = setTimeout(() => {
                        hideTooltip()
                      }, 500)
                    }}
                    onTouchStart={() => {
                      if (tooltipTimeout) clearTimeout(tooltipTimeout)
                      handleTooltip({ arc, index })
                    }}
                    onTouchEnd={() => {
                      tooltipTimeout = setTimeout(() => {
                        hideTooltip()
                      }, 500)
                    }}
                  >
                    {tooltipOpen && (
                      <g>
                        <text
                          dy="-.1em"
                          textAnchor="middle"
                          className="tooltip-usage"
                        >
                          {`x${tooltipData.usage}`}
                        </text>
                        <text
                          dy="1.2em"
                          textAnchor="middle"
                          className="tooltip-label"
                          fill={tooltipData.color}
                        >
                          {tooltipData.label}
                        </text>
                      </g>
                    )}

                    <path d={pie.path(arc)} fill={colorScale[index]} />
                    {hasSpaceForLabel && (
                      <text
                        x={centroidX}
                        y={centroidY}
                        dy=".32em"
                        textAnchor="middle"
                        className="chart-label"
                      >
                        {arc.data.label}
                      </text>
                    )}
                  </g>
                )
              })
            }}
          </Pie>
        </Group>
      </svg>
    </Styled.div>
  )
}

export const TagsChart = withTooltip(TagsChartComponent)
