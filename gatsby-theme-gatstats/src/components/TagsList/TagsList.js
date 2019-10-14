/** @jsx jsx */
import PropTypes from "prop-types"
import { Styled, jsx } from "theme-ui"

export const TagsList = ({ tags }) => {
  return (
    <Styled.ul
      sx={{
        listStyle: "none",
        display: "flex",
        flexWrap: "wrap",
        padding: 0,
        margin: 0,
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
            fontSize: 1,
            borderRadius: 0,
            borderStyle: "solid",
            borderWidth: 0,
            borderColor: "background",
            padding: 1,
          }}
        >
          {item}
        </Styled.li>
      ))}
    </Styled.ul>
  )
}

TagsList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
}
