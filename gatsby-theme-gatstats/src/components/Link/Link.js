/** @jsx jsx */
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"
import { Styled } from "theme-ui"

import isAbsoluteURL from "is-absolute-url"

const isHash = str => /^#/.test(str)

export const Link = ({ href, ...props }) => {
  return isHash(href) || isAbsoluteURL(href) ? (
    // eslint-disable-next-line
    <Styled.a {...props} href={href} target="_blank" />
  ) : (
    <Styled.a
      sx={{
        color: "success",
      }}
      {...props}
      to={href}
      as={GatsbyLink}
      activeClassName="active"
    />
  )
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
}
