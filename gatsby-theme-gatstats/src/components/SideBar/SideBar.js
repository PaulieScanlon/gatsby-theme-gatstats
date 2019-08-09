/** @jsx jsx */
import PropTypes from "prop-types"

import { StaticQuery, graphql, Link } from "gatsby"
import { Styled, jsx } from "theme-ui"

import { Icon } from "../Icon"

export const SideBar = ({
  title,
  description,
  isNavOpen,
  handleClose,
  width,
}) => {
  const conditionalLeft = isNavOpen ? "0" : "-100%"

  return (
    <Styled.div
      sx={{
        backgroundColor: "mutedLight",
        boxShadow: [2, 2, 0],
        display: "flex",
        flexDirection: "column",
        height: "100%",
        left: [conditionalLeft, conditionalLeft, 0],
        margin: 0,
        overflow: "auto",
        padding: 0,
        position: ["absolute", "absolute", "fixed"],
        transition: "0.4s ease-in-out left",
        width: ["100%", width],
        zIndex: 3,
      }}
    >
      <Styled.div
        sx={{
          alignItems: "center",
          display: ["flex", "flex", "none"],
          justifyContent: "flex-end",
          padding: 3,
        }}
      >
        <button onClick={() => handleClose()}>close nav</button>
      </Styled.div>
      <Styled.div
        sx={{
          padding: 3,
        }}
      >
        <Styled.h3
          sx={{
            textAlign: "center",
          }}
        >
          {title}
        </Styled.h3>
        <Styled.h6
          sx={{
            textAlign: "center",
          }}
        >
          {description}
        </Styled.h6>
      </Styled.div>
      <StaticQuery
        query={graphql`
          query linksQuery {
            allMdx {
              edges {
                node {
                  frontmatter {
                    icon
                  }
                  parent {
                    ... on File {
                      name
                    }
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
              {data.allMdx.edges
                .sort((item, i) => {
                  return item.node.parent.name === "index"
                    ? -1
                    : i === "index"
                    ? 1
                    : 0
                })
                .map((item, index) => {
                  const { name } = item.node.parent
                  const { icon } = item.node.frontmatter

                  return (
                    <Styled.li
                      key={index}
                      sx={{
                        margin: 0,
                      }}
                    >
                      <Link
                        to={`/${name === "index" ? "" : name}`}
                        sx={{
                          alignItems: "center",
                          color: "mutedText",
                          borderLeftStyle: "solid",
                          borderLeftWidth: 3,
                          borderColor: "background",
                          display: "flex",
                          paddingTop: 3,
                          paddingBottom: 3,
                          textDecoration: "none",
                          textTransform: "capitalize",
                          transition: ".2s linear all",
                          svg: {
                            marginRight: 3,
                            marginLeft: 3,
                          },
                          ":hover": {
                            color: "text",
                            backgroundColor: "background",
                          },
                          "&.active-nav-item": {
                            color: "text",
                            backgroundColor: "background",
                            borderColor: "primary",
                          },
                        }}
                        activeClassName="active-nav-item"
                      >
                        <Icon iconPath={icon} />
                        {name === "index" ? "dashboard" : name}
                      </Link>
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
  handleClose: PropTypes.func,
  width: PropTypes.number.isRequired,
}
