import React, { useState } from 'react'
import { View, Button, TextInput, StyleSheet } from 'react-native'

const ToDoInput = ({ addToDo }) => {
  const [text, setText] = useState('')

  const handleTextChange = (enteredText) => {
    setText(enteredText)
  }

  const handleAdd = () => {
    addToDo(text)
    setText('')
  }

  return (
    <View style={styles.input}>
    <TextInput
      style={styles.inputField}
      onChangeText={handleTextChange}
      value={text}
    />
    <Button title="Add" onPress={handleAdd}/>
    </View>
    )
  }

const styles = StyleSheet.create({
  inputField: {
    height: 40,
    width: 300,
    fontSize: 18,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    margin: 15,
    padding: 3,
    },
  input: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
    },
})

export default ToDoInput


/* Ilman kentän tyhjennystä:
<Button title="Add" onPress={() => addTodo(textf)}/>
*/
