/** @jsx jsx */
import { Global, css } from '@emotion/core'
import { jsx, Styled } from 'theme-ui'

import { Main } from '../components/Main'
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
          maxWidth: ['100%', 1400]
        }}
      >
        <Main>{children}</Main>
        <SideBarContainer />
      </Styled.div>
    </Styled.div>
  )
}

export default Layout
