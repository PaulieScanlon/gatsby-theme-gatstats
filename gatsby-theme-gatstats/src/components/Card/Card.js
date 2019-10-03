/** @jsx jsx */
import PropTypes from "prop-types"
import { Styled, jsx } from "theme-ui"
// import { lighten } from "@theme-ui/color"

import Img from "gatsby-image"

import { TagsList } from "../TagsList"
import { Link } from "../Link"

export const Card = ({
  link,
  date,
  title,
  tags,
  excerpt,
  fluid,
  timeToRead,
  wordCount,
}) => (
  <Link
    href={link}
    sx={{
      backgroundColor: "background",
      // bg: lighten("background", 0.04),
      boxShadow: 0,
      display: "block",
      height: "100%",
      textDecoration: "none",
      transition: ".2s linear box-shadow",
      ":hover": {
        boxShadow: 1,
      },
    }}
  >
    <Styled.div
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {fluid && (
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
      )}
      <Styled.div
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          padding: 3,
        }}
      >
        <Styled.h6
          sx={{
            color: "primary",
          }}
        >
          {date}
        </Styled.h6>
        <Styled.h4
          sx={{
            color: "text",
          }}
        >
          {title}
        </Styled.h4>
        <Styled.p
          sx={{
            flexGrow: 1,
          }}
        >
          {excerpt}
        </Styled.p>
        <Styled.p
          sx={{
            fontSize: [1],
          }}
        >{`${timeToRead} min read / ${wordCount.words} words`}</Styled.p>
        <TagsList tags={tags} />
      </Styled.div>
    </Styled.div>
  </Link>
)

Card.propTypes = {
  link: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  excerpt: PropTypes.string.isRequired,
  fluid: PropTypes.oneOfType([
    PropTypes.shape({
      aspectRatio: PropTypes.number.isRequired,
      sizes: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      srcSet: PropTypes.string.isRequired,
    }),
    PropTypes.number,
  ]),
  timeToRead: PropTypes.number.isRequired,
  wordCount: PropTypes.shape({
    words: PropTypes.number.isRequired,
  }),
}
