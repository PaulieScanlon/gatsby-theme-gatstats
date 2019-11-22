/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled } from 'theme-ui'
import { width } from 'styled-system'

const profileImage = require('./profile-pic.jpg')

export const ProfilePic: React.FC = () => {
  return (
    <Styled.div
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '100%',
        overflow: 'hidden',
        width: '200px',
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: 'primary'
      }}
    >
      <Styled.img
        sx={{
          width: '100%',
          height: 'auto'
        }}
        src={profileImage}
      />
    </Styled.div>
  )
}
