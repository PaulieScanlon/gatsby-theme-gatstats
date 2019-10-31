/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { Icon } from '../Icon'

import { IIcon } from '../../types'

interface IButtonIconProps
  extends IIcon,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const ButtonIcon: React.FC<IButtonIconProps> = ({
  iconPath,
  ...rest
}) => {
  return (
    <button
      {...rest}
      sx={{
        appearance: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: 'primary',
        backgroundColor: 'surface',
        textAlign: 'center',
        lineHeight: 'inherit',
        textDecoration: 'none',
        fontSize: 'inherit',
        fontWeight: 'bold',
        m: 0,
        p: 0,
        border: 0,
        borderRadius: 2,
        outline: 'none',
        //TODO widths and heights need to match ToggleSwitch so should be part of the theme
        width: [28, 32],
        height: [28, 32],
        ':focus ': {
          boxShadow: theme =>
            `${theme.shadows[0]} ${theme.colors.textSecondary}`
        }
      }}
    >
      <Icon iconPath={iconPath} />
    </button>
  )
}
