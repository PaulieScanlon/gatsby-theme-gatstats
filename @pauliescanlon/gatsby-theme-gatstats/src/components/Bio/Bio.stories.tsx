import * as React from 'react'

import { Bio } from './Bio'

export default {
  title: 'Bio',
  parameters: {
    component: Bio,
    componentSubtitle:
      'Bio displays text from gatsby config siteMetadata. ProfilePic is embedded'
  }
}

export const usage = () => (
  <Bio
    siteMetadata={{
      title: 'This is the title',
      description: 'This is the description',
      config: {
        twitter: 'twitter_user-name',
        github: 'github_user-name'
      }
    }}
  />
)
