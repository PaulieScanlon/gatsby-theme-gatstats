/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled } from 'theme-ui'

import { Icon } from '../Icon'
import { ProfilePic } from '../ProfilePic'

import { ISiteMetadata } from '../../types'

interface IBioProps {
  siteMetadata: ISiteMetadata
}

export const Bio: React.FC<IBioProps> = ({ siteMetadata }) => {
  const { title, description, config } = siteMetadata

  return (
    <Styled.div
      sx={{
        display: 'flex',
        flexDirection: ['column', 'column', 'row', 'row'],
        alignItems: 'center',
        color: 'text',
        fontFamily: 'body',
        backgroundColor: 'surface',
        overflow: 'hidden',
        borderRadius: 1,
        p: 3,
        mb: 3
      }}
    >
      <Styled.div
        sx={{
          ml: 4,
          mr: 5,
          mt: [4, 2],
          mb: [4, 2]
        }}
      >
        <ProfilePic />
      </Styled.div>

      <Styled.div>
        <Styled.h2>{title}</Styled.h2>
        <Styled.p>{description}</Styled.p>
        <Styled.a
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            color: 'text',
            mr: 2,
            ':hover': {
              color: 'secondary'
            }
          }}
          href={`https://www.twitter.com/${config.twitter}`}
          target="_blank"
        >
          <Icon
            iconSize={32}
            iconPath="M21.1,6.2l-2,0.6c0.6-0.5,1.2-1.2,1.5-2l-2.4,0.8c-0.6-0.7-1.6-1.2-2.7-1.2c-2,0-3.6,1.7-3.6,3.8v1c-3-0.4-6-1.8-7.7-4
	c-0.3,0.2-0.5,1-0.5,1.6c0,1.3,0.6,2.5,1.6,3c-0.6,0-1.2,0-1.7-0.3c0,1.9,1.3,3.9,3,3.9H4.9c0.5,1.7,2,2.8,3.5,2.8
	c-1.2,1-3,1.6-4.6,1.6H2.9c1.7,1,3.6,1.7,5.7,1.7c7,0,10.7-6,10.7-11V8.1C20,7.6,20.6,6.9,21.1,6.2L21.1,6.2z"
          />
        </Styled.a>

        <Styled.a
          sx={{
            display: 'inline0flex',
            alignItems: 'center',
            color: 'text',

            ':hover': {
              color: 'secondary'
            }
          }}
          href={`https://www.github.com/${config.github}`}
          target="_blank"
        >
          <Icon
            iconSize={32}
            iconPath="M12,2.7c-5.2,0-9.5,4.2-9.5,9.5c0,4.2,2.7,7.7,6.5,9c0.5,0.1,0.6-0.2,0.6-0.5c0-0.2,0-0.8,0-1.6
		c-2.6,0.6-3.2-1.3-3.2-1.3c-0.4-1.1-1.1-1.4-1.1-1.4c-0.9-0.6,0.1-0.6,0.1-0.6c1,0.1,1.5,1,1.5,1c0.8,1.5,2.2,1,2.8,0.8
		c0.1-0.6,0.3-1,0.6-1.3c-2.1-0.2-4.3-1.1-4.3-4.7c0-1,0.4-1.9,1-2.5C6.8,9,6.5,8,7,6.7c0,0,0.8-0.3,2.6,1c0.8-0.2,1.6-0.3,2.4-0.3
		c0.8,0,1.6,0.1,2.4,0.3c1.8-1.2,2.6-1,2.6-1C17.5,8,17.1,9,17.1,9.2c0.6,0.7,1,1.5,1,2.5c0,3.6-2.2,4.4-4.3,4.7
		c0.3,0.3,0.6,0.9,0.6,1.8c0,1.3,0,2.3,0,2.6c0,0.2,0.2,0.5,0.7,0.5c3.8-1.2,6.5-4.8,6.5-9C21.5,7,17.2,2.7,12,2.7"
          />
        </Styled.a>
      </Styled.div>
    </Styled.div>
  )
}
