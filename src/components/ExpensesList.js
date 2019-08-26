import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import SelectExpenses from '../Selectors/expenses';



export const ExpensesList = (props) => (
    <div>
        {
            props.expenses.length ===0?(
                <p>Nothing to see here</p>
            ):(
                props.expenses.map((expense) => {
                    return <ExpenseListItem key={expense.id} {...expense}/>
                })
            )
        }
    </div>
);


const mapStateToProps = (state) => {
    return{ 
        expenses: SelectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpensesList);

