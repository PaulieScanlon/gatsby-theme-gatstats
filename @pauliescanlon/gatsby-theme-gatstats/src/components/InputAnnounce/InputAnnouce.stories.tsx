import * as React from 'react'

import { InputAnnounce } from '../InputAnnounce'
import { NetlifyForm } from '../NetlifyForm'

export default {
  title: 'InputAnnounce',
  decorators: [
    (storFn: any) => (
      <div style={{ color: '#fff' }}>
        <NetlifyForm>{storFn()}</NetlifyForm>
      </div>
    )
  ],
  parameters: {
    component: InputAnnounce,
    componentSubtitle: 'InputAnnounce is...'
  }
}

export const usage = () => <InputAnnounce>some announce message</InputAnnounce>
