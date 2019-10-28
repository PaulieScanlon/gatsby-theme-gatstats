import * as React from 'react'

import { PostCard } from './PostCard'

export default {
  title: 'PostCard',
  parameters: {
    component: PostCard,
    componentSubtitle: 'PostCard is...'
  }
}

export const usage = () => (
  <PostCard
    node={{
      excerpt: 'This is a blog post excerpt limited to 100 characters',
      fields: {
        slug: '/posts/name-of-post'
      },
      frontmatter: {
        date: '2014-02-27T08:19:38.441-00:00',
        tags: ['JavaScript', 'TypeScript', 'React'],
        title: 'Storybook blog post',
        featuredImage: {
          childImageSharp: {
            fixed: {
              aspectRatio: 1,
              height: 100,
              src: 'https://placekitten.com/g/100/100',
              srcSet: 'https://placekitten.com/g/100/100',
              width: 100
            }
          }
        }
      },
      timeToRead: 100,
      wordCount: {
        words: 20
      }
    }}
  />
)

export const withoutImage = () => (
  <PostCard
    node={{
      excerpt: 'This is a blog post excerpt limited to 100 characters',
      fields: {
        slug: '/posts/name-of-post'
      },
      frontmatter: {
        date: '2014-02-27T08:19:38.441-00:00',
        tags: ['JavaScript', 'TypeScript', 'React'],
        title: 'Storybook blog post'
      },
      timeToRead: 100,
      wordCount: {
        words: 20
      }
    }}
  />
)

withoutImage.story = {
  parameters: {
    docs: {
      storyDescription: 'PostCard can be used without a `featuredImage`'
    }
  }
}
