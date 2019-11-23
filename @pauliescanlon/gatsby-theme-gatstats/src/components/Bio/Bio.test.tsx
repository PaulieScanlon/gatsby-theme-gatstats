import * as React from 'react'
import { shallow } from 'enzyme'

import { ThemeProvider } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'

import { usage } from './Bio.stories'

jest.mock('../ProfilePic', () => {
  return {
    __esModule: true,
    default: () => {
      return <img />
    }
  }
})

describe('<Bio>', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <ThemeProvider theme={theme}>{usage()}</ThemeProvider>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
