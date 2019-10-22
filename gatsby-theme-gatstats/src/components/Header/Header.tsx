/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { ToggleSwitch } from '../ToggleSwitch'

export const Header: React.FC = () => (
  <Styled.div
    sx={{
      position: 'sticky',
      top: 0,
      display: 'flex',
      justifyContent: 'flex-end',
      padding: 3,
      marginBottom: 5,
      color: 'text',
      backgroundColor: 'background',
      borderBottomWidth: 0,
      borderBottomStyle: 'solid',
      borderBottomColor: 'surface'
    }}
  >
    <ToggleSwitch />
  </Styled.div>
)
