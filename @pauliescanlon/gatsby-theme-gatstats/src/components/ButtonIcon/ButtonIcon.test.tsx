import * as React from 'react'
import { shallow, mount } from 'enzyme'

import { ThemeProvider } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'

import { usage, autoFocus } from './ButtonIcon.stories'

describe('<ButtonIcon>', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <ThemeProvider theme={theme}>{usage()}</ThemeProvider>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders the correct styles for :focus', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>{autoFocus()}</ThemeProvider>
    )

    const ButtonIcon = wrapper.find('button')
    expect(ButtonIcon.props().autoFocus).toEqual(true)
    expect(wrapper).toMatchSnapshot()
  })
})
