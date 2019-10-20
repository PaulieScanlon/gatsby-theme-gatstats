/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

import { ToggleSwitch } from '../ToggleSwitch'

export const Header: React.FC = () => (
  <Styled.div
    sx={{
      display: 'flex',
      justifyContent: 'flex-end',
      padding: [2, 3],
      color: 'primaryText',
      backgroundColor: 'surface',
      boxShadow: 0,
      zIndex: 2
    }}
  >
    <ToggleSwitch />
  </Styled.div>
)
