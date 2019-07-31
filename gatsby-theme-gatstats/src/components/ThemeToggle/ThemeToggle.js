import React from "react"
import { useColorMode } from "theme-ui"

export const ThemeToggle = () => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <button
      onClick={e => {
        setColorMode(colorMode === "light" ? "dark" : "light")
      }}
    >
      Toggle {colorMode === "dark" ? "Light" : "Dark"}
    </button>
  )
}
