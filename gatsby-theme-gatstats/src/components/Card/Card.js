/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import PropTypes from "prop-types"

import Img from "gatsby-image"

import { Link } from "../../components/Link"

export const Card = ({ link, date, title, description, fluid }) => (
  <Link
    href={link}
    sx={{
      display: "block",
      textDecoration: "none",
      transition: ".2s linear box-shadow",
      backgroundColor: "mutedLight",
      boxShadow: 0,
      ":hover": {
        boxShadow: 1,
      },
    }}
  >
    <Styled.div>
      <Styled.div
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: [150, 200],
          overflow: "hidden",
        }}
      >
        <Img
          fluid={fluid}
          alt={title}
          style={{
            display: "block",
            width: "100%",
            height: "100%",
          }}
        />
      </Styled.div>
      <Styled.div
        sx={{
          padding: 3,
        }}
      >
        <Styled.h5>{date}</Styled.h5>
        <Styled.h4>{title}</Styled.h4>
        <Styled.p
          sx={{
            marginBottom: 0,
          }}
        >
          {description}
        </Styled.p>
      </Styled.div>
    </Styled.div>
  </Link>
)

Card.propTypes = {
  link: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  fluid: PropTypes.shape({
    aspectRatio: PropTypes.number.isRequired,
    sizes: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
  }),
}
