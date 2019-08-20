import React from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../Actions/expenses';
import ExpenseForm from './ExpenseForm';

const AddExpense = (props) => (
    <div>
        <p>Add Expense</p>
        <ExpenseForm
            onSubmit = {(expense)=>{
                console.log(expense);
                props.dispatch(addExpense(expense));
                props.history.push('/');
            }}
        />
    </div>
);

export default connect ()(AddExpense);