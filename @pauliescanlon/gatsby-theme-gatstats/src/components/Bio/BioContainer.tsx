/** @jsx jsx */
import { StaticQuery, graphql } from 'gatsby'
import { jsx } from 'theme-ui'

import { Bio } from './Bio'

export const BioContainer: React.FC = () => (
  <StaticQuery
    query={graphql`
      query bioQuery {
        site {
          siteMetadata {
            title
            description
            config {
              twitter
              github
            }
          }
        }
      }
    `}
    render={data => {
      const { siteMetadata } = data.site
      return <Bio siteMetadata={siteMetadata} />
    }}
  />
)
