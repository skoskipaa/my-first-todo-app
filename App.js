import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ToDoList from './components/ToDoList'
import ToDoInput from './components/ToDoInput'

export default function App() {
  const [toDos, setToDos] = useState([])
  const [isVisible, setVisible] = useState(false)

  const addToDo = (newToDo) => {
    setToDos(currentState => [...currentState, 
      {
        id: Math.random().toString(),
        content: newToDo
      }])
    handleVisibility()
  }

  const deleteToDo = (id) => {
    setToDos(currentToDos => {
      return toDos.filter(todo => todo.id !== id)
    })
  }
  //setToDos(toDos.filter(todo => todo.id !== id))

  const handleVisibility = () => {
    setVisible(!isVisible)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>My Awesome ToDo App</Text>
      <Button title="Add a new ToDo" onPress={handleVisibility}/>
      <ToDoInput addToDo={addToDo} isVisible={isVisible} handleVisibility={handleVisibility}/>
      <ToDoList toDos={toDos} handleDelete={deleteToDo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9ebff',
    alignItems: 'center',
    paddingTop: 30,
  },
  appTitle: {
    color: '#361470',
    fontSize: 24,
  },
});
