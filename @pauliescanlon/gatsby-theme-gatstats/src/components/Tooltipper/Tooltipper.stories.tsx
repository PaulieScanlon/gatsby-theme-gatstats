import * as React from 'react'

import { Tooltipper } from './Tooltipper'

export default {
  title: 'Tooltipper',
  parameters: {
    component: Tooltipper,
    componentSubtitle: 'Tooltipper is...'
  }
}

export const usage = () => (
  <Tooltipper title="Jan" value={10} left={20} top={60} />
)
