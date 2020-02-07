/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

export interface INetlifyFormProps
  extends React.FormHTMLAttributes<HTMLFormElement> {}

export const NetlifyForm: React.FC<INetlifyFormProps> = ({
  children,
  ...rest
}) => (
  <form
    {...rest}
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    method="POST"
    sx={{ display: 'flex', flexDirection: 'column', p: 2 }}
  >
    {children}
  </form>
)
