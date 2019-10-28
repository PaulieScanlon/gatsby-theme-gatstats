/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled } from 'theme-ui'

import Img from 'gatsby-image'

import { formatDate } from '../../utils'

import { IPostCard } from '../../types'

interface IPostProps extends IPostCard {}

export const PostCard: React.FC<IPostProps> = ({ ...props }) => {
  const { excerpt, frontmatter, timeToRead, wordCount } = props.node

  const { date, tags, title, featuredImage } = frontmatter

  return (
    <article
      sx={{
        display: 'flex',
        flexDirection: ['column', 'column', 'row'],
        alignItems: 'center',
        color: 'text',
        fontFamily: 'body',
        backgroundColor: 'surface',
        mb: 3,
        p: [2, 3],
        overflow: 'hidden',
        borderRadius: 1
      }}
    >
      {featuredImage && (
        <Styled.div
          sx={{
            overflow: 'hidden',
            borderRadius: '100%',
            minWidth: featuredImage.childImageSharp.fixed.width,
            height: featuredImage.childImageSharp.fixed.height,
            borderStyle: 'solid',
            borderWidth: 2,
            borderColor: 'background',
            margin: 0
          }}
        >
          <Img alt={title} fixed={featuredImage.childImageSharp.fixed} />
        </Styled.div>
      )}

      <Styled.div
        sx={{
          pl: 3
        }}
      >
        <Styled.div
          sx={{
            fontSize: 0,
            color: 'secondary'
          }}
        >
          {formatDate(date)}
        </Styled.div>
        <Styled.h5>{title}</Styled.h5>
        <Styled.div>{excerpt}</Styled.div>
        <ul>
          {tags.map((tag, index) => (
            <li
              key={index}
              sx={{
                fontSize: 0
              }}
            >
              {tag}
            </li>
          ))}
        </ul>
        <Styled.div
          sx={{
            fontSize: 0,
            color: 'textLight'
          }}
        >
          Time to read: {timeToRead}
        </Styled.div>
        <Styled.div
          sx={{
            fontSize: 0,
            color: 'textLight'
          }}
        >
          Word count: {wordCount.words}
        </Styled.div>
      </Styled.div>
    </article>
  )
}
