/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

import { ISiteMetadata } from '../../types'

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
  // Special case to allow for Card <a> to have box-shadow focus state
  paddingTop: 2
}

interface IContentProps extends ISiteMetadata {}

export const Content: React.FC<IContentProps> = ({ children, config }) => {
  const { sideBarWidth } = config

  return (
    <Styled.div
      sx={{
        ...commonStyles
      }}
    >
      <Styled.div
        sx={{
          ...commonStyles,
          paddingLeft: [3, 4],
          paddingRight: [3, 4],
          marginLeft: [0, 0, 0, `${sideBarWidth}px`],
          overflow: 'hidden',
          transition: theme => theme.sideBarTranstion
        }}
      >
        {children}
      </Styled.div>
    </Styled.div>
  )
}
