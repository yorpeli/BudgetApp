

const expenseReducerDefaultState =[];

export default (state = expenseReducerDefaultState, action) => {
    switch (action.type){
        case 'ADDEXPENSE':
            return [...state, action.expense];
        case 'REMOVE':
            return state.filter(({id}) => {
                return id !== action.id;
            });
        case 'UPDATE_EXPENSE':
            return state.map((expense)=>{
                if(expense.id === action.id){
                    return{
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
};

