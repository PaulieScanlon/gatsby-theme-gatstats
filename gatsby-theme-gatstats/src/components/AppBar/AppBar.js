/** @jsx jsx */
import PropTypes from "prop-types"

import { ThemeToggle } from "../ThemeToggle"

import { Styled, jsx } from "theme-ui"
// import { lighten } from "@theme-ui/color"

export const AppBar = ({ onOpen }) => {
  return (
    <Styled.div
      sx={{
        alignItems: "center",
        backgroundColor: "background",
        // bg: lighten("background", 0.04),
        display: "flex",
        justifyContent: "space-between",
        boxSizing: "border-box",
        padding: 3,
        width: "100%",
        zIndex: 2,
        position: "fixed",
        boxShadow: 0,
      }}
    >
      <button onClick={() => onOpen()}>open nav</button>
      <ThemeToggle />
    </Styled.div>
  )
}

AppBar.propTypes = {
  onOpen: PropTypes.func.isRequired,
}
