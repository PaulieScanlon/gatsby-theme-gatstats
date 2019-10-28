export interface IPostCard {
  node: {
    excerpt: string
    fields: {
      slug: string
    }
    frontmatter: {
      date: string
      tags: string[]
      title: string
      featuredImage?: {
        childImageSharp?: {
          fluid: {
            aspectRatio: number
            sizes: string
            src: string
            srcSet: string
          }
        }
      }
    }
    timeToRead: number
    wordCount: {
      words: number
    }
  }
}
