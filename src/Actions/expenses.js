import uuid from 'uuid';

//ADD EXPENSE
export const addExpense = (
    {
        description = '', 
        note = '', 
        amount = 0, 
        createdOn = 0
    } = {}
) => ({
    type: 'ADDEXPENSE',
    expense : {
        id:uuid(),
        description,
        note,
        amount,
        createdOn
    }
});

//REMOVE EXPENSE
export const removeExpense = ({id =0}) => ({
type:'REMOVE',
id
});

//EDIT EXPENSE
export const editExpense = (id, updates) => ({
type:'UPDATE_EXPENSE',
id,
updates
});
