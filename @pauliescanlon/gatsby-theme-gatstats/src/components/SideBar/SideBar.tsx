/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled } from 'theme-ui'

import { Logo } from '../Logo'
import { SideBarNavList } from '../SideBarNavList'
import { SideBarContext } from '../SideBarContext'

import { ILink, ISiteMetadata } from '../../types'
import { ToggleSwitch } from '../ToggleSwitch'

interface ISideBarProps extends ISiteMetadata {
  /** Array of Links to display */
  links: ILink[]
}

export const SideBar: React.FC<ISideBarProps> = ({ config, links }) => {
  const { state } = React.useContext(SideBarContext)
  const { sideBarWidth, headerHeight } = config
  const conditionalLeft = state.isNavOpen ? 0 : sideBarWidth

  return (
    <Styled.div
      sx={{
        position: 'absolute',
        height: '100%',
        backgroundColor: 'background',
        borderRightWidth: 0,
        borderRightStyle: 'solid',
        borderRightColor: 'surface',
        width: sideBarWidth,
        left: [
          `-${conditionalLeft}px`,
          `-${conditionalLeft}px`,
          `-${conditionalLeft}px`,
          '0px'
        ],
        transition: '.3s ease-in-out left'
      }}
    >
      <Styled.div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          pl: 4,
          pr: 4,
          height: '100%'
        }}
      >
        <Styled.div
          sx={{
            display: 'flex',
            alignItems: 'center',
            minHeight: `${headerHeight}px`,
            pt: 1,
            pl: 4
          }}
        >
          <Logo />
        </Styled.div>
        <Styled.div
          sx={{
            display: 'flex',
            pt: 3,
            flexDirection: 'column',
            flexBasis: '100%',
            overflowY: 'scroll',
            WbkitOverflowScrolling: 'touch'
          }}
        >
          <SideBarNavList links={links} />
          <Styled.div
            sx={{
              pl: 3,
              pr: 3,
              pt: 6,
              mb: 4,
              display: ['flex', 'flex', 'flex', 'none'],
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <ToggleSwitch toggleSwitchName="sidebar-theme-toggle">
              Toggle Theme
            </ToggleSwitch>
          </Styled.div>
        </Styled.div>
      </Styled.div>
    </Styled.div>
  )
}
