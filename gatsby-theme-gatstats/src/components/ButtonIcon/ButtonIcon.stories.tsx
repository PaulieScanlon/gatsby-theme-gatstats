import * as React from 'react'

import { ButtonIcon } from '.'

export default {
  title: 'ButtonIcon',
  parameters: {
    component: ButtonIcon,
    componentSubtitle: 'ButtonIcon is...'
  }
}

export const usage = () => (
  <ButtonIcon iconPath="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
)

export const autoFocus = () => (
  <ButtonIcon
    autoFocus
    iconPath="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
  />
)

autoFocus.story = {
  parameters: {
    docs: {
      storyDescription:
        'The `autoFocus` prop sets the html attribute for autoFocus'
    }
  }
}
