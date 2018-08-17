import React from 'react';
import{ connect } from 'react-redux'
import { removeExpense } from '../actions/expenses'

const ExpenseListItem = ({dispatch, id, description, amount, createdAt},props) => (
// Here we destructure the object being passed in to grab what we need
    <div>
        <h3>Expense Name: {description}</h3>
        <p>Amount: {amount}</p>
        <p>Created: {createdAt}</p>
        <button onClick={(e) => {
            dispatch(removeExpense({id}));
        }}>Remove</button>
    </div>
);




export default connect()(ExpenseListItem);