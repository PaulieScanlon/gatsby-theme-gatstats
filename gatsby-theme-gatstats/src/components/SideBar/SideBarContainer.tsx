/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

import { SideBar } from './SideBar'

const commonStyles = {
  display: 'flex',
  flexBasis: 'auto',
  flexDirection: 'column',
  flexShrink: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  marginTop: 0,
  minHeight: 0,
  minWidth: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: 0
}

export const SideBarContainer: React.FC = () => (
  <Styled.div
    sx={{
      ...commonStyles,
      position: 'relative'
    }}
  >
    <Styled.div
      sx={{
        ...commonStyles,
        position: 'fixed',
        top: 0,
        height: '100%'
      }}
    >
      <SideBar sideBarWidth={250} />
    </Styled.div>
  </Styled.div>
)
