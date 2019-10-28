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
        childImageSharp: {
          fixed: {
            aspectRatio: number
            height: number
            src: string
            srcSet: string
            width: number
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
