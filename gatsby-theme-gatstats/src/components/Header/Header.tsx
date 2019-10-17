/** @jsx jsx */
import { useColorMode, jsx, Styled } from 'theme-ui'

interface IHeaderProps {
  /** Temp prop */
  showToggle?: boolean
}

export const Header: React.FC<IHeaderProps> = ({
  children,
  showToggle = true
}) => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <Styled.div
      sx={{
        padding: 3,
        color: 'background',
        backgroundColor: 'primary'
      }}
    >
      {showToggle && (
        <div>
          <button
            onClick={() => {
              setColorMode(colorMode === 'light' ? 'dark' : 'light')
            }}
          >
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
          </button>
        </div>
      )}
      {children}
    </Styled.div>
  )
}
