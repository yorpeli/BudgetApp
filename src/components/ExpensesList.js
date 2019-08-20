import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import SelectExpenses from '../Selectors/expenses';



const ExpensesList = (props) => (
    <div>
        <h3>ExpensesList</h3>
        <p>{props.expenses.length}</p>
        {
            props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} {...expense}/>
            })}
    </div>
);


const mapStateToProps = (state) => {
    return{ 
        expenses: SelectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpensesList);

