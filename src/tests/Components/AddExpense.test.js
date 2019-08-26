import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpense';
import expenses from '../fixtures/expenses';


test ('Render Add Expense page correctly', ()=>{
    const onSubmit = jest.fn();
    const history = {push: jest.fn()};
    const wrapper = shallow(<AddExpensePage onSubmit = {onSubmit} history = {history}/>);
    expect(wrapper).toMatchSnapshot();
});

test('AddExpense Submit',()=>{
    const onSubmit = jest.fn();
    const history = { push: jest.fn() };
    const wrapper = shallow(<AddExpensePage onSubmit = {onSubmit} history = {history}/>);
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(wrapper).toMatchSnapshot();
});

    


