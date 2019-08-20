import React from "react"
import { Styled } from "theme-ui"
import Layout from "../components/layout"

const PageTemplate = ({ pageContext }) => (
  // @TODO not sure this template is needed
  <Layout>
    <Styled.h1>{pageContext.heading}</Styled.h1>
    <Styled.h2>PageTemplate</Styled.h2>
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
  </Layout>
)

export default PageTemplate
