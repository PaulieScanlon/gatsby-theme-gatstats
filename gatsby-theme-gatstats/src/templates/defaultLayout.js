/** @jsx jsx */
import { Global, css } from "@emotion/core"
import {
  ThemeProvider,
  ColorMode,
  Container,
  Layout,
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
import { Seo } from "../components/Seo"

const DefaultLayout = ({ pageContext, children }) => {
  const { isIndex, pagePath } = pageContext || false
  const [isNavOpen, setNavOpen] = useLocalStorage("gatstats-isNavOpen", false)

  const handleIsNavOpen = isNavOpen => {
    setNavOpen(isNavOpen)
    //document.body.style.overflow = isNavOpen ? "hidden" : "auto"
  }

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
            <Seo title={title} titleTemplate={pagePath} />
            <ColorMode />
            <Styled.root>
              <Layout>
                <Global
                  styles={css`
                    body {
                      margin: 0;
                      min-width: 320px;
                    }
                  `}
                />
                <AppBar onOpen={() => handleIsNavOpen(true)} />
                <SideBar
                  title={title}
                  description={description}
                  width={sideBarWidth}
                  isNavOpen={isNavOpen}
                  onClose={() => handleIsNavOpen(false)}
                />
                <Lightbox
                  onClick={() => handleIsNavOpen(false)}
                  isNavOpen={isNavOpen}
                />
                <Content marginLeft={sideBarWidth}>
                  {isIndex ? (
                    <Styled.div
                      sx={{
                        pt: [2, 3],
                        pl: [2, 3],
                        pr: [2, 3],
                        maxWidth: 1700,
                        margin: "0 auto",
                      }}
                    >
                      {children}
                    </Styled.div>
                  ) : (
                    <Container
                      sx={{
                        p: [2, 3],
                      }}
                    >
                      {children}
                    </Container>
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
