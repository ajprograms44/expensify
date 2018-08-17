//This is a component that will be grabbing information from the store

import React from 'react';
import { connect } from 'react-redux';
//connect connects our component to the redux store
//connect needs to be imported for any component that dispatches actions
//or reads from the store
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'


const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {
            props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} {...expense}/>
                //We spread the expense object in order to have access to them all
            })
        }
    </div>
);

//We use .map over the expenses array to list each expense

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
}
//This is common practice to save the function like this and pass into connect

export default connect(mapStateToProps)(ExpenseList);


//Here we are created a higher order connected component
//We pass in ExpenseList as our wrapped component
//In the arguments we pass in what we want to connect, so we pass in a function
// which lets us determine what information in the store we want our
//component to access
//We return an object and put in any {key: value} object pairs we want

