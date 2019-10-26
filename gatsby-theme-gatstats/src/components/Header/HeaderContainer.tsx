/** @jsx jsx */
import { StaticQuery, graphql } from 'gatsby'
import { jsx } from 'theme-ui'
import { WindowLocation } from '@reach/router'

import { Header } from './Header'

interface IHeaderContainerProps {
  /** @reach/router WindowLocation*/
  location: WindowLocation
}

export const HeaderContainer: React.FC<IHeaderContainerProps> = ({
  children,
  location
}) => (
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

      return (
        <Header sideBarWidth={sideBarWidth} location={location}>
          {children}
        </Header>
      )
    }}
  />
)
