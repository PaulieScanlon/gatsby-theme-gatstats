/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

export interface ITextAreaProps
  extends React.InputHTMLAttributes<HTMLTextAreaElement> {}

export const TextArea: React.FC<ITextAreaProps> = ({ ...rest }) => {
  return (
    <textarea
      {...rest}
      sx={{
        backgroundColor: 'surface',
        outline: 'none',
        borderWidth: 0,
        borderStyle: 'solid',
        borderColor: 'background',
        borderRadius: 1,
        appearance: 'none',
        minHeight: 200,
        resize: 'none',
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
