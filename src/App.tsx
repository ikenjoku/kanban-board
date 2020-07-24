import React from 'react';
import { MainContainer } from './styles'
import { Column } from './Column'
import { Card } from './Card'
import { AddNewItem } from './AddNewItem'

function App() {
  return (
    <MainContainer>
      <Column title="To Do">
        <Card text="Generate app scaffold" />
      </Column>
      <Column title="In Progress">
        <Card text="Learn Typescript" />
      </Column>
      <Column title="Done">
        <Card text="Begin to use static typing" />
      </Column>
      <AddNewItem
        toggleButtonText='+ Add another list'
        onAdd={text => console.log(text)}
      />
    </MainContainer>
  );
}

export default App;
