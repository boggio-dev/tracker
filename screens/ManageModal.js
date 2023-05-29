import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import IconButton from '../components/button/IconButton';

const ManageModal = (props) => {
  const { navigation, route } = props;
  const expenseId = route.params?.expenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: expenseId ? 'Edit': 'Add',
    })
  }, [navigation, expenseId])

  const deleteExpense = (id) => {
    console.log({id})
  }

  const cancel = () => {
    navigation.goBack()
  }

  const add = () => {

  }

  const update = () => {
    
  }

  return (
    <View style={styles.container}>
      <Button title='Cancel' onPress={cancel} />
      
      <Button title={expenseId ? 'Update': 'add'} onPress={expenseId ? update : add } />
      
      {
        expenseId && <Button title='Remove' onPress={deleteExpense} />
      }
    </View>
  )
}

export default ManageModal

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  }
})