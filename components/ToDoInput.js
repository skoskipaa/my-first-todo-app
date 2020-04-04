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
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          onChangeText={handleTextChange}
          value={text}
        />
        <View style={styles.buttons}>
          <Button title="Add" onPress={handleAdd}/>
          <Button title="Cancel" color="red" onPress={handleVisibility}/>
        </View>
      </View>
    </Modal>
    )
  }

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    },
  inputField: {
    height: 40,
    width: '80%',
    fontSize: 18,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    padding: 3,
    },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '60%'
    
  }
})

export default ToDoInput


/* Ilman kentän tyhjennystä:
<Button title="Add" onPress={() => addTodo(textf)}/>
*/
