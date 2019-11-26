/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'

const profileImage = require('./profile-pic.jpg')

export const ProfilePic: React.FC = () => (
  <Styled.div
    sx={{
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      borderRadius: '100%',
      overflow: 'hidden',
      width: '200px',
      height: '200px',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'primary'
    }}
  >
    <img
      sx={{
        width: '100%',
        height: 'auto'
      }}
      src={profileImage}
    />
  </Styled.div>
)
