import React from 'react'
import { ColumnContainer, ColumnTitle } from './styles'
import { AddNewItem } from './AddNewItem'

interface ColumnProps {
  title: string
}

export function Column ({ title, children }: React.PropsWithChildren<ColumnProps>) {
  return (
    <ColumnContainer>
      <ColumnTitle>
        { title }
      </ColumnTitle>
      {children}
    <AddNewItem
      toggleButtonText='+ Add another task'
      onAdd={console.log}
      dark={true}
    />
    </ColumnContainer>
  )
}
