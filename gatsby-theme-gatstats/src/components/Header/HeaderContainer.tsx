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
              sideBarWidth
            }
          }
        }
      }
    `}
    render={data => {
      const { sideBarWidth } = data.site.siteMetadata.config

      return <Header sideBarWidth={sideBarWidth}>{children}</Header>
    }}
  />
)
