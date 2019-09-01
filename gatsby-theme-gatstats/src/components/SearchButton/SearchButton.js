/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import PropTypes from "prop-types"

import { Icon } from "../Icon"

export const SearchButton = ({ iconPath, ...props }) => (
  <Styled.div
    as="button"
    {...props}
    sx={{
      backgroundColor: "mutedLight",
      border: "none",
      borderBottomStyle: "solid",
      borderBottomWidth: 2,
      borderColor: "mutedText",
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
