import * as React from 'react'

import { TextArea } from '.'
import { NetlifyForm } from '../NetlifyForm'

export default {
  title: 'TextArea',
  decorators: [
    (storFn: any) => (
      <div style={{ color: '#fff' }}>
        <NetlifyForm>{storFn()}</NetlifyForm>
      </div>
    )
  ],
  parameters: {
    component: TextArea,
    componentSubtitle: 'TextArea is ...'
  }
}

export const usage = () => <TextArea />

export const placeholder = () => <TextArea placeholder="Placeholder text" />

placeholder.story = {
  parameters: {
    docs: {
      storyDescription:
        'The `placeholder` prop can be used to display a placeholder'
    }
  }
}
