import * as React from 'react'

import { ToggleSwitch } from '.'

export default {
  title: 'ToggleSwitch',
  parameters: {
    component: ToggleSwitch,
    componentSubtitle:
      'ToggleSwitch is used to toggle the theme-ui color modes.'
  }
}

export const usage = () => (
  <ToggleSwitch toggleSwitchName="toggle-switch-usage" />
)

export const children = () => (
  <ToggleSwitch toggleSwitchName="toggle-switch-children">
    Toggle Switch label
  </ToggleSwitch>
)

children.story = {
  parameters: {
    docs: {
      storyDescription:
        '`ToggleSwitch` renders children which can be used as the `<label>`'
    }
  }
}

export const flexDirection = () => (
  <ToggleSwitch
    toggleSwitchName="toggle-switch-flex-direction"
    flexDirection="row"
  >
    Toggle Switch label
  </ToggleSwitch>
)

flexDirection.story = {
  parameters: {
    docs: {
      storyDescription:
        'The `flexDirection` prop is a pass through prop for the Css value `flex-direction`'
    }
  }
}
