/** @jsx jsx */
import * as React from 'react'
import { Global, css } from '@emotion/core'
import { jsx, Styled } from 'theme-ui'

import { Header } from '../components/Header'
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
          <Header />
          <ContentContainer>{children}</ContentContainer>
          <SideBarContainer />
        </SideBarProvider>
      </Styled.div>
    </React.Fragment>
  )
}

export default Layout
