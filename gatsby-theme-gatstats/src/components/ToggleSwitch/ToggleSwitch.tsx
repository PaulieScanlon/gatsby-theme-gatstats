/** @jsx jsx */
import * as React from 'react'
import { useColorMode, jsx } from 'theme-ui'

const toggleSwitchName = 'gatstats-toggle-switch'

export const ToggleSwitch: React.FC = () => {
  const [colorMode, setColorMode] = useColorMode()

  const [isChecked, setIsChecked] = React.useState(false)

  const handleChange = () => {
    setIsChecked(!isChecked)
    setColorMode(colorMode === 'light' ? 'dark' : 'light')
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIsChecked(!isChecked)
      setColorMode(colorMode === 'light' ? 'dark' : 'light')
    }
  }

  return (
    <label
      title={toggleSwitchName}
      htmlFor={toggleSwitchName}
      sx={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'pointer'
      }}
    >
      <input
        type="checkbox"
        id={toggleSwitchName}
        checked={isChecked}
        onChange={() => handleChange()}
        onKeyPress={e => handleKeyPress(e)}
        sx={{
          position: 'absolute',
          display: 'none',
          [`:checked + .gatstats-toggle-button`]: {
            left: [23, 30]
          },
          [`+ .gatstats-toggle-button`]: {
            left: 2
          },
          [`:focus ~ .gatstats-toggle-track`]: {
            borderRadius: [24, 32],
            boxShadow: theme => `${theme.shadows[0]} ${theme.colors.textLight}`
          }
        }}
      />
      <span
        className="gatstats-toggle-button"
        sx={{
          position: 'absolute',
          width: [20, 24],
          height: [20, 24],
          borderRadius: [24, 32],
          backgroundColor: 'primary',
          transition: 'background-color .2s linear , left .2s ease-in-out'
        }}
      />
      <span
        className="gatstats-toggle-track"
        sx={{
          display: 'inline-flex',
          outline: 'none',
          cursor: 'pointer',
          width: [48, 60],
          height: [28, 32],
          borderRadius: [24, 32],
          backgroundColor: 'surface'
        }}
      />
    </label>
  )
}
