/** @jsx jsx */
import { StaticQuery, graphql } from 'gatsby'
import { jsx } from 'theme-ui'

import { Header } from './Header'

export const HeaderContainer: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query headerQuery {
        site {
          siteMetadata {
            config {
              headerHeight
              sideBarWidth
            }
          }
        }
      }
    `}
    render={data => {
      const { config } = data.site.siteMetadata

      return <Header config={config}>{children}</Header>
    }}
  />
)
