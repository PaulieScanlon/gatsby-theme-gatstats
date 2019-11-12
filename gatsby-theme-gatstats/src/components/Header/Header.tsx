/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled } from 'theme-ui'

import { ToggleSwitch } from '../ToggleSwitch'

import { SideBarContext } from '../SideBarContext'
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
        alignItems: 'center',
        justifyContent: 'space-between',
        pl: 4,
        pr: 4,
        minHeight: theme => theme.space[7],
        marginBottom: 2,
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
        <Styled.div>
          <Styled.h5
            sx={{
              mb: 0,
              textTransform: 'capitalize',
              color: 'textSecondary'
            }}
          >
            {pathname.split('/')[2] ? (
              <ButtonIcon
                onClick={() => window.history.back()}
                iconPath="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
              />
            ) : (
              pathname.split('/')[1]
            )}
          </Styled.h5>
        </Styled.div>
        <ToggleSwitch />
      </Styled.div>
    </header>
  )
}
