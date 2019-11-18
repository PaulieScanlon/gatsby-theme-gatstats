import * as React from 'react'
import { shallow } from 'enzyme'

import { ThemeProvider } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'

import { Transition } from './Transition'

describe('<Transition>', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <ThemeProvider theme={theme}>
        <Transition pathname="/about-me">children</Transition>
      </ThemeProvider>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
