import * as React from 'react'
import { shallow } from 'enzyme'

import { ThemeProvider } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'

import { ToggleSwitch } from './'

describe('<ToggleSwitch>', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <ThemeProvider theme={theme}>
        <ToggleSwitch />
      </ThemeProvider>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
