import React from 'react'
import { useDragLayer, XYCoord } from 'react-dnd'
import { CustomDragLayerContainer } from './styles'
import { Column } from './Column'

function getItemStyles(currentOffset: XYCoord | null): React.CSSProperties {
  if (!currentOffset) {
    return {
      display: "none"
    }
  }

  const { x, y } = currentOffset

  const transform = `translate(${x}px, ${y}px)`
  return {
    transform,
    WebkitTransform: transform
  }
}


export const CustomDragLayer: React.FC = () => {
  const { isDragging, item } = useDragLayer(monitor => ({
    item: monitor.getItem(),
    isDragging: monitor.isDragging()
  }))
  return isDragging ? (
    <CustomDragLayerContainer>
        <Column
          id={item.id}
          text={item.text}
          index={item.index}
        />
    </CustomDragLayerContainer>
  ) : null
}
