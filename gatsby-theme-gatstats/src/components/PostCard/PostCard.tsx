/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled, useThemeUI } from 'theme-ui'
import Img from 'gatsby-image'

import { Tag } from '../Tag'

import { formatDate, colorRange } from '../../utils'
import { IPostCard } from '../../types'

interface IPostProps extends IPostCard {}

export const PostCard: React.FC<IPostProps> = ({ ...props }) => {
  const context = useThemeUI()
  const { excerpt, frontmatter, timeToRead, wordCount } = props.node
  const { date, tags, title, featuredImage } = frontmatter

  const scale = colorRange(
    context.theme.colors!.primary!,
    context.theme.colors!.secondary!,
    tags.length
  )

  return (
    <article
      sx={{
        display: 'flex',
        flexDirection: 'column',
        color: 'text',
        fontFamily: 'body',
        backgroundColor: 'surface',
        overflow: 'hidden',
        borderRadius: 1,
        transition: '.2s linear all',
        ':hover': {
          filter: 'brightness(110%)'
        }
      }}
    >
      {featuredImage &&
        featuredImage.childImageSharp &&
        featuredImage.childImageSharp.fluid && (
          <Img alt={title} fluid={featuredImage.childImageSharp.fluid} />
        )}

      <Styled.div
        sx={{
          p: [2, 3]
        }}
      >
        <Styled.h4
          sx={{
            mt: [2, 4],
            ':hover': {
              textDecoration: 'underline'
            }
          }}
        >
          {title}
        </Styled.h4>
        <Styled.div
          sx={{
            fontSize: 0,
            color: 'secondary',
            mb: 3
          }}
        >
          {formatDate(date)}
        </Styled.div>
        <Styled.p>{excerpt}</Styled.p>
        <ul
          sx={{
            display: 'flex',
            p: 0,
            mt: 0,
            mb: 4,
            '> :nth-of-type(n)': {
              mr: 2
            }
          }}
        >
          {tags.map((tag, index) => (
            <Tag key={index} color={scale[index]}>
              {tag}
            </Tag>
          ))}
        </ul>
        <Styled.div
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            '> :nth-of-type(odd)': {
              mr: 2
            }
          }}
        >
          <Styled.div
            sx={{
              fontSize: 0,
              color: 'textMuted'
            }}
          >
            Time to read: {timeToRead}
          </Styled.div>
          <Styled.div
            sx={{
              fontSize: 0,
              color: 'textMuted'
            }}
          >
            Word count: {wordCount.words}
          </Styled.div>
        </Styled.div>
      </Styled.div>
    </article>
  )
}
