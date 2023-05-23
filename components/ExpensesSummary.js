import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpensesList from './list/ExpensesList';

const ExpensesSummary = (props) => {
  const {
    expenses,
  } = props;

  const expensesTotalSum = expenses.reduce((partialSum, a) => partialSum + a.amount, 0);

  return (
    <View>
      <View style={styles.totalContainer}>
        <Text style={styles.total}>Total expended: ${ expensesTotalSum }</Text>
      </View>

      <ExpensesList expenses={ expenses } />
    </View>
  )
}

export default ExpensesSummary

const styles = StyleSheet.create({
  totalContainer: {
    width: '100%',
    marginVertical: 20,
    paddingRight: 10,
    alignItems: 'flex-end'
  },
  total:  {
    fontSize: 30,
  }
})