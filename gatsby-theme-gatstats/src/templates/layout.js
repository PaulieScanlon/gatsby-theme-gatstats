/** @jsx jsx */
import { ThemeProvider, jsx } from "theme-ui"
import { Header } from "../components/Header"

import theme from "../../gatsby-plugin-theme-ui"

export default ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        {children}
      </div>
    </ThemeProvider>
  )
}
