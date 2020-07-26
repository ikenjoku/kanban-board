import React from 'react'
import { ColumnContainer, ColumnTitle } from './styles'
import { AddNewItem } from './AddNewItem'
import { Card } from './Card'
import { useAppState } from './context'

interface ColumnProps {
  title: string
  index: number
}

export function Column ({ title, index }: React.PropsWithChildren<ColumnProps>) {
  const { state } = useAppState()
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
      onAdd={console.log}
      dark={true}
    />
    </ColumnContainer>
  )
}
