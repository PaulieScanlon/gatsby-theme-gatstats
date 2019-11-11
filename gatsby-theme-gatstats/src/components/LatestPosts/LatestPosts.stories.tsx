import * as React from 'react'

import { LatestPosts } from './LatestPosts'

export default {
  title: 'LatestPosts',
  parameters: {
    component: LatestPosts,
    componentSubtitle: 'LatestPosts is...'
  }
}

export const usage = () => (
  <LatestPosts
    node={{
      excerpt: 'This is a blog post excerpt limited to 100 characters',
      fields: {
        slug: '/posts/name-of-post'
      },
      frontmatter: {
        date: '2014-02-27T08:19:38.441-00:00',
        title: 'Storybook blog post'
      }
    }}
  />
)
