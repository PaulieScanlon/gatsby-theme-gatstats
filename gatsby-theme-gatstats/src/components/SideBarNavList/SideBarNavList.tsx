/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled } from 'theme-ui'
import { Link } from 'gatsby'

import { SideBarNavItem } from '../SideBarNavItem'

import { ILink, ILinkProps } from '../../types'

import { SideBarContext } from '../SideBarContext'

interface ISideBarNavListProps {
  /** Array of Links to display */
  links: ILink[]
}

export const SideBarNavList: React.FC<ISideBarNavListProps> = ({ links }) => {
  const { dispatch } = React.useContext(SideBarContext)
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

        const isActive = slug === currentActive ? true : false

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
              onClick={() => dispatch({ type: 'closeNav' })}
              to={slug}
              sx={{
                display: 'block',
                borderRadius: 2,
                cursor: 'pointer',
                ml: 3,
                mr: 3,
                mb: 3,
                ':focus ': {
                  outline: 'none',
                  boxShadow: theme =>
                    `${theme.shadows[0]} ${theme.colors.textMuted}`
                }
              }}
            >
              <SideBarNavItem
                title={title}
                icon={icon}
                isActive={isActive ? true : false}
              />
            </Link>
          </Styled.li>
        )
      })}
    </Styled.ul>
  )
}
