import React from "react"
import { css, Global } from "@emotion/core"
import {
  ThemeProvider,
  Layout as StyledLayout,
  Container,
  Styled,
} from "theme-ui"
import { graphql, StaticQuery } from "gatsby"

import theme from "../gatsby-plugin-theme-ui"

import { SideBar } from "../components/SideBar"
import { AppBar } from "../components/AppBar"
import { Content } from "../components/Content"

const Layout = ({ children }) => {
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
              <StyledLayout>
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
                <Content marginLeft={sideBarWidth}>
                  <Container>{children}</Container>
                </Content>
              </StyledLayout>
            </Styled.root>
          </ThemeProvider>
        )
      }}
    />
  )
}

export default Layout
