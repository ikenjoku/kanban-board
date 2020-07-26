import React from 'react';
import { MainContainer } from './styles'
import { Column } from './Column'
import { Card } from './Card'
import { AddNewItem } from './AddNewItem'
import { useAppState } from './context'

function App() {
  const { state } = useAppState()
  return (
    <MainContainer>
      { state.lists.map((list, i) => (
        <Column title={list.text} index={i} key={list.id}>
          <Card text="Generate app scaffold" />
        </Column>
      )) }
      <AddNewItem
        toggleButtonText='+ Add another list'
        onAdd={text => console.log(text)}
      />
    </MainContainer>
  );
}

export default App;
