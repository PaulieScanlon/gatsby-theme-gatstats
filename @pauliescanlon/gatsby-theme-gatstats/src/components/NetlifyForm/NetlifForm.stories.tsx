import * as React from 'react'

import { NetlifyForm } from './NetlifyForm'
import { TextInput } from '../TextInput'

export default {
  title: 'NetlifyForm',
  decorators: [
    (storFn: any) => <div style={{ minHeight: 300 }}>{storFn()}</div>
  ],
  parameters: {
    component: NetlifyForm,
    componentSubtitle: 'NetlifyForm is...'
  }
}

export const usage = () => (
  <NetlifyForm>
    <TextInput />
  </NetlifyForm>
)
