import {createStore} from 'redux';

const store = createStore((state = {count:0}, action) =>{
    switch(action.type){
        case 'INCREMENT':
        return{
            count: state.count + action.incrementBy
        };
        case 'DECREMENT':
        return{
            count: state.count - action.decrementBy 
        };
        case 'RESET':
        return{
            count: 0
        };
        default:
            return state;
    }
});

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});

const increment = ({incrementBy = 1} = {}) => ({
    type:'INCREMENT',
    incrementBy
});

const decrement = ({decrementBy = 1} = {}) => ({
    type:'DECREMENT',
    decrementBy
});
store.dispatch(increment({incrementBy:5}));

store.dispatch(increment());

store.dispatch({
    type: 'RESET'
});

store.dispatch(decrement({decrementBy:10}));

