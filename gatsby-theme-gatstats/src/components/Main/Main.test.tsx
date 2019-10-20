import * as React from 'react'
import { shallow } from 'enzyme'

import { ThemeProvider } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'

import { Main } from './'

describe('<Main>', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <ThemeProvider theme={theme}>
        <Main>children</Main>
      </ThemeProvider>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
