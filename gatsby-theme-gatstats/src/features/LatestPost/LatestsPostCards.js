/** @jsx jsx */

import { jsx, Styled } from "theme-ui"

import { Card } from "../../components/Card"
import { formatDateForPosts } from "../../utils/formatDate"

export const LatestPostCards = ({ data }) => {
  return (
    <Styled.div>
      {data.map((item, index) => {
        const { fields, excerpt, frontmatter } = item.node

        return (
          <Styled.div
            key={index}
            sx={{
              mb: 3,
            }}
          >
            <Card
              key={index}
              link={fields.slug}
              date={formatDateForPosts(frontmatter.date)}
              title={frontmatter.title}
              excerpt={excerpt}
              fixed={
                frontmatter.featuredImage
                  ? frontmatter.featuredImage.childImageSharp.fixed
                  : null
              }
            />
          </Styled.div>
        )
      })}
    </Styled.div>
  )
}
