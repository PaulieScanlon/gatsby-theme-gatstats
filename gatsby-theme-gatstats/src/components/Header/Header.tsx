/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled } from 'theme-ui'
import { ToggleSwitch } from '../ToggleSwitch'

import { SideBarContext } from '../Context'

export const Header: React.FC = () => {
  const { dispatch } = React.useContext(SideBarContext)
  return (
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
      <button onClick={() => dispatch({ type: 'openNav' })}>open nav</button>
      <ToggleSwitch />
    </Styled.div>
  )
}
