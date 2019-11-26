import * as React from 'react'

import { Card } from './Card'

export default {
  title: 'Card',
  parameters: {
    component: Card,
    componentSubtitle:
      'Card is used to displa a post or any .mdx file sourced from the dir structure'
  }
}

export const usage = () => (
  <Card
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
  <Card
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
      storyDescription: 'Card can be used without a `featuredImage`'
    }
  }
}
