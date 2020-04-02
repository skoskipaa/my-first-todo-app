import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const ToDoItem = ({ content }) => {
  return (
    <View style={styles.list}>
      <Text>{content}</Text>
    </View>
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
