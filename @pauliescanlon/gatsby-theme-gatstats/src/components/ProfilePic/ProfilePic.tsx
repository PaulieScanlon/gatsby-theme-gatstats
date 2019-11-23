/** @jsx jsx */
import { jsx } from 'theme-ui'

const profileImage = require('./profile-pic.jpg')

export const ProfilePic: React.FC = () => (
  <img
    sx={{
      width: '100%',
      height: 'auto'
    }}
    src={profileImage}
  />
)
