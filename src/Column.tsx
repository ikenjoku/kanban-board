import React from 'react'
import { ColumnContainer, ColumnTitle } from './styles'
import { AddNewItem } from './AddNewItem'
import { Card } from './Card'
import { useAppState } from './context'

interface ColumnProps {
  title: string
  index: number
  id: string
}

export function Column ({ title, index, id }: React.PropsWithChildren<ColumnProps>) {
  const { state, dispatch } = useAppState()
  return (
    <ColumnContainer>
      <ColumnTitle>
        { title }
      </ColumnTitle>
      {state.lists[index].tasks.map(task => (
        <Card text={task.text} key={task.id} />
      ))}
    <AddNewItem
      toggleButtonText='+ Add another task'
      onAdd={text => dispatch({type: 'ADD_TASK', payload: { columnId:id, text }})}
      dark={true}
    />
    </ColumnContainer>
  )
}
