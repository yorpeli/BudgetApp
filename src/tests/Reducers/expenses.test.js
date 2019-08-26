import expensesReducer from '../../Reducers/expenses';
import expenses from '../fixtures/expenses';


test('Should set defualt state',()=>{
    const state = expensesReducer(undefined, {type:'@@INIT'});
    expect(state).toEqual([]);
});

test ('Remove with an valid ID',()=>{    
    const action = {
        type:'REMOVE',
        id: expenses[0].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1], expenses[2]]);
});

test ('Remove with an INVALID ID',()=>{    
    const action = {
        type:'REMOVE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[1],expenses[2]]);
});

test('Add an expense', ()=>{
    const addedExpense = {
        id:'109',
        description:'Just added this one',
        note:'test ADDED',
        amount:11111,
        createdOn: 2456789
    };
    const action = {type:'ADDEXPENSE', expense:addedExpense};
    const state = expensesReducer(expenses, action);
    expect (state).toEqual([...expenses, addedExpense]);
});

test('Edit an expense',()=>{
    const amount = 11111;
    const action = {
        type:'UPDATE_EXPENSE', 
        id:expenses[0].id,
        updates:{
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].amount).toBe(amount);
});


test('Edit an expense INVALID ID',()=>{
    const editedExpense = {
        description:'Just added this one',
        note:'test ADDED',
        amount:11111,
        createdOn: 2456789
    };
    const id = '-1';
    const action = {type:'UPDATE_EXPENSE', id, updates:editedExpense};
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses]);
});