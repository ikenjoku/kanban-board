import React, { useRef } from 'react'
import { useDrop } from 'react-dnd'
import { ColumnContainer, ColumnTitle } from './styles'
import { AddNewItem } from './AddNewItem'
import { Card } from './Card'
import { useAppState } from './context'
import { useItemDrag } from './hooks'
import { DragItem } from './DragItem'

interface ColumnProps {
  title: string
  index: number
  id: string
}

export function Column ({ title, index, id }: React.PropsWithChildren<ColumnProps>) {
  const { state, dispatch } = useAppState()
  const ref = useRef<HTMLDivElement>(null)
  const { drag } = useItemDrag({ type: 'COLUMN', id, index, text:title })
  const [, drop] = useDrop({
    accept: "COLUMN",
    hover(item: DragItem) {
      const dragIndex = item.index
      const hoverIndex = index

      if (dragIndex === hoverIndex) {
        return
      }

      dispatch({ type: "MOVE_LIST", payload: { dragIndex, hoverIndex }})
      item.index = hoverIndex
    }
  })

  drag(drop(ref))

  return (
    <ColumnContainer ref={ref}>
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
