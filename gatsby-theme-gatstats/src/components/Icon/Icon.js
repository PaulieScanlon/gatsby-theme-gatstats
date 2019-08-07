import React from "react"
import PropTypes from "prop-types"

export const Icon = ({ iconPath }) => {
  return (
    <svg
      fill="currentcolor"
      role="img"
      viewBox={`0 0 24 24`}
      preserveAspectRatio="xMidYMid meet"
      x="0"
      y="0"
      width="24px"
      height="24px"
    >
      <path d={iconPath} />
      <path id="background" fill="none" d="M0 0L24 0 24 24 0 24z" />
    </svg>
  )
}

Icon.propTypes = {
  iconPath: PropTypes.string.isRequired,
}
