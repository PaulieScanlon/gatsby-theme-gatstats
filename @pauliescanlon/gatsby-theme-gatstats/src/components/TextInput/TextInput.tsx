/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

export interface ITextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const TextInput: React.FC<ITextInputProps> = ({ ...rest }) => {
  return (
    <input
      type="text"
      {...rest}
      sx={{
        backgroundColor: 'surface',
        outline: 'none',
        borderWidth: 0,
        borderStyle: 'solid',
        borderColor: 'background',
        borderRadius: 2,
        appearance: 'none',
        p: 3,
        fontFamily: 'body',
        fontSize: 2,
        color: 'inherit',
        '::placeholder': {
          color: 'textMuted'
        },
        ':focus ': {
          boxShadow: theme => `${theme.shadows[0]} ${theme.colors.textMuted}`
        }
      }}
    />
  )
}
