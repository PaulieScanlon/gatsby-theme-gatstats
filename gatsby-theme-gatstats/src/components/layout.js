import React from "react"
import { css, Global } from "@emotion/core"
import {
  ThemeProvider,
  Layout as StyledLayout,
  Header,
  Main,
  Container,
  Styled,
} from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"

import theme from "../gatsby-plugin-theme-ui/"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

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
          <Header>
            <span>{data.site.siteMetadata.title}</span>
          </Header>
          <Main>
            <Container>{children}</Container>
          </Main>
        </StyledLayout>
      </Styled.root>
    </ThemeProvider>
  )
}

export default Layout
