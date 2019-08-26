import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesList } from '../../components/ExpensesList';
import expenses from '../fixtures/expenses';

test ('Render Expense list with Expenses',()=>{
    const wrapper = shallow(<ExpensesList expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Should render EMPTY string',()=>{
    const wrapper = shallow(<ExpensesList expenses ={[]}/>);
    expect(wrapper).toMatchSnapshot();
});