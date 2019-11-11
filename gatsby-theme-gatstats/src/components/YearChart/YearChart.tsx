/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Group } from '@vx/group'
import { LinePath } from '@vx/shape'
import { AxisBottom } from '@vx/axis'
import { scaleTime, scaleLinear } from '@vx/scale'
import { curveMonotoneX } from '@vx/curve'
import { GridRows } from '@vx/grid'

import { ILineChart } from '../../types'

interface IYearChartProps {
  yearChartData: ILineChart[]
  /** The width of the chart */
  width: number
  /** The height of the chart */
  height: number
}

export const YearChart: React.FC<IYearChartProps> = ({
  yearChartData,
  width,
  height
}) => {
  const margin = 32

  const month = (d: ILineChart) => d.month
  const count = (d: ILineChart) => d.count

  if (!yearChartData) return null

  const xScale = scaleTime({
    domain: [0, 11]
  })

  const yScale = scaleLinear({
    domain: [0, Math.max(...yearChartData.map(count))]
  })

  const x = (d: ILineChart) => xScale(month(d))
  const y = (d: ILineChart) => yScale(count(d))

  xScale.range([margin, width - margin])
  yScale.range([height - margin, margin])

  return (
    <svg
      width="100%"
      height={height + margin}
      style={{ overflow: 'hidden' }}
      sx={{
        backgroundColor: 'background',
        g: {
          path: {
            stroke: 'secondary',
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
        <LinePath data={yearChartData} x={x} y={y} curve={curveMonotoneX} />
      </Group>
      <AxisBottom top={height} scale={xScale}>
        {(axis: any) => {
          return (
            <g>
              {axis.ticks.map((tick: any, index: number) => {
                const tickX = tick.to.x
                const tickY = tick.to.y * 2
                return (
                  <Group key={`tick-${yearChartData[index].label}-${index}`}>
                    <text transform={`translate(${tickX}, ${tickY})`}>
                      {yearChartData[index].label}
                    </text>
                  </Group>
                )
              })}
            </g>
          )
        }}
      </AxisBottom>
    </svg>
  )
}
