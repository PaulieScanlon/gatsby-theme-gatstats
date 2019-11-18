import * as React from 'react'
//https://medium.com/@seantheurgel/react-hooks-as-state-management-usecontext-useeffect-usereducer-a75472a862fe

const initialState = { isNavOpen: false }

const reducer = (state: any, actions: any) => {
  switch (actions.type) {
    case 'openNav':
      return { ...state, isNavOpen: true }

    case 'closeNav':
      return { ...state, isNavOpen: false }

    default:
      return
  }
}

export const SideBarContext = React.createContext<any>(initialState)

export const SideBarProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <SideBarContext.Provider value={{ state, dispatch }}>
      {children}
    </SideBarContext.Provider>
  )
}
