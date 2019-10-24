/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { TTitle, TIcon } from '../../types'

import { Icon } from '../Icon'

interface ISideBarNavItemProps {
  /** Single svg path */
  icon: TIcon
  /** Title to display */
  title: TTitle
  /** determins styles for active route */
  isActive: boolean
}

export const SideBarNavItem: React.FC<ISideBarNavItemProps> = ({
  icon,
  title,
  isActive
}) => {
  return (
    <Styled.div
      sx={{
        color: isActive ? 'secondary' : 'primary',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: isActive ? 'surface' : 'transparent',
        borderRadius: 2,
        textTransform: 'capitalize',
        pt: 3,
        pb: 3,
        pl: 4,
        pr: 4,
        ml: 3,
        mr: 3,
        mb: 3,
        transition: '.2s linear background-color, .2s linear color',
        fontFamily: 'body',
        fontSize: 2,
        fontWeight: theme => theme.fontWeights.body,
        lineHeight: 'normal',
        textDecoration: 'none',

        ':hover': {
          color: 'secondary',
          backgroundColor: 'surface'
        },

        svg: {
          marginRight: 2
        }
      }}
    >
      <Icon iconPath={icon} />
      {title}
    </Styled.div>
  )
}
