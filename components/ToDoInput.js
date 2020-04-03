import React, { useState } from 'react'
import { View, Button, TextInput, StyleSheet, Modal } from 'react-native'

const ToDoInput = ({ addToDo, isVisible, handleVisibility }) => {
  const [text, setText] = useState('')

  const handleTextChange = (enteredText) => {
    setText(enteredText)
  }

  const handleAdd = () => {
    addToDo(text)
    setText('')
  }

  return (
    <Modal visible={isVisible} animationType='slide'>
      <View style={styles.input}>
        <TextInput
          style={styles.inputField}
          onChangeText={handleTextChange}
          value={text}
        />
        <Button title="Add" onPress={handleAdd}/>
        <Button title="Cancel" color="red" onPress={handleVisibility}/>
      </View>
    </Modal>
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
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
    },
})

export default ToDoInput


/* Ilman kentän tyhjennystä:
<Button title="Add" onPress={() => addTodo(textf)}/>
*/
