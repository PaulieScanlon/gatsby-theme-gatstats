/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

export const Header = props => (
  <Styled.div
    sx={{
      padding: 4,
      color: "background",
      backgroundColor: "primary",
    }}
  >
    {props.children}
  </Styled.div>
)
