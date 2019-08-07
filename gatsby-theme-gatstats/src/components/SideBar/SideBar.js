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

                  return (
                    <Link
                      key={index}
                      to={`/${name === "index" ? "" : name}`}
                      sx={{
                        alignItems: "center",
                        color: "mutedText",
                        display: "flex",
                        paddingTop: 3,
                        paddingBottom: 3,
                        textDecoration: "none",
                        textTransform: "capitalize",
                        transition: ".2s linear all",
                        svg: {
                          marginRight: 3,
                        },
                        "::before": {
                          backgroundColor: "background",
                          content: `""`,
                          marginTop: -3,
                          marginBottom: -3,
                          marginRight: 3,
                          width: 2,
                        },
                        ":hover": {
                          color: "text",

                          backgroundColor: "background",
                        },
                        "&.active": {
                          color: "text",
                          backgroundColor: "background",

                          "::before": {
                            backgroundColor: "primary",
                          },
                        },
                      }}
                      activeClassName="active"
                    >
                      <Icon iconPath="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" />
                      {name === "index" ? "dashboard" : name}
                    </Link>
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
