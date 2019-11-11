/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Bar } from '@vx/shape'
import { Group } from '@vx/group'
import { AxisBottom } from '@vx/axis'
import { scaleBand, scaleLinear } from '@vx/scale'

import { GridRows } from '@vx/grid'

import { IBarChart } from '../../types'

const x = (d: any) => d.day
const y = (d: any) => d.count

interface IDaysChartProps {
  daysChartData: IBarChart[]
  /** The width of the chart */
  width: number
  /** The height of the chart */
  height: number
}

export const DaysChart: React.FC<IDaysChartProps> = ({
  daysChartData,
  width,
  height
}) => {
  const margin = 32

  if (!daysChartData) return null

  const xScale = scaleBand({
    rangeRound: [0, width],
    domain: daysChartData.map(x),
    padding: 0.6
  })

  const yScale = scaleLinear({
    rangeRound: [height, 0],
    domain: [0, Math.max(...daysChartData.map(y))]
  })

  return (
    <svg
      width="100%"
      height={height + margin}
      style={{ overflow: 'visible', marginTop: margin }}
      sx={{
        g: {
          rect: {
            fill: 'primary'
          },
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
        {daysChartData.map((d, i) => {
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
                  <Group key={`tick-${daysChartData[index].day}-${index}`}>
                    <text transform={`translate(${tickX}, ${tickY})`}>
                      {daysChartData[index].label}
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
