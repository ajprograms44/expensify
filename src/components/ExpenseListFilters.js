import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters'

const ExpenseListFilters = (props) => (
    <div>
        <input type='text' value={props.filters.text} onChange={(e) => {
        //Here we set the value of the input to the filter text
            props.dispatch(setTextFilter(e.target.value));
            //in the event of a change, we are detecting those changes and
            //changing the text filter each and every time with this function
            //which changes the store with the .dispatch function
        }} />
        <select 
        value={props.filters.sortBy}
        onChange={(e) => {
            if (e.target.value === 'date') {
                props.dispatch(sortByDate());
            } else if (e.target.value === 'amount') {
                props.dispatch(sortByAmount());
            }
        }}
        >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
)

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}



export default connect(mapStateToProps)(ExpenseListFilters);