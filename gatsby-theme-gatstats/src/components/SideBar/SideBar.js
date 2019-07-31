/** @jsx jsx */
import PropTypes from "prop-types"
import { ClassNames } from "@emotion/core"

import { StaticQuery, graphql, Link } from "gatsby"
import { Styled, jsx, useThemeUI } from "theme-ui"

export const SideBar = ({
  title,
  description,
  isNavOpen,
  handleClose,
  width,
}) => {
  const conditionalLeft = isNavOpen ? "0" : "-100%"

  const context = useThemeUI()

  return (
    <Styled.div
      sx={{
        backgroundColor: "mutedDark",
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
            <ClassNames>
              {({ css }) => (
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
                            color: "mutedText",
                            display: "flex",
                            paddingTop: 3,
                            paddingBottom: 3,
                            textDecoration: "none",
                            textTransform: "capitalize",
                            transition: ".2s linear all",
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
                              backgroundColor: "mutedLight",
                            },
                          }}
                          activeClassName={css`
                            color: ${context.theme.colors.text} !important;
                            background-color: ${context.theme.colors
                              .mutedLight} !important;
                            &::before {
                              background-color: ${context.theme.colors
                                .primary} !important;
                            }
                          `}
                        >
                          {name === "index" ? "dashboard" : name}
                        </Link>
                      )
                    })}
                </Styled.ul>
              )}
            </ClassNames>
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
