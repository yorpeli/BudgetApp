import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';


//ADD EXPENSE
const addExpense = (
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
const removeExpense = ({id =0}) => ({
    type:'REMOVE',
    id
});

//EDIT EXPENSE
const editExpense = (id, updates) => ({
    type:'UPDATE_EXPENSE',
    id,
    updates
});

const expenseReducerDefaultState =[];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
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

// END EXPENSES ACTIONS


//FULTERS ACTIONS


const setTextFilter = (text)=>({
    type:'SET_TEXT_FILTER',
    text
});

//SET SORT BY DATE

const sortByDate = () => ({
    type:'SORT_BY_DATE'
});

//SET SORT BY AMOUNT

const sortByAmount = () => ({
    type:'SORT_BY_AMOUNT'
});

//SET START DATE 

const setStartDate = (startDate) =>({
    type:'UPDATE_START_DATE',
    startDate
});

//SET END DATE

const setEndDate = (endDate) =>({
    type:'UPDATE_END_DATE',
    endDate
})

const filtersReducerDefaultState= {
    text:'',
    sortBy: 'date',
    startDate: undefined,
    endDate:undefined
};
s
const filtersReducer = (state = filtersReducerDefaultState, action) =>{
    switch (action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state, 
                text:action.text
            }
        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy:'amount'
            }
        case 'SORT_BY_DATE':
            return{
                ...state,
                sortBy:'date'
            }
        case 'UPDATE_START_DATE':
            return{
                ...state,
                startDate:action.startDate
            }
        case 'UPDATE_END_DATE':
            return{
                ...state,
                endDate:action.endDate
            }
        default:
            return state;
    }
};

 // END FILTERS ACTIONS

//******************************* 

const getVisableExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) =>{
        const startDaetMatch = typeof startDate !=='number' || expense.createdOn >= startDate;
        const endDateMatch = typeof endDate !=='number' || expense.createdOn <= endDate; 
        const textMatch = typeof text !=='string' || expense.description.toLowerCase().includes(text.toLowerCase());
        return startDaetMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy ==='date'){
            return a.createdOn < b.createdOn? 1 : -1;
        } else if (sortBy ==='amount'){
            return a.amount < b.amount? 1: -1;
        }
    });
};

// Store creation
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visableExpenses = getVisableExpenses(state.expenses, state.filters);
    console.log(visableExpenses);
});

const expenseOne = store.dispatch(addExpense({description:'First description', amount:100, createdOn:300}));
const expenseTwo = store.dispatch(addExpense({description:'Coffee rent', amount:300, createdOn: 500}));
const expenseThree = store.dispatch(addExpense({description:'Coke', amount:700, createdOn:100}));

// store.dispatch(removeExpense({id:expenseOne.expense.id}));
// store.dispatch(editExpense(
//     expenseTwo.expense.id,
//     {amount:500}
// ));

//store.dispatch(setTextFilter(''));
store.dispatch(sortByAmount());
store.dispatch(sortByDate());

//store.dispatch(setStartDate(90));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(225));
// store.dispatch(setEndDate());


const demoState = {
    expenses:[{
        id:'dsadasda',
        description:'Jan 2019 Rent ',
        note: 'Rent Payment for the last month',
        amount: 52500,
        createdOn:0
    }],
    filters:{
        text:'rent',
        sortBy: 'amount',//or date
        startDate: undefined,
        endDate:undefined
    }
};

