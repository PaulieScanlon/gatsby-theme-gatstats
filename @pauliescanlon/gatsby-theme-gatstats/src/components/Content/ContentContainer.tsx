/** @jsx jsx */
import { StaticQuery, graphql } from 'gatsby'
import { jsx } from 'theme-ui'

import { Content } from './Content'

export const ContentContainer: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query contentQuery {
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
      const { config } = data.site.siteMetadata

      return <Content config={config}>{children}</Content>
    }}
  />
)
