import { addExpense, removeExpense,editExpense } from '../../Actions/expenses';


test('Removing an expense', ()=>{
    const action = removeExpense({id: '123ABC'});
    expect(action).toEqual({
        type:'REMOVE',
        id :'123ABC'
    }); 
});

test (`Updating an expense`, ()=>{
    const action = editExpense('123', {note:'1234'});
    expect(action).toEqual({
        type:'UPDATE_EXPENSE',
        id:'123',
        updates:{
            note:'1234'
        }
    });
});

test ('Add expense with provided values',()=> {
    const expenseData ={
        description: 'A test Desc', 
        note: 'Test Note', 
        amount: 500, 
        createdOn: 1280
    };
    const action = addExpense(expenseData);
    
expect(action).toEqual({
    type:'ADDEXPENSE',
    expense:{
        ...expenseData,
        id: expect.any(String)
    }
});
});

test ('Add expense with deafult values', ()=>{
    const action = addExpense({});
    expect(action).toEqual({
        type:'ADDEXPENSE',
        expense:{
            description: '', 
            note: '', 
            amount: 0, 
            createdOn: 0,
            id: expect.any(String)
        }
    });
});