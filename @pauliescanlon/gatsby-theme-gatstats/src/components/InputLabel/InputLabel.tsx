/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

export interface IInputLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const InputLabel: React.FC<IInputLabelProps> = ({
  children,
  ...rest
}) => {
  return (
    <label
      {...rest}
      sx={{
        color: 'textSecondary',
        fontFamily: 'body',
        mt: 3,
        mb: 3
      }}
    >
      {children}
    </label>
  )
}
