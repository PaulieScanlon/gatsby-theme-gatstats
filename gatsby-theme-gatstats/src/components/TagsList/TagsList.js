/** @jsx jsx */
import PropTypes from "prop-types"
import { Styled, jsx } from "theme-ui"
// import { lighten } from "@theme-ui/color"

export const TagsList = ({ tags, size }) => {
  return (
    <Styled.ul
      sx={{
        listStyle: "none",
        display: "flex",
        flexWrap: "wrap",
        padding: 0,
        margin: 0,
        marginBottom: size === "small" ? 0 : 3,
        "> li:nth-of-type(n)": {
          marginRight: 1,
          marginBottom: 1,
        },
      }}
    >
      {tags.map((item, index) => (
        <Styled.li
          key={index}
          sx={{
            color: "muted",
            fontSize: size === "small" ? 0 : 2,
            borderRadius: 1,
            borderStyle: "solid",
            borderWidth: 0,
            borderColor: "background",
            backgroundColor: "background",
            // bg: lighten("background", 0.04),
          }}
        >
          {item}
        </Styled.li>
      ))}
    </Styled.ul>
  )
}

TagsList.defaultProps = {
  size: "small",
}

TagsList.propTypes = {
  size: PropTypes.oneOf(["small", "large"]),
  tags: PropTypes.arrayOf(PropTypes.string),
}
