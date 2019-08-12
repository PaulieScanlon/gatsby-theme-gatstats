import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import DefaultLayout from "./defaultLayout"

const ContentLayout = ({ data }) => {
  const { body } = data.mdx
  return (
    <DefaultLayout>
      <h1>ContentLayout</h1>
      <MDXRenderer>{body}</MDXRenderer>
    </DefaultLayout>
  )
}

export const contentQuery = graphql`
  query contentQuery($id: String) {
    mdx(id: { eq: $id }) {
      body
    }
  }
`

export default ContentLayout
