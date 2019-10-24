/** @jsx jsx */
import * as React from 'react'
import { Link } from 'gatsby'
import { jsx, Styled } from 'theme-ui'

import { ILink, ILinkProps } from '../../types'

import { SideBarNavItem } from '../SideBarNavItem'

interface ISideBarNavListProps extends ILink {
  /** onClick that takes no args and returns nothing */
  onClick?: () => void
}

export const SideBarNavList: React.FC<ISideBarNavListProps> = ({
  onClick,
  slug,
  icon,
  title
}) => {
  const [isActive, setIsActive] = React.useState(false)

  const getProps = ({ isCurrent, isPartiallyCurrent, href }: ILinkProps) => {
    setIsActive(
      isCurrent || (isPartiallyCurrent && href !== '/') ? true : false
    )
  }

  return (
    <Styled.li
      sx={{
        listStyle: 'none',
        margin: 0,
        padding: 0,
        a: {
          textDecoration: 'none'
        }
      }}
    >
      <Link
        getProps={getProps as any}
        onClick={() => onClick && onClick()}
        to={slug}
      >
        <SideBarNavItem title={title} icon={icon} isActive={isActive} />
      </Link>
    </Styled.li>
  )
}
