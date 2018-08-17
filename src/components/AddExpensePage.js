import React from 'react';
import ExpenseForm from './ExpenseForm'
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses'

const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm 
      onSubmit= {
        (expense) => {
          props.dispatch(addExpense(expense));
          //We dispatch an addExpense action when the form is submitted
          props.history.push('/')
          //props.history.push will redirect you back to whichever page
          //specified
        }
        //We abstract this data in order to use it not only in AddExpensePage
        //but also in EditExpensePage as well
      }
    />
  </div>
);

export default connect()(AddExpensePage);
