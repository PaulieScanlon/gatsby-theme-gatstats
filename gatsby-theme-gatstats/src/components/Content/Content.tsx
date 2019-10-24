/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Header } from '../Header'

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

export const Content: React.FC = ({ children }) => (
  <Styled.div
    sx={{
      ...commonStyles
    }}
  >
    <Header />
    <Styled.div
      sx={{
        ...commonStyles,
        marginLeft: [0, 0, 0, 250],
        paddingLeft: [3, 4],
        paddingRight: [3, 4]
      }}
    >
      {children}
    </Styled.div>
  </Styled.div>
)
