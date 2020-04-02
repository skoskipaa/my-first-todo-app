import React from 'react'
import { FlatList } from 'react-native'
import ToDoItem from './ToDoItem'

const ToDoList = ({ toDos }) => {
  return (
    <FlatList data={toDos}
      keyExtractor={(item, index) => item.id}
      renderItem={itemData => (
        <ToDoItem content={itemData.item.content} />
    )}
  /> 
  )
}

export default ToDoList
