import React from 'react'
import { FlatList } from 'react-native'
import ToDoItem from './ToDoItem'

const ToDoList = ({ toDos, handleDelete }) => {

  return (
    <FlatList data={toDos}
      keyExtractor={(item) => item.id}
      renderItem={itemData => (
        <ToDoItem
        content={itemData.item.content}
        deleteItem={() => handleDelete(itemData.item.id) }/>
    )}
  /> 
  )
}

export default ToDoList
