/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import PropTypes from "prop-types"

import Img from "gatsby-image"

import { Link } from "../../components/Link"

export const Card = ({ link, date, title, description, fluidImage }) => {
  return (
    <Link
      href={link}
      sx={{
        textDecoration: "none",
      }}
    >
      <Styled.div
        sx={{
          boxShadow: 1,
        }}
      >
        <Img
          css={{
            height: 200,
          }}
          fluid={fluidImage}
          alt={title}
        />
        <Styled.div
          sx={{
            padding: 3,
            backgroundColor: "mutedLight",
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
}

Card.propTypes = {
  link: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  fluidImage: PropTypes.shape({
    base64: PropTypes.string.isRequired,
    aspectRatio: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
    sizes: PropTypes.string.isRequired,
  }),
}
