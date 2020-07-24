import React, { useState } from 'react'
import { StyledAddButton } from './AddItemButton'
import { NewItemForm } from './NewItemForm'

interface AddNewItemProps {
  onAdd(text: string): void
  toggleButtonText: string
  dark?: boolean
}

export function AddNewItem(props: AddNewItemProps) {
  const [showForm, setShowForm] = useState(false)
  const { onAdd, toggleButtonText, dark } = props

  if(showForm) {
    return (
      <NewItemForm
        onAdd={text => {
          onAdd(text)
          setShowForm(false)
        }}
      />
    )
  }

  return (
    <StyledAddButton
      dark={dark}
      onClick={() => setShowForm(true)}
    >
      { toggleButtonText }
    </StyledAddButton>
  )
}

