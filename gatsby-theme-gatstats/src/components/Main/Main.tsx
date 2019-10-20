/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

export const Main: React.FC = ({ children }) => (
  <Styled.div
    sx={{
      padding: [2, 3]
    }}
  >
    {children}
  </Styled.div>
)
