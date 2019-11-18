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
            fluid: {
              aspectRatio: 1.5,
              sizes: '(max-width: 800px) 100vw, 800px',
              src: 'https://placekitten.com/g/800/800',
              srcSet: 'https://placekitten.com/g/800/800'
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
