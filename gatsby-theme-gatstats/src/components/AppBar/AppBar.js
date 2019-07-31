/** @jsx jsx */
import PropTypes from "prop-types"

import { Styled, jsx } from "theme-ui"

export const AppBar = ({ handleOpen }) => {
  return (
    <Styled.div
      sx={{
        alignItems: "center",
        display: "flex",
        backgroundColor: "mutedLight",
        boxSizing: "border-box",
        padding: 3,
        width: "100%",
      }}
    >
      <button onClick={() => handleOpen()}>open nav</button>
    </Styled.div>
  )
}

AppBar.propTypes = {
  handleOpen: PropTypes.func.isRequired,
}
