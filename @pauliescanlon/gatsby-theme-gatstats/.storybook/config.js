import * as React from 'react'
import { create } from '@storybook/theming'
import { addParameters, addDecorator, configure } from '@storybook/react'

import { SideBarProvider } from '../src/components/SideBarContext'
import { ThemeProvider } from 'theme-ui'
import theme from '../src/gatsby-plugin-theme-ui'

/**
 * Custom decorator for theme-ui
 */
addDecorator(storyFn => (
  <SideBarProvider>
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
  </SideBarProvider>
))

/**
 * Setup options
 */
addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'GatStats',
      brandUrl: 'https://gatsby-theme-gatstats.netlify.com/',
      brandImage:
        'https://gatsby-theme-gatstats.netlify.com/images/gatstats-logo.svg'
    }),
    isFullscreen: false,
    panelPosition: 'bottom'
  }
})

configure(require.context('../src', true, /\.stories\.tsx$/), module)
