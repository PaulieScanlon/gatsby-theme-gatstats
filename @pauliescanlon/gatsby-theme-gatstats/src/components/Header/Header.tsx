/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled } from 'theme-ui'

import { ToggleSwitch } from '../ToggleSwitch'
import { ButtonIcon } from '../ButtonIcon'
import { Logo } from '../Logo'
import { SideBarContext } from '../SideBarContext'
import { ISite } from '../../types'

interface IHeaderProps extends ISite {}

export const Header: React.FC<IHeaderProps> = ({
  sideBarWidth,
  headerHeight
}) => {
  const { dispatch } = React.useContext(SideBarContext)

  return (
    <header
      sx={{
        position: 'sticky',
        top: 0,
        borderBottomWidth: 0,
        borderBottomStyle: 'solid',
        borderBottomColor: 'surface',
        pl: 4,
        pr: 4,
        marginBottom: 2,
        color: 'text',
        backgroundColor: 'background',
        marginLeft: [0, 0, 0, `${sideBarWidth}px`],
        transition: theme => theme.sideBarTransition,
        zIndex: 1
      }}
    >
      <Styled.div
        sx={{
          display: 'flex',
          alignItems: 'center',
          minHeight: `${headerHeight}px`
        }}
      >
        <Styled.div
          sx={{
            display: ['flex', 'flex', 'flex', 'none']
          }}
        >
          <Logo />
        </Styled.div>
        <Styled.div
          sx={{
            display: ['flex', 'flex', 'flex', 'none'],
            justifyContent: 'flex-end',
            flexBasis: '100%'
          }}
        >
          <ButtonIcon
            onClick={() => dispatch({ type: 'openNav' })}
            iconPath="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
          />
        </Styled.div>
        <Styled.div
          sx={{
            display: ['none', 'none', 'none', 'flex'],
            justifyContent: 'flex-end',
            flexBasis: '100%'
          }}
        >
          <ToggleSwitch toggleSwitchName="header-theme-toggle" />
        </Styled.div>
      </Styled.div>
    </header>
  )
}
