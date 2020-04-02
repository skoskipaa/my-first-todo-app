import React from 'react'
import { View, Button, TextInput, StyleSheet } from 'react-native'

const ToDoInput = ({ handleTextChange, text, addToDo }) => {
  return (
    <View style={styles.input}>
    <TextInput
      style={styles.inputField}
      onChangeText={handleTextChange}
      value={text}
    />
    <Button title="Add" onPress={addToDo}/>
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
