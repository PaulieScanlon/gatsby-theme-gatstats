/** @jsx jsx */
import * as React from 'react'
import { Global, css } from '@emotion/core'
import { jsx, Styled } from 'theme-ui'

import { Content } from '../components/Content'
import { SideBarContainer } from '../components/SideBar/SideBarContainer'

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
        <Content>{children}</Content>
        <SideBarContainer />
      </Styled.div>
    </React.Fragment>
  )
}

export default Layout
