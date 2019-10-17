import * as React from 'react'

import { Header } from '.'

export default {
  title: 'Header',
  parameters: {
    component: Header,
    componentSubtitle: 'Header is...'
  }
}

export const usage = () => <Header>children</Header>
