/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled } from 'theme-ui'

import { ISite } from '../../types'

const commonStyles = {
  display: 'flex',
  flexBasis: 'auto',
  flexDirection: 'column',
  flexShrink: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  marginTop: 0,
  minHeight: 0,
  minWidth: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: 0
}

// import { SideBarContext } from '../Context'

interface IContentProps extends ISite {}

export const Content: React.FC<IContentProps> = ({
  children,
  sideBarWidth
}) => {
  // const { state } = React.useContext(SideBarContext)

  return (
    <Styled.div
      sx={{
        ...commonStyles
      }}
    >
      <Styled.div
        sx={{
          ...commonStyles,
          marginLeft: [0, 0, 0, `${sideBarWidth}px`],
          // marginLeft: [0, 0, 0, `${state.isNavOpen ? '250px' : '0px'}`],
          paddingLeft: [3, 4],
          paddingRight: [3, 4],
          transition: '.3s ease-in-out margin-left'
        }}
      >
        {children}
      </Styled.div>
    </Styled.div>
  )
}
