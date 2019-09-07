/** @jsx jsx */
import PropTypes from "prop-types"
import { Styled, jsx } from "theme-ui"
import { lighten } from "@theme-ui/color"

import { Icon } from "../Icon"

export const SearchButton = ({ iconPath, ...props }) => (
  <Styled.div
    as="button"
    {...props}
    sx={{
      bg: lighten("background", 0.04),
      border: "none",
      borderBottomStyle: "solid",
      borderBottomWidth: 2,
      borderColor: lighten("background", 0.5),
      color: "text",
      cursor: "pointer",
      //@TODO create proper focus style
      ":focus": {
        outline: "none",
      },
    }}
  >
    <Icon iconPath={iconPath} />
  </Styled.div>
)

SearchButton.propTypes = {
  iconPath: PropTypes.string.isRequired,
}
