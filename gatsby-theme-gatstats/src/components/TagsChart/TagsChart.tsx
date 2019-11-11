/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Pie } from '@vx/shape'
import { Group } from '@vx/group'

import { IPieChart } from '../../types'

interface IYearChartProps {
  tagsChartData: IPieChart[]
  /** The width of the chart */
  width: number
  /** The height of the chart */
  height: number
}

export const TagsChart: React.FC<IYearChartProps> = ({
  tagsChartData,
  width,
  height
}) => {
  const margin = 32

  if (!tagsChartData) return null

  const radius = Math.min(width, height) / 2
  const centerY = height / 2
  const centerX = width / 2

  return (
    <svg
      width="100%"
      height={height + margin}
      sx={{
        rect: {
          fill: 'none'
        },
        '.vx-group': {
          path: {
            fill: 'primary'
          },
          text: {
            fill: 'text',
            fontSize: 0,
            fontFamily: 'body',
            textAnchor: 'middle'
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
              const opacity = 1 / (index + 2)
              const [centroidX, centroidY] = pie.path.centroid(arc)
              const { startAngle, endAngle } = arc
              const hasSpaceForLabel = endAngle - startAngle >= 0.1
              return (
                <g key={`arc-${arc.data.label}-${index}`}>
                  <path d={pie.path(arc)} fillOpacity={opacity} />
                  {hasSpaceForLabel && (
                    <text
                      x={centroidX}
                      y={centroidY}
                      dy=".33em"
                      textAnchor="middle"
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
  )
}
