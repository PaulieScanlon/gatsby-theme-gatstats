/** @jsx jsx */
import * as React from 'react'
import { Link } from 'gatsby'
import { jsx, Flex, Box, Styled } from 'theme-ui'

import { Card } from '../Card'

import { IPostCard } from '../../types'

interface ICardListProps {
  /** Array of GraphQL data / .mdx files */
  listItems: any
}

export const CardList: React.FC<ICardListProps> = ({ listItems }) => {
  return (
    <React.Fragment>
      <Styled.div
        sx={{
          mb: 4
        }}
      />
      <Flex
        sx={{
          flexWrap: 'wrap',
          '> :nth-of-type(odd)': {
            pr: [0, 0, 4]
          }
        }}
      >
        {listItems.map((item: IPostCard, index: number) => {
          const { slug } = item.node.fields

          return (
            <Box
              key={index}
              sx={{
                width: ['100%', '100%', '50%']
              }}
            >
              <Link
                to={slug}
                sx={{
                  display: 'flex',
                  textDecoration: 'none',
                  borderRadius: 1,
                  mb: 4,
                  ':focus': {
                    outline: 'none',
                    boxShadow: theme =>
                      `${theme.shadows[0]} ${theme.colors.textMuted}`
                  }
                }}
              >
                <Card {...item} />
              </Link>
            </Box>
          )
        })}
      </Flex>
    </React.Fragment>
  )
}
