/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import PropTypes from "prop-types"

export const CardHeaders = ({ heading, subHeading }) => (
  <Styled.div
    sx={{
      mb: 4,
    }}
  >
    <Styled.h5 sx={{ mb: 0, textTransform: "uppercase" }}>{heading}</Styled.h5>
    <Styled.h6 sx={{ color: "muted" }}>{subHeading}</Styled.h6>
  </Styled.div>
)

CardHeaders.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
}
