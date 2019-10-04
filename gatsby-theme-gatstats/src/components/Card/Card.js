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
  fixed,
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
        height: "100%",
      }}
    >
      {fixed && (
        <Styled.div sx={{ display: "flex", alignItems: "center", padding: 3 }}>
          <Styled.div
            sx={{
              display: "flex",
              overflow: "hidden",
              borderRadius: 50,
            }}
          >
            <Img
              fixed={fixed}
              alt={title}
              width={fixed.width}
              height={fixed.height}
            />
          </Styled.div>
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
        <Styled.h5
          sx={{
            color: "text",
          }}
        >
          {title}
        </Styled.h5>
        <Styled.p
          sx={{
            flexGrow: 1,
          }}
        >
          {excerpt}
        </Styled.p>
        <Styled.h6
          sx={{
            color: "primary",
          }}
        >
          {date}
        </Styled.h6>
        {wordCount && (
          <Styled.p
            sx={{
              fontSize: [1],
            }}
          >{`${timeToRead} min read / ${wordCount.words} words`}</Styled.p>
        )}
        {tags && <TagsList tags={tags} />}
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
  fixed: PropTypes.oneOfType([
    PropTypes.shape({
      aspectRatio: PropTypes.number.isRequired,
      width: PropTypes.number,
      height: PropTypes.number,
      src: PropTypes.string.isRequired,
      srcSet: PropTypes.string.isRequired,
    }),
    PropTypes.number,
  ]),
  timeToRead: PropTypes.number,
  wordCount: PropTypes.shape({
    words: PropTypes.number,
  }),
}
