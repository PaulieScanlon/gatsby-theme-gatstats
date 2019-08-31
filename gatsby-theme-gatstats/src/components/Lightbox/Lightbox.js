/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import PropTypes from "prop-types"

export const Lightbox = ({ handleClick, isNavOpen }) => (
  <Styled.div
    className="light-box"
    sx={{
      position: "absolute",
      backgroundColor: "#000",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      opacity: isNavOpen ? 0.5 : 0.5,
      cursor: isNavOpen ? "pointer" : "auto",
      zIndex: 1,
      transition: ".2s linear opacity",
      display: [
        `${isNavOpen ? "block" : "none"}`,
        `${isNavOpen ? "block" : "none"}`,
        "none",
      ],
    }}
    onClick={() => handleClick()}
  />
)

Lightbox.PpopTypes = {
  isNavOpen: PropTypes.bool,
  handleClick: PropTypes.func,
}
