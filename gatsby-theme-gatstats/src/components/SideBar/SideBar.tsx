/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled } from 'theme-ui'

import { SideBarNavList } from '../SideBarNavList'
import { ILink } from '../../types'

interface ISideBarProps {
  /** The width of the SideBar */
  sideBarWidth: number
  /** Array of Links to display */
  links: ILink[]
}

export const SideBar: React.FC<ISideBarProps> = ({ sideBarWidth, links }) => {
  return (
    <Styled.div
      sx={{
        position: 'relative',
        height: '100%',
        backgroundColor: 'background',
        borderRightWidth: 0,
        borderRightStyle: 'solid',
        borderRightColor: 'surface',
        width: sideBarWidth,
        left: [
          `-${sideBarWidth}px`,
          `-${sideBarWidth}px`,
          `-${sideBarWidth}px`,
          '0px'
        ],
        transition: '.3s ease-in-out left'
      }}
    >
      <Styled.div
        sx={{
          pl: 3,
          pr: 3
        }}
      >
        <Styled.div
          className="this-will-be-the-profile"
          sx={{
            height: 64
          }}
        />
        <SideBarNavList links={links} />
      </Styled.div>
    </Styled.div>
  )
}
