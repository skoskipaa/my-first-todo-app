import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const ToDoItem = ({ content, deleteItem }) => {
  
  return (
    <TouchableOpacity onPress={deleteItem}>
    <View style={styles.list}>
      <Text>{content}</Text>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#ccf',
    borderWidth: 1,
    borderColor: 'gray',
    marginVertical: 3,
    padding: 3,
    width: 200,
    height: 50,
  },
})

export default ToDoItem
