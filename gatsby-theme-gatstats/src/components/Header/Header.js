/** @jsx jsx */
import { useColorMode, jsx, Styled } from "theme-ui"

export const Header = props => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <Styled.div
      sx={{
        padding: 3,
        color: "background",
        backgroundColor: "primary",
      }}
    >
      <div>
        <button
          onClick={() => {
            setColorMode(colorMode === "light" ? "dark" : "light")
          }}
        >
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </button>
      </div>
      {props.children}
    </Styled.div>
  )
}
