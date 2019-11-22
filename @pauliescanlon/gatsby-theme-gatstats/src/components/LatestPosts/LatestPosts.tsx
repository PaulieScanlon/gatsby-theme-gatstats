/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled } from 'theme-ui'

import { ILatestPosts } from '../../types'
import { formatDate } from '../../utils'

interface ILatestPostsProps extends ILatestPosts {}

export const LatestPosts: React.FC<ILatestPostsProps> = ({ ...props }) => {
  const { excerpt, frontmatter } = props.node

  const { date, title } = frontmatter

  return (
    <article
      sx={{
        display: 'flex',
        color: 'text',
        fontFamily: 'body',
        backgroundColor: 'background',
        overflow: 'hidden',
        borderRadius: 1,
        p: 3,
        transition: '.2s linear all',
        ':hover': {
          filter: 'brightness(110%)'
        }
      }}
    >
      <Styled.div>
        <Styled.div
          sx={{
            fontSize: 0,
            color: 'primary',
            mb: 3
          }}
        >
          {formatDate(date)}
        </Styled.div>
        <Styled.h5
          sx={{
            ':hover': {
              textDecoration: 'underline'
            }
          }}
        >
          {title}
        </Styled.h5>
        <Styled.p
          sx={{
            mb: 0,
            color: 'textMuted'
          }}
        >
          {excerpt}
        </Styled.p>
      </Styled.div>
    </article>
  )
}
