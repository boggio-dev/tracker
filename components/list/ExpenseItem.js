import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

function ExpenseItem(props){
  const {
    id,
    title,
    date,
    amount,
  } = props;

  const formattedDate = date.toLocaleDateString();
  
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{amount}</Text>
      <Text>{formattedDate}</Text>
    </View>
  )
}

export default ExpenseItem

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    borderColor:'#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },  
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
})