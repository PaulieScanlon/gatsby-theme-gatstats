/** @jsx jsx */
import PropTypes from "prop-types"

import { Styled, jsx } from "theme-ui"

export const Content = ({ children, marginLeft }) => {
  return (
    <Styled.div
      sx={{
        backgroundColor: "background",
        height: "1000px",
        ml: [0, 0, marginLeft],
      }}
    >
      {children}
    </Styled.div>
  )
}

Content.propTypes = {
  children: PropTypes.element.isRequired,
  marginLeft: PropTypes.number.isRequired,
}
