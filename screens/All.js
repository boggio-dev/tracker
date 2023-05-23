import React from 'react'
import ExpensesSummary from '../components/ExpensesSummary'
import { EXPENSES } from '../data/dummy-data'

const All = (props) => {
  return <ExpensesSummary expenses={EXPENSES} />
}

export default All