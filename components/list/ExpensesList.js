import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import ExpenseItem from './ExpenseItem';

export default function ExpensesList(props) {
  const {
    expenses,
  } = props;

  return (
    <View style={ styles.container }>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return <ExpenseItem  {...item} />
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
})