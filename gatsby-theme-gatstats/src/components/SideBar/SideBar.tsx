/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

interface ISideBarProps {
  /** The width of the SideBar */
  sideBarWidth: number
}

export const SideBar: React.FC<ISideBarProps> = ({ sideBarWidth }) => (
  <Styled.div
    sx={{
      height: '100%',
      backgroundColor: 'background',
      borderRightWidth: 0,
      borderRightStyle: 'solid',
      borderRightColor: 'surface',
      width: sideBarWidth
    }}
  >
    <Styled.div
      sx={{
        padding: [2, 3]
      }}
    >
      <Styled.ul>
        <Styled.li>nav Styled.link a</Styled.li>
        <Styled.li>nav Styled.link b</Styled.li>
        <Styled.li>nav Styled.link c</Styled.li>
        <Styled.li>nav Styled.link d</Styled.li>
      </Styled.ul>
    </Styled.div>
  </Styled.div>
)
