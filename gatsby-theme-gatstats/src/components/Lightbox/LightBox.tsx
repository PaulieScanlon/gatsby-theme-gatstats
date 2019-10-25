/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled } from 'theme-ui'

import { SideBarContext } from '../Context'

export const LightBox: React.FC = () => {
  const { state, dispatch } = React.useContext(SideBarContext)
  return (
    <Styled.div
      sx={{
        position: 'fixed',
        backgroundColor: '#000',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: state.isNavOpen ? 0.5 : 0.5,
        cursor: state.isNavOpen ? 'pointer' : 'auto',
        zIndex: 1,
        transition: '.2s linear opacity',
        display: [
          `${state.isNavOpen ? 'block' : 'none'}`,
          `${state.isNavOpen ? 'block' : 'none'}`,
          `${state.isNavOpen ? 'block' : 'none'}`,
          'none'
        ]
      }}
      onClick={() => dispatch({ type: 'closeNav' })}
    ></Styled.div>
  )
}
