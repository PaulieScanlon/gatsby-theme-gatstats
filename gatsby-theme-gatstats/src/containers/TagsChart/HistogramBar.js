import React from "react"

export const HistogramBar = ({ barWidth, barHeight, barGap, index }) => {
  let translate = `translate(${0}, ${(barHeight + barGap * 2) * index})`

  return (
    <g transform={translate} className="bar">
      <rect
        width={`${barWidth}%`}
        height={barHeight}
        transform="translate(0, 1)"
        fill="#ff00ff"
      ></rect>
      <text textAnchor="start" x={0} y={barHeight / 2 + 6} fill="#fff">
        {`${barWidth}%`}
      </text>
    </g>
  )
}
