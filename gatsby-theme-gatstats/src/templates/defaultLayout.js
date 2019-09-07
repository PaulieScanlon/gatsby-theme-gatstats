/** @jsx jsx */
import { Global, css } from "@emotion/core"
import {
  ThemeProvider,
  ColorMode,
  Layout,
  Container,
  Styled,
  jsx,
} from "theme-ui"
import { graphql, StaticQuery } from "gatsby"

import theme from "../gatsby-plugin-theme-ui"

import { SideBar } from "../components/SideBar"
import { Lightbox } from "../components/Lightbox"
import { AppBar } from "../components/AppBar"
import { Content } from "../components/Content"
import { useLocalStorage } from "../utils/useLocalStorage"

const DefaultLayout = ({ children }) => {
  const [isNavOpen, setNavOpen] = useLocalStorage("gatstats-isNavOpen", false)

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
                  title={title}
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
