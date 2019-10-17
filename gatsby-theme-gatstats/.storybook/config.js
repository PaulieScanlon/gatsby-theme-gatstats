import * as React from "react"
import { addDecorator, configure } from "@storybook/react"

import { ThemeProvider } from "theme-ui"

import theme from "../src/gatsby-plugin-theme-ui"

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
))

configure(require.context("../src", true, /\.stories\.js$/), module)
