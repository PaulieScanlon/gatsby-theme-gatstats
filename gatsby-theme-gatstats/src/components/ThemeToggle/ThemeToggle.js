import React from "react"
import { useColorMode } from "theme-ui"

export const ThemeToggle = () => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <button
      onClick={() => {
        setColorMode(colorMode === "light" ? "dark" : "light")
      }}
    >
      Toggle {colorMode === "light" ? "Dark" : "Light"}
    </button>
  )
}
