import * as React from 'react'
import { shallow } from 'enzyme'

import { ThemeProvider } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'

import { Header } from './'

describe('<Header>', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <ThemeProvider theme={theme}>
        <Header sideBarWidth={0} pathname="/about-me">
          children
        </Header>
      </ThemeProvider>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
