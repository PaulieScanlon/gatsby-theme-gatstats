/** @jsx jsx */
import { StaticQuery, graphql } from 'gatsby'
import { jsx } from 'theme-ui'
import { IPathname } from '../../types'

import { Header } from './Header'

interface IHeaderContainerProps extends IPathname {}

export const HeaderContainer: React.FC<IHeaderContainerProps> = ({
  children,
  pathname
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
        <Header sideBarWidth={sideBarWidth} pathname={pathname}>
          {children}
        </Header>
      )
    }}
  />
)
