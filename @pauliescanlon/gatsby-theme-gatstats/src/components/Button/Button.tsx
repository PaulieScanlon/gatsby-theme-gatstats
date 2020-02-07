/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<IButtonProps> = ({ children, ...rest }) => {
  const { disabled } = rest
  return (
    <button
      {...rest}
      sx={{
        appearance: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: disabled ? 'not-allowed' : 'pointer',
        color: disabled ? 'textMuted' : 'primary',
        backgroundColor: 'surface',
        textAlign: 'center',
        lineHeight: 'inherit',
        textDecoration: 'none',
        fontSize: 'inherit',
        fontWeight: 'body',
        m: 0,
        p: 0,
        border: 0,
        borderRadius: 2,
        outline: 'none',
        minWidth: 120,
        height: 48,
        ':focus ': {
          boxShadow: theme => `${theme.shadows[0]} ${theme.colors.textMuted}`
        }
      }}
    >
      {children}
    </button>
  )
}
