/** @jsx jsx */
import PropTypes from "prop-types"
import { Styled, jsx } from "theme-ui"
// import { lighten } from "@theme-ui/color"

import { Icon } from "../Icon"

export const SearchButton = ({ iconPath, ...props }) => (
  <Styled.div
    as="button"
    {...props}
    sx={{
      backgroundColor: "background",
      border: "none",
      color: "muted",
      cursor: "pointer",
      transition: ".2s linear all",
      ":focus": {
        outline: "none",
      },
      ":hover": {
        color: "text",
      },
    }}
  >
    <Icon iconPath={iconPath} />
  </Styled.div>
)

SearchButton.propTypes = {
  iconPath: PropTypes.string.isRequired,
}
