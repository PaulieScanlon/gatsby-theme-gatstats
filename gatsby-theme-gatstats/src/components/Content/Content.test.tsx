import * as React from 'react'
import { shallow } from 'enzyme'

import { ThemeProvider } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'

import { Content } from '.'

describe('<Content>', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <ThemeProvider theme={theme}>
        <Content>children</Content>
      </ThemeProvider>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
