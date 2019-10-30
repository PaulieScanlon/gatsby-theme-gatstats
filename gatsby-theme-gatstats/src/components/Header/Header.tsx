/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled } from 'theme-ui'

import { ToggleSwitch } from '../ToggleSwitch'

import { SideBarContext } from '../Context'
import { ISite, IPathname } from '../../types'
import { ButtonIcon } from '../ButtonIcon'

interface IHeaderProps extends ISite, IPathname {}

export const Header: React.FC<IHeaderProps> = ({ sideBarWidth, pathname }) => {
  const { dispatch } = React.useContext(SideBarContext)
  return (
    <header
      sx={{
        position: 'sticky',
        top: 0,
        display: 'flex',
        justifyContent: 'space-between',
        pt: 3,
        pb: 3,
        pl: 4,
        pr: 4,
        marginBottom: 5,
        color: 'text',
        backgroundColor: 'background',
        borderBottomWidth: 0,
        borderBottomStyle: 'solid',
        borderBottomColor: 'surface',
        marginLeft: [0, 0, 0, `${sideBarWidth}px`],
        transition: theme => theme.sideBarTransition,
        zIndex: 1
      }}
    >
      <Styled.div>
        <Styled.div
          sx={{
            pr: 4,
            display: ['block', 'block', 'block', 'none']
          }}
        >
          <ButtonIcon
            onClick={() => dispatch({ type: 'openNav' })}
            iconPath="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
          />
        </Styled.div>
      </Styled.div>

      <Styled.div
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexBasis: '100%'
        }}
      >
        <Styled.h6
          sx={{
            mb: 0,
            color: 'textSecondary'
          }}
        >
          {pathname}
        </Styled.h6>
        <ToggleSwitch />
      </Styled.div>
    </header>
  )
}
