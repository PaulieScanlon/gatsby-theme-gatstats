import * as React from 'react'
import { addDecorator, configure } from '@storybook/react'

import { SideBarProvider } from '../src/components/Context'
import { ThemeProvider } from 'theme-ui'
import theme from '../src/gatsby-plugin-theme-ui'

addDecorator(storyFn => (
  <SideBarProvider>
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
  </SideBarProvider>
))

configure(require.context('../src', true, /\.stories\.tsx$/), module)
