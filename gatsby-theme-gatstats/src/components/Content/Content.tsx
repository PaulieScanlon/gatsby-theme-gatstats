/** @jsx jsx */
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
  // Special case to allow for PostCard <a> to have box-shadow focus state
  paddingTop: 2
}

interface IContentProps extends ISite {}

export const Content: React.FC<IContentProps> = ({
  children,
  sideBarWidth
}) => (
  <Styled.div
    sx={{
      ...commonStyles
    }}
  >
    <Styled.div
      sx={{
        ...commonStyles,
        marginLeft: [0, 0, 0, `${sideBarWidth}px`],
        paddingLeft: [3, 4],
        paddingRight: [3, 4],
        overflow: 'hidden',
        transition: theme => theme.sideBarTranstion
      }}
    >
      {children}
    </Styled.div>
  </Styled.div>
)
