import * as React from 'react'

import { Header } from './Header'

export default {
  title: 'Header',
  parameters: {
    component: Header,
    componentSubtitle: 'Header is...'
  }
}

export const usage = () => <Header config={{ headerHeight: 64 }} />
