/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled } from 'theme-ui'
import { Link } from 'gatsby'

import { SideBarNavItem } from '../SideBarNavItem'

import { ILink, ILinkProps } from '../../types'

interface ISideBarNavListProps {
  /** onClick that takes no args and returns nothing */
  onClick?: () => void
  /** Array of Links to display */
  links: ILink[]
}

export const SideBarNavList: React.FC<ISideBarNavListProps> = ({
  onClick,
  links
}) => {
  const [currentActive, setCurrentActive] = React.useState('')

  const getProps = ({ isCurrent, isPartiallyCurrent, href }: ILinkProps) => {
    if (isCurrent || (isPartiallyCurrent && href !== '/')) {
      setCurrentActive(href)
    }
  }

  return (
    <Styled.ul
      sx={{
        margin: 0,
        padding: 0
      }}
    >
      {links.map((link, index) => {
        const { slug, title, icon } = link
        return (
          <Styled.li
            key={index}
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
              sx={{
                display: 'block',
                borderRadius: 2,
                ml: 3,
                mr: 3,
                mb: 3,
                ':focus ': {
                  outline: 'none',
                  boxShadow: theme =>
                    `${theme.shadows[0]} ${theme.colors.textLight}`
                }
              }}
            >
              <SideBarNavItem
                title={title}
                icon={icon}
                isActive={slug === currentActive ? true : false}
              />
            </Link>
          </Styled.li>
        )
      })}
    </Styled.ul>
  )
}
