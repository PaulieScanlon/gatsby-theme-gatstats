import * as React from 'react'

import { NetlifyForm } from './NetlifyForm'
import { InputLabel } from '../InputLabel'
import { TextInput } from '../TextInput'
import { InputAnnounce } from '../InputAnnounce'
import { TextArea } from '../TextArea'
import { Button } from '../Button'

export default {
  title: 'NetlifyForm',
  decorators: [
    (storFn: any) => <div style={{ color: '#fff' }}>{storFn()}</div>
  ],
  parameters: {
    component: NetlifyForm,
    componentSubtitle: 'NetlifyForm is...'
  }
}

export const usage = () => (
  <NetlifyForm>
    <InputLabel>Your name</InputLabel>
    <TextInput name="name" placeholder="Paul" />
    <InputLabel>Your email</InputLabel>
    <TextInput name="email" type="email" placeholder="paul@email.com" />
    <InputLabel>Your message</InputLabel>
    <TextArea name="message" placeholder="Hello there!" />
    <InputAnnounce>some announce message</InputAnnounce>
    <div style={{ height: 24 }} />
    <Button type="submit">Submit</Button>
    <div style={{ height: 48 }} />
  </NetlifyForm>
)
