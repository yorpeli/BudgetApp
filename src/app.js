import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './Store/configureStore';
import {addExpense} from './Actions/expenses';
import {setTextFilter} from './Actions/filters';
import getFilteredList from './Selectors/expenses';
import 'normalize.css/normalize.css';
import './Styles/styles.scss';

const store = configureStore();

const expenseOne = store.dispatch(addExpense({
    description:'Water bill',
    note:'another bill I have to pay',
    amount:23600,
    createdOn:1566295377147
}));

const expenseTwo = store.dispatch(addExpense({
    description:'Gas Bill',
    note:'a second bill I need to pay',
    amount:7800,
    createdOn:1500629537147
}));

const expenseThree = store.dispatch(addExpense({
    description:'July Rent',
    note:'This is this months bill',
    amount: 510000,
    createdOn:1405662953777
}));


const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
    
);

ReactDOM.render(jsx, document.getElementById('app'));
