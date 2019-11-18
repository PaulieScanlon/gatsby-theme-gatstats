import * as React from 'react'
import { shallow } from 'enzyme'

import { ThemeProvider } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'

import { LightPanel } from './LightPanel'

describe('<LightPanel>', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <ThemeProvider theme={theme}>
        <LightPanel />
      </ThemeProvider>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
