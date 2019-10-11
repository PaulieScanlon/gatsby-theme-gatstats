/** @jsx jsx */
import PropTypes from "prop-types"
import { ThemeToggle } from "../ThemeToggle"
import { Styled, jsx } from "theme-ui"

export const AppBar = ({ onOpen }) => {
  return (
    <Styled.div
      sx={{
        alignItems: "center",
        backgroundColor: "surface",
        display: "flex",
        justifyContent: "space-between",
        boxSizing: "border-box",
        boxShadow: 0,
        padding: 3,
        width: "100%",
        zIndex: 2,
        position: "fixed",
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
