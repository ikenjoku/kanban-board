import React, {
  useContext,
  useReducer,
  createContext
} from 'react'
import {v4 as uuid} from "uuid"
import { findItemIndexById } from '../utils'

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
  state: AppState,
  dispatch: React.Dispatch<Action>
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)

type Action =
  | {
      type: 'ADD_LIST',
      payload: string
    }
  | {
      type: 'ADD_TASK',
      payload: { text: string; columnId: string }
    }

const AppStateReducer = (state:AppState, action: Action) => {
  switch(action.type){
    case 'ADD_LIST': {
      return {
        ...state,
        lists: [
          ...state.lists,
          { id: uuid(), text: action.payload, tasks: [] }
        ]
      }
    }
    case 'ADD_TASK': {
      const targetColumnIndex = findItemIndexById(
        state.lists,
        action.payload.columnId
      )
      state.lists[targetColumnIndex].tasks.push({
        id: uuid(),
        text: action.payload.text
      })
      return {
        ...state
      }
    }
    default:
      return state
  }
}




export const useAppState = () => {
  const contextValue = useContext(AppStateContext)
  if (!contextValue) {
    throw new Error('Please call useAppState within a AppStateProvider')
  }
  return contextValue
}

export const AppStateProvider = (props: React.Props<{}>) => {
  const [state, dispatch] = useReducer(AppStateReducer, appData)

  return <AppStateContext.Provider value={{state, dispatch}} { ...props } />
}