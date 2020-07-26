import React, { createContext, useContext } from 'react'

interface Task {
  id: string
  text: string
}

interface List {
  id: string
  text: string
  tasks: Task[]
}

interface AppState {
  lists: List[]
}

const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [
        { id: "c0", text: "Generate app scaffold" },
        { id: "c4", text: "Finish Typescript book" }
      ]
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "c2", text: "Learn Typescript" }]
    },
    {
      id: "2",
      text: "Done",
      tasks: [{ id: "c3", text: "Begin to use static typing" }]
    }
  ]
}

interface AppStateContextProps {
  state: AppState
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)

export const useAppState = () => {
  const contextValue = useContext(AppStateContext)
  if (!contextValue) {
    throw new Error('Please call with a AppStateProvider')
  }
  return contextValue
}

export const AppStateProvider = (props: React.Props<{}>) => {

  return <AppStateContext.Provider value={{state: appData}} { ...props } />
}