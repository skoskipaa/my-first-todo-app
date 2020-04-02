import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ToDoList from './components/ToDoList'
import ToDoInput from './components/ToDoInput'

export default function App() {
  const [toDos, setToDos] = useState([])
  const [text, setText] = useState('')

  const handleTextChange = (enteredText) => {
    setText(enteredText)
  }

  const addToDo = () => {
    setToDos(currentState => [...currentState, 
      {
        id: Math.random().toString(),
        content: text
      }])
    setText('')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>My Awesome ToDo App</Text>
      <ToDoInput addToDo={addToDo} handleTextChange={handleTextChange} text={text} />
      <ToDoList toDos={toDos}/>
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
