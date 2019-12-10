/** @jsx jsx */
import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Global, css } from '@emotion/core'
import { jsx, Styled } from 'theme-ui'

import { Location } from '@reach/router'

import { Transition } from '../components/Transition'
import { HeaderContainer } from '../components/Header'
import { LightPanel } from '../components/LightPanel'
import { ContentContainer } from '../components/Content'
import { SideBarContainer } from '../components/SideBar/SideBarContainer'
import { SideBarProvider } from '../components/SideBarContext'
import { Seo } from '../components/Seo'

import { formatPathname } from '../utils'
import { IPathname } from '../types'

const Layout: React.FC = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query defaultQuery {
          site {
            siteMetadata {
              title
              description
              keywords
              siteURL
              siteImage
            }
          }
        }
      `}
      render={data => {
        const {
          title,
          description,
          keywords,
          siteURL,
          siteImage
        } = data.site.siteMetadata

        return (
          <React.Fragment>
            <Global
              styles={css`
                body {
                  position: relative;
                  margin: 0;
                  min-height: 100%;
                  min-width: 320px;
                }
              `}
            />

            <Styled.div
              sx={{
                margin: '0 auto',
                backgroundColor: 'background',
                maxWidth: theme => theme.breakpoints[3]
              }}
            >
              <SideBarProvider>
                <Location>
                  {({ location }) => {
                    const { pathname }: IPathname = location

                    return (
                      <React.Fragment>
                        <Seo
                          title={title}
                          titleTemplate={formatPathname(pathname)}
                          description={description}
                          keywords={keywords}
                          siteURL={siteURL}
                          image={siteImage}
                        />
                        <HeaderContainer />
                        <SideBarContainer />
                        <LightPanel />
                        <ContentContainer>
                          <Transition pathname={pathname}>
                            {children}
                          </Transition>
                        </ContentContainer>
                      </React.Fragment>
                    )
                  }}
                </Location>
              </SideBarProvider>
            </Styled.div>
          </React.Fragment>
        )
      }}
    />
  )
}

export default Layout
