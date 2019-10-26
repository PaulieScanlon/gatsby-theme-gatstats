/** @jsx jsx */
import * as React from 'react'
import { Global, css } from '@emotion/core'
import { jsx, Styled } from 'theme-ui'
import { Transition } from '../components/Transition'
import { Location } from '@reach/router'

import { HeaderContainer } from '../components/Header'
import { LightBox } from '../components/Lightbox'
import { ContentContainer } from '../components/Content'
import { SideBarContainer } from '../components/SideBar/SideBarContainer'

import { SideBarProvider } from '../components/Context'

const Layout: React.FC = ({ children }) => {
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
          maxWidth: theme => theme.breakpoints[3]
        }}
      >
        <SideBarProvider>
          <Location>
            {({ location }) => {
              return (
                <React.Fragment>
                  <HeaderContainer location={location} />
                  <SideBarContainer />
                  <LightBox />
                  <ContentContainer>
                    <Transition location={location}>{children}</Transition>
                  </ContentContainer>
                </React.Fragment>
              )
            }}
          </Location>
        </SideBarProvider>
      </Styled.div>
    </React.Fragment>
  )
}

export default Layout
