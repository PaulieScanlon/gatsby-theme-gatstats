/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled, useThemeUI } from 'theme-ui'
import { css } from '@emotion/core'

import { Pie } from '@vx/shape'
import { Group } from '@vx/group'
import { withTooltip } from '@vx/tooltip'

import { colorRange, fadeIn } from '../../utils'

import { IPieChart } from '../../types'

interface ITooltip {
  index: number
  arc: any
}

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
    tooltipOpen
  } = props

  if (!tagsChartData) return null

  const margin = 32
  let tooltipTimeout: number | null = null

  const radius = Math.min(width, height) / 2
  const centerX = width / 2
  const centerY = height / 2

  const colorScale = colorRange(
    context.theme.colors!.primary!,
    context.theme.colors!.secondary!,
    tagsChartData.length
  )

  const handleTooltip = ({ arc, index }: ITooltip) => {
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
      sx={{
        mt: -3
      }}
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
            innerRadius={radius - 40}
            cornerRadius={4}
            padAngle={0.04}
          >
            {(pie: any) => {
              return pie.arcs.map((arc: any, index: number) => (
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
                        dy=".1em"
                        textAnchor="middle"
                        className="tooltip-usage"
                      >
                        {`x${tooltipData.usage}`}
                      </text>
                      <text
                        dy="1.6em"
                        textAnchor="middle"
                        className="tooltip-label"
                        fill={tooltipData.color}
                      >
                        {tooltipData.label}
                      </text>
                    </g>
                  )}

                  <path d={pie.path(arc)} fill={colorScale[index]} />
                </g>
              ))
            }}
          </Pie>
        </Group>
      </svg>
      <Styled.div
        sx={{
          mt: 2
        }}
      >
        <ul
          sx={{
            m: 0,
            p: 0,
            columnCount: 2,
            columnRule: theme => `1px solid ${theme.colors.surface}`,
            backgroundColor: 'background',
            borderRadius: 1
          }}
        >
          {tagsChartData.map((item: IPieChart, index: number) => (
            <li
              key={index}
              sx={{
                display: 'flex',
                listStyle: 'none',
                breakInside: 'avoid',
                p: 2,
                fontSize: 0,
                justifyContent: 'space-between'
              }}
              style={{ color: colorScale[index] }}
            >
              {item.label}
              <strong>x{item.usage}</strong>
            </li>
          ))}
        </ul>
      </Styled.div>
    </Styled.div>
  )
}

export const TagsChart = withTooltip(TagsChartComponent, {})
