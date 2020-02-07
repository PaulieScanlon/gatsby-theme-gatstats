/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

export interface IInputAnnounceProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const InputAnnounce: React.FC<IInputAnnounceProps> = ({
  children,
  ...rest
}) => {
  return (
    <label
      {...rest}
      sx={{
        color: 'primary',
        fontFamily: 'body',
        fontSize: 0,
        mt: 3,
        mb: 3
      }}
    >
      {children}
    </label>
  )
}
