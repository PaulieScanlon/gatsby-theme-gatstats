/** @jsx jsx */
import PropTypes from "prop-types"

import { ThemeToggle } from "../ThemeToggle"

import { Styled, jsx } from "theme-ui"

export const AppBar = ({ handleOpen }) => {
  return (
    <Styled.div
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "background",
        boxSizing: "border-box",
        padding: 3,
        width: "100%",
        zIndex: 2,
        position: "fixed",
        boxShadow: 0,
      }}
    >
      <button onClick={() => handleOpen()}>open nav</button>
      <ThemeToggle />
    </Styled.div>
  )
}

AppBar.propTypes = {
  handleOpen: PropTypes.func.isRequired,
}
