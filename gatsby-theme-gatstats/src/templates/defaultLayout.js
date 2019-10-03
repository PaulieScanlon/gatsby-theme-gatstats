import React from "react"
import { Global, css } from "@emotion/core"
import { ThemeProvider, ColorMode, Layout, Container, Styled } from "theme-ui"
import { graphql, StaticQuery } from "gatsby"

import theme from "../gatsby-plugin-theme-ui"

import { SideBar } from "../components/SideBar"
import { Lightbox } from "../components/Lightbox"
import { AppBar } from "../components/AppBar"
import { Content } from "../components/Content"
import { useLocalStorage } from "../utils/useLocalStorage"

const DefaultLayout = ({ pageContext, children }) => {
  const { isIndex } = pageContext || false
  const [isNavOpen, setNavOpen] = useLocalStorage("gatstats-isNavOpen", false)

  return (
    <StaticQuery
      query={graphql`
        query defaultQuery {
          site {
            siteMetadata {
              logo
              description
              config {
                sideBarWidth
              }
            }
          }
        }
      `}
      render={data => {
        const { logo, description } = data.site.siteMetadata
        const { sideBarWidth } = data.site.siteMetadata.config

        return (
          <ThemeProvider theme={theme}>
            <ColorMode />
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
                  logo={logo}
                  description={description}
                  width={sideBarWidth}
                  isNavOpen={isNavOpen}
                  handleClose={() => setNavOpen(false)}
                />
                <Lightbox
                  handleClick={() => setNavOpen(false)}
                  isNavOpen={isNavOpen}
                />
                <Content marginLeft={sideBarWidth}>
                  {isIndex ? (
                    <div>{children}</div>
                  ) : (
                    <Container>{children}</Container>
                  )}
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
