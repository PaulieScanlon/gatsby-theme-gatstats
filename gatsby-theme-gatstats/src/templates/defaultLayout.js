/** @jsx jsx */
import React from "react"
import { Global, css } from "@emotion/core"
import { ThemeProvider, Layout, Container, Styled, jsx } from "theme-ui"
import { graphql, StaticQuery } from "gatsby"

import theme from "../gatsby-plugin-theme-ui"

import { SideBar } from "../components/SideBar"
import { AppBar } from "../components/AppBar"
import { Content } from "../components/Content"

const DefaultLayout = ({ children }) => {
  const [isNavOpen, setNavOpen] = React.useState(true)

  return (
    <StaticQuery
      query={graphql`
        query defaultQuery {
          site {
            siteMetadata {
              title
              description
              config {
                sideBarWidth
              }
            }
          }
        }
      `}
      render={data => {
        const { title, description } = data.site.siteMetadata
        const { sideBarWidth } = data.site.siteMetadata.config

        return (
          <ThemeProvider theme={theme}>
            <Styled.root>
              <Layout>
                <Global
                  styles={css`
                    body {
                      margin: 0;
                    }
                  `}
                />
                <AppBar handleOpen={() => setNavOpen(true)} />
                <SideBar
                  title={title}
                  description={description}
                  width={sideBarWidth}
                  isNavOpen={isNavOpen}
                  handleClose={() => setNavOpen(false)}
                />
                {/* @TODO make this into a light box component and make it work properly */}
                <Styled.div
                  sx={{
                    position: "absolute",
                    backgroundColor: "#000",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    opacity: isNavOpen ? 0.5 : 0,
                    zIndex: 1,
                    transition: ".2s linear opacity",
                    display: ["block", "block", "none"],
                  }}
                  onClick={() => setNavOpen(false)}
                />
                <Content marginLeft={sideBarWidth}>
                  <Container>{children}</Container>
                </Content>
              </Layout>
            </Styled.root>
          </ThemeProvider>
        )
      }}
    />
  )
}

export default DefaultLayout
