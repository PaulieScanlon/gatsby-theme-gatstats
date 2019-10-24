/** @jsx jsx */
import { Global, css } from '@emotion/core'
import { jsx, Styled } from 'theme-ui'

import { Content } from '../components/Content'
import { SideBarContainer } from '../components/SideBar/SideBarContainer'

const Layout: React.FC = ({ children }) => {
  return (
    <Styled.div>
      <Global
        styles={css`
          body {
            margin: 0;
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
    </Styled.div>
  )
}

export default Layout
