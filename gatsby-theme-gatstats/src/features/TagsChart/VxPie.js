/** @jsx jsx */
import PropTypes from "prop-types"
import { jsx, Styled } from "theme-ui"
import { Pie } from "@vx/shape"
import { Group } from "@vx/group"

export const VxPie = ({ data, width, height }) => {
  const radius = Math.min(width, height) / 2
  const centerY = height / 2
  const centerX = width / 2

  return (
    <Styled.div
      sx={{
        // backgroundImage: t =>
        //   `radial-gradient(${t.colors.muted}, ${t.colors.background})`,

        padding: 3,
        svg: {
          rect: {
            fill: "none",
          },
          g: {
            path: {
              fill: "primary",
            },
            text: {
              fill: "text",
              fontSize: 0,
            },
          },
        },
      }}
    >
      <svg width="100%" height={height}>
        <rect width={width} height={height} />
        <Group top={centerY} left={centerX}>
          <Pie
            data={data}
            pieValue={d => d.usage}
            outerRadius={radius - 20}
            innerRadius={radius - 80}
            cornerRadius={3}
            padAngle={0.05}
          >
            {pie => {
              return pie.arcs.map((arc, i) => {
                const opacity = 1 / (i + 2)
                const [centroidX, centroidY] = pie.path.centroid(arc)
                const { startAngle, endAngle } = arc
                const hasSpaceForLabel = endAngle - startAngle >= 0.1
                return (
                  <g key={`arc-${arc.data.label}-${i}`}>
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
    </Styled.div>
  )
}

VxPie.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      usage: PropTypes.number.isRequired,
    })
  ),
}
