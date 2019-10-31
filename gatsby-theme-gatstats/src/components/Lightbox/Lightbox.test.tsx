import * as React from 'react'
import { shallow } from 'enzyme'

import { ThemeProvider } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'

import { Lightbox } from './Lightbox'

describe('<Lightbox>', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <ThemeProvider theme={theme}>
        <Lightbox />
      </ThemeProvider>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
