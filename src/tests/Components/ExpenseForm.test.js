import React from 'react';
import { shallow } from 'enzyme';
import ExpenseFrom from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';


test ('Render the form',()=>{
    const wrapper = shallow(<ExpenseFrom/>);
    expect(wrapper).toMatchSnapshot();
});

test ('Render full form',()=>{
    const wrapper = shallow(<ExpenseFrom expense={expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Invalid Form Submission', ()=>{   
    const wrapper = shallow(<ExpenseFrom/>);
    wrapper.find('form').simulate('submit',{
        preventDefault: ()=>{}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('Set description on input chnage',()=>{
    const value = 'New Description';
    const wrapper = shallow(<ExpenseFrom/>);
    wrapper.find('input').at(0).simulate('change',{
        target: {value} 
    });
    expect (wrapper.state('description')).toBe(value);
});

test('Set note on note change',()=>{
    const value = 'lorem ipsum';
    const wrapper = shallow(<ExpenseFrom/>);
    wrapper.find('textarea').simulate('change',{
        target: {value }
    });
    expect(wrapper.state('note')).toBe(value);
});

test('Set amount on valid change', ()=>{
    const value = `25.5`;
    const wrapper = shallow(<ExpenseFrom/>);
    wrapper.find('input').at(1).simulate('change',{
        target: {value} 
    });
    expect (wrapper.state('amount')).toBe(value);
});


test('Set amount on INVALID change', ()=>{
    const value = '12.122';
    const wrapper = shallow(<ExpenseFrom/>);
    wrapper.find('input').at(1).simulate('change',{
        target: { value } 
    });
    expect (wrapper.state('amount')).toBe('');
});

test('Succesfuly send onSubmit prop for valid submission',()=>{
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseFrom expense={expenses[0]} onSubmit = {onSubmitSpy}/>);
    wrapper.find('form').simulate('submit',{
        preventDefault: ()=>{}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount:expenses[0].amount,
        note: expenses[0].note,
        createdOn: expenses[0].createdOn
    });  
});

test('Set new date on dateChange',()=>{
    const now = moment();
    const wrapper = shallow(<ExpenseFrom/>);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdOn')).toEqual(now);
})