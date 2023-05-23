import React from 'react'
import { EXPENSES } from '../data/dummy-data';
import ExpensesSummary from '../components/ExpensesSummary';

const Recent = (props) => {
  const today = new Date()
  const sevenDaysAgo = Date.parse(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7));
  const recentExpenses = EXPENSES.filter(expense => expense.date > sevenDaysAgo)

  return <ExpensesSummary expenses={recentExpenses} />
}

export default Recent;
