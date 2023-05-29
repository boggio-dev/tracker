import { createContext, useReducer  } from "react"
import { EXPENSES } from "../data/dummy-data"

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({description, amount, date}) => {},
  deleteExpense: (id)  => {},
  updateExpense: (id, {description, amount, date}) => {},
})

const expensesReducer = (state, action) => {
  switch(action.type) {
    case 'ADD': 
      const id = new Date().toString() + Math.random().toString()

      return [{ ...action.payload, id: id },...state]
    case 'DELETE': 
      return state.filter(expense => expense.id !== action.payload)
    case 'UPDATE':
      const expenseId = state.findIndex(expense => expense.id === action.payload.id);

      const selectedExpense = state[expenseId];
      const updatedExpense = { ...selectedExpense, ...action.payload.expenseData}
      const updatedExpenses = [...state]
      updatedExpenses[expenseId] = updatedExpense;

      return updatedExpenses
    default:
      return state;
  }
} 

const ExpensesContextProvider = ({children}) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, EXPENSES) // Second param is the initial data

  const addExpense = (expenseData) => {
    dispatch({
      type: 'ADD',
      payload: expenseData
    })
  }

  const deleteExpense = (id) => {
    dispatch({
      type: 'DELETE',
      payload: id
    })
  }

  const updateExpense = (id, expenseData) => {
    dispatch({
      type: 'UPDATE',
      payload: {
        id,
        expenseData,
      }
    })
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      { children }
    </ExpensesContext.Provider>
  )
}

export default ExpensesContextProvider;