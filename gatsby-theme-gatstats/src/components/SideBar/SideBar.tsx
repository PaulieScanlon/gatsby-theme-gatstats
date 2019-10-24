/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

import { ILink } from '../../types'

import { SideBarNavList } from '../SideBarNavList'

interface ISideBarProps {
  /** The width of the SideBar */
  sideBarWidth: number
  /** Array of Links to display */
  links: ILink[]
}

export const SideBar: React.FC<ISideBarProps> = ({ sideBarWidth, links }) => (
  <Styled.div
    sx={{
      height: '100%',
      backgroundColor: 'background',
      borderRightWidth: 0,
      borderRightStyle: 'solid',
      borderRightColor: 'surface',
      width: sideBarWidth
    }}
  >
    <Styled.div
      sx={{
        padding: [2, 3]
      }}
    >
      <Styled.ul
        sx={{
          margin: 0,
          padding: 0
        }}
      >
        {links.map((link, index) => {
          return (
            <SideBarNavList
              key={index}
              slug={link.slug}
              icon={link.icon}
              title={link.title}
            />
          )
        })}
      </Styled.ul>
    </Styled.div>
  </Styled.div>
)
