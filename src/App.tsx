import React from 'react';
import { MainContainer } from './styles'
import { Column } from './Column'
import { Card } from './Card'
import { AddNewItem } from './AddNewItem'
import { useAppState } from './context'

function App() {
  const { state, dispatch } = useAppState()
  return (
    <MainContainer>
      { state.lists.map((list, i) => (
        <Column text={list.text} index={i} key={list.id} id={list.id}>
          <Card text="Generate app scaffold" />
        </Column>
      )) }
      <AddNewItem
        toggleButtonText='+ Add another list'
        onAdd={text => dispatch({type: 'ADD_LIST', payload:text}) }
      />
    </MainContainer>
  )
}

export default App;
