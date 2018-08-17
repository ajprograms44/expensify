import React from 'react';
import moment from 'moment';
//library for time
import { SingleDatePicker } from 'react-dates';
//calendar picker tool
import 'react-dates/lib/css/_datepicker.css';
//importing the css for the calender

const now = moment();
console.log(now.format('MMM Do, YYYY'))


export default class ExpenseForm extends React.Component {
    state = {
        description:'',
        note: '',
        amount: '',
        createdAt: moment(),
        calendarFocused:false,
        error: ''
    };
    //Only requiring that description be input, all others are optional
    //We want to use local component state to track the changes of all 
    // of these inputs

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            //allows us to be able to clear the value
            this.setState(() => ({amount}));
        }
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({createdAt}))
        }
        
    };
    onFocusChange = ({focused}) => {
        this.setState(() => ({ calendarFocused: focused }))
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({error: 'Please provide description and amount.'}))
        } else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
            //Here we pass the data up to the parent with an onSubmit function
            //passing in an object of what was entered into this form
            //We passed the data up in order to reuse this component
        }
    };
    // We are grabbing the description from the target (the input) and setting the
    //state to whats entered in the input text box
    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type='text'
                        placeholder='Description'
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    {/* - We need to set the value to the state value
                        - onChange allows us to actually change the value
                        - So we reference a function we'll create to grab the
                        input and */}
                    <input
                        type='text'
                        placeholder='Amount'
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                        
                    />

                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button> Add Expense </button>
                </form>
            </div>
        )
    }
}