import React from 'react';
import ReactDOM from 'react-dom';
import{ Provider } from 'react-redux'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/initialize'

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 500 }));
store.dispatch(addExpense({ description: 'Gas bill',createdAt: 1000}));
store.dispatch(addExpense({ description: 'Light bill', amount: 234 }));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
//Provider allows us to give all of our components access to the store 
//without having to pass it onto every component


ReactDOM.render(jsx, document.getElementById('app'));
