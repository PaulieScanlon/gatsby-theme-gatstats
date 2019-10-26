import * as React from 'react'
import { WindowLocation } from '@reach/router'

import {
  TransitionGroup,
  Transition as ReactTransition
} from 'react-transition-group'

const timeout = 250

type TTransitionStyles = {
  [key: string]: {
    position?: any
    transition?: string
    opacity: number
  }
}

const getTransitionStyles: TTransitionStyles = {
  entering: {
    position: 'absolute',
    opacity: 0
  },
  entered: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 1
  },
  exiting: {
    transition: `opacity ${timeout}ms ease-out`,
    opacity: 0
  }
}

interface ITransitionProps {
  /** @reach/router WindowLocation*/
  location: WindowLocation
}

export const Transition: React.FC<ITransitionProps> = ({
  children,
  location
}) => {
  return (
    <TransitionGroup>
      <ReactTransition
        key={location.pathname}
        timeout={{
          enter: timeout,
          exit: timeout
        }}
      >
        {status => (
          <div
            style={{
              ...getTransitionStyles[status]
            }}
          >
            {children}
          </div>
        )}
      </ReactTransition>
    </TransitionGroup>
  )
}
