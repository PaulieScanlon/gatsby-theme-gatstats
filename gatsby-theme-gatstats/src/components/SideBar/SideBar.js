/** @jsx jsx */
import PropTypes from "prop-types"

import { StaticQuery, graphql, Link } from "gatsby"
import { Styled, jsx } from "theme-ui"

import { Icon } from "../Icon"

export const SideBar = ({ title, description, isNavOpen, onClose, width }) => {
  const conditionalLeft = isNavOpen ? "0" : "-100%"

  const linkStyles = {
    alignItems: "center",
    color: "muted",
    borderRadius: 2,
    display: "flex",

    outline: "none",
    borderWidth: 0,
    borderStyle: "solid",
    borderColor: "sideBar",

    pt: 3,
    pb: 3,
    textDecoration: "none",
    textTransform: "capitalize",
    transition: ".2s linear background, .2s linear color",
    ml: 3,
    mr: 3,
    mb: 3,
    svg: {
      mr: 3,
      ml: 3,
    },
    ":hover": {
      color: "secondary",
      backgroundColor: "background",
    },
    "&.active-nav-item": {
      color: "secondary",
      backgroundColor: "background",
    },

    ":focus": {
      borderWidth: 0,
      borderStyle: "dashed",
      borderColor: "text",
    },
  }

  return (
    <Styled.div
      sx={{
        backgroundColor: "sideBar",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        boxShadow: 0,
        height: "100%",
        left: [conditionalLeft, conditionalLeft, conditionalLeft, 0],
        margin: 0,
        overflow: "auto",
        padding: 0,
        position: "fixed",
        transition: "0.4s ease-in-out left",
        width: ["100%", width, width],
        zIndex: 3,
      }}
    >
      <Styled.div
        sx={{
          alignItems: "center",
          display: ["flex", "flex", "flex", "none"],
          justifyContent: "flex-end",
          padding: 3,
        }}
      >
        <button onClick={() => onClose()}>close nav</button>
      </Styled.div>
      <Styled.div
        sx={{
          padding: 3,
        }}
      >
        <Styled.h4
          sx={{
            textAlign: "center",
            color: "primary",
            mt: 4,
            mb: 1,
          }}
        >
          {title}
        </Styled.h4>
        <Styled.h6
          sx={{
            color: "muted",
            textAlign: "center",
            mb: 6,
          }}
        >
          {description}
        </Styled.h6>
      </Styled.div>
      <StaticQuery
        query={graphql`
          query pagesQuery {
            allMdx(
              filter: { fileAbsolutePath: { regex: "//src/pages//" } }
              sort: { order: ASC, fields: [fields___slug] }
            ) {
              edges {
                node {
                  fileAbsolutePath
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    icon
                  }
                }
              }
            }
          }
        `}
        render={data => {
          return (
            <Styled.ul
              sx={{
                padding: 0,
                margin: 0,
              }}
            >
              {data.allMdx.edges.map((item, index) => {
                const { fields, frontmatter } = item.node

                return (
                  <Styled.li
                    key={index}
                    sx={{
                      margin: 0,
                      a: {
                        ...linkStyles,
                      },
                    }}
                  >
                    {fields.slug === "/" ? (
                      <Link
                        to="/"
                        activeClassName="active-nav-item"
                        onClick={() => onClose()}
                      >
                        <Icon iconPath={frontmatter.icon} />
                        {frontmatter.title}
                      </Link>
                    ) : (
                      <Link
                        to={fields.slug}
                        partiallyActive={true}
                        activeClassName="active-nav-item"
                        onClick={() => onClose()}
                      >
                        <Icon iconPath={frontmatter.icon} />
                        {frontmatter.title}
                      </Link>
                    )}
                  </Styled.li>
                )
              })}
            </Styled.ul>
          )
        }}
      />
    </Styled.div>
  )
}

SideBar.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isNavOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  width: PropTypes.number.isRequired,
}
