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
      const { sideBarWidth } = data.site.siteMetadata.config

      return <Content sideBarWidth={sideBarWidth}>{children}</Content>
    }}
  />
)
