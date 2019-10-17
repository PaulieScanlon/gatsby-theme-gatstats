/** @jsx jsx */
import { Global, css } from '@emotion/core'
import { jsx } from 'theme-ui'
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
      {children}
    </div>
  )
}

export default Layout
