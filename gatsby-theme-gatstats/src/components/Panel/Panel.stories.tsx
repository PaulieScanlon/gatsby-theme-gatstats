import * as React from 'react'

import { Panel } from './Panel'

export default {
  title: 'Panel',
  parameters: {
    component: Panel,
    componentSubtitle: 'Panel is...'
  }
}

export const usage = () => (
  <Panel heading="This is a heading" subHeading="This is a sub heading">
    children{' '}
  </Panel>
)
