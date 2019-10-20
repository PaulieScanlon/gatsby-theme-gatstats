/** @jsx jsx */
import { useColorMode, jsx, Styled } from 'theme-ui'

export const ToggleSwitch: React.FC = () => {
  const [colorMode, setColorMode] = useColorMode()

  const handleChange = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light')
  }

  return (
    <Styled.div
      sx={{
        position: 'relative',
        display: 'inline-flex',
        '.gatstats-toggle-label': {
          cursor: 'pointer',
          width: [48, 60],
          height: [28, 32],
          borderRadius: [24, 32],
          backgroundColor: 'background'
        },
        '.gatstats-toggle-checkbox': {
          position: 'absolute',
          display: 'none',
          ':checked + .gatstats-toggle-indicator': {
            left: [23, 30]
          },
          '+ .gatstats-toggle-indicator': {
            left: 1
          }
        },
        '.gatstats-toggle-indicator': {
          position: 'absolute',
          top: 1,
          width: [20, 24],
          height: [20, 24],
          borderRadius: [24, 32],
          backgroundColor: 'primary',
          transition: 'background-color .2s linear , left .2s ease-in-out'
        }
      }}
    >
      <label className="gatstats-toggle-label" onChange={() => handleChange()}>
        <input type="checkbox" className="gatstats-toggle-checkbox" />
        <span className="gatstats-toggle-indicator" />
      </label>
    </Styled.div>
  )
}
