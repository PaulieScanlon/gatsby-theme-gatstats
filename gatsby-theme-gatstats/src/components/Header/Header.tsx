/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled } from 'theme-ui'

import { ToggleSwitch } from '../ToggleSwitch'

import { SideBarContext } from '../Context'
import { ISite } from '../../types'
import { ButtonIcon } from '../ButtonIcon/ButtonIcon'

interface IHeaderProps extends ISite {}

export const Header: React.FC<IHeaderProps> = ({ sideBarWidth }) => {
  const { dispatch } = React.useContext(SideBarContext)
  return (
    <Styled.div
      sx={{
        position: 'sticky',
        top: 0,
        display: 'flex',
        justifyContent: 'space-between',
        padding: 3,
        marginBottom: 5,
        color: 'text',
        backgroundColor: 'background',
        borderBottomWidth: 0,
        borderBottomStyle: 'solid',
        borderBottomColor: 'surface',
        marginLeft: [0, 0, 0, `${sideBarWidth}px`],
        transition: theme => theme.sideBarTransition
      }}
    >
      <Styled.div>
        <Styled.div
          sx={{
            display: ['block', 'block', 'block', 'none']
          }}
        >
          <ButtonIcon
            onClick={() => dispatch({ type: 'openNav' })}
            iconPath="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
          />
        </Styled.div>
      </Styled.div>

      <ToggleSwitch />
    </Styled.div>
  )
}
