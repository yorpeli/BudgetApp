import filtersReducer from '../../Reducers/filters';
import moment from 'moment';

test('Setup default values',()=>{
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Sort By amount', ()=>{
    const state = filtersReducer(undefined, { type:'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount')
});

test('Sort By Date (with initial state of amount)', ()=>{
    const currentState = {
        text:'',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    } 
    const action = { type:'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe('date')
});


test ('Should set the Text Filter',()=>{
    const text = 'tests texts';
    const state = filtersReducer (undefined, {type:'SET_TEXT_FILTER', text})
    expect(state.text).toBe(text)
});


test ('Should update START DATE', ()=>{
    const startDate = moment()
    const state = filtersReducer(undefined, {type:'UPDATE_START_DATE', startDate})
    expect(state.startDate).toEqual(startDate)
});

test ('Should update END DATE', ()=>{
    const endDate = moment()
    const state = filtersReducer(undefined, {type:'UPDATE_END_DATE', endDate})
    expect(state.endDate).toEqual(endDate)
});

