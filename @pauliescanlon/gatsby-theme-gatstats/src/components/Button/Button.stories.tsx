import * as React from 'react'

import { Button } from './Button'

export default {
  title: 'Button',

  parameters: {
    component: Button,
    componentSubtitle: 'Button is...'
  }
}

export const usage = () => <Button>Click me</Button>

export const disabled = () => <Button disabled>Click me</Button>

disabled.story = {
  parameters: {
    docs: {
      storyDescription: 'The `disabled` prop disables the button'
    }
  }
}
