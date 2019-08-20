import React from "react"
import { graphql } from "gatsby"
import { Styled } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import DefaultLayout from "./defaultLayout"

const ContentLayout = ({ data: { mdx } }) => {
  return (
    <DefaultLayout>
      <Styled.h1>{mdx.frontmatter.title}</Styled.h1>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </DefaultLayout>
  )
}

export const contentQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`

export default ContentLayout
