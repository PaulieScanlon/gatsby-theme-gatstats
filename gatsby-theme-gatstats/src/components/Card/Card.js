/** @jsx jsx */
import PropTypes from "prop-types"
import { Styled, jsx } from "theme-ui"

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
      backgroundColor: "surface",
      boxSizing: "border-box",
      boxShadow: theme => `0 0 8px 8px ${theme.colors.shadow}`,
      borderRadius: 1,
      outline: "none",
      borderWidth: 0,
      borderStyle: "solid",
      borderColor: "background",
      display: "block",
      height: "100%",
      textDecoration: "none",
      transition: ".1s all box-shadow, ",
      ":hover": {
        transform: "scale(1.01)",
      },
      ":focus": {
        borderWidth: 0,
        borderStyle: "dashed",
        borderColor: "text",
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
        <Styled.div sx={{ display: "flex", alignItems: "center", pl: 3 }}>
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
              fontSize: 1,
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
