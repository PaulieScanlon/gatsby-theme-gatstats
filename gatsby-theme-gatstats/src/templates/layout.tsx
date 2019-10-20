/** @jsx jsx */
import { Global, css } from '@emotion/core'
import { jsx } from 'theme-ui'
import { Main } from '../components/Main'
import { Header } from '../components/Header'

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Global
        styles={css`
          body {
            margin: 0;
            min-width: 320px;
          }
        `}
      />
      <Header />
      <Main>{children}</Main>
    </div>
  )
}

export default Layout
