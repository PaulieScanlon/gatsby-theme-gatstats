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
        backgroundColor: 'background',
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1 auto',
        color: 'text',
        fontFamily: 'body',
        overflow: 'hidden',
        borderRadius: 1,
        transition: '.2s linear all',
        ':hover': {
          filter: 'brightness(105%)'
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
        <Styled.h6
          sx={{
            ':hover': {
              textDecoration: 'underline'
            }
          }}
        >
          {title}
        </Styled.h6>
        <Styled.p
          sx={{
            mb: 0,
            fontSize: [1, 2],
            lineHeight: '23px',
            color: 'textMuted'
          }}
        >
          {excerpt}
        </Styled.p>
      </Styled.div>
    </article>
  )
}
