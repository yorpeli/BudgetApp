import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../Actions/filters';
import moment from 'moment';

test ('Set Start Date - Generate an Object',()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'UPDATE_START_DATE',
        startDate: moment(0)
    })
});

test ('Set End Date - Generate an Object',()=>{
    const action = setEndDate(moment(123456));
    expect(action).toEqual({
        type:'UPDATE_END_DATE',
        endDate: moment(123456)
    });    
});


test('Text Filter with value', ()=>{
    const text = 'Test text';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text
    });
});

test('Text Filter DEFAULT value', ()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    });
    
});

test('Sort By Date',()=>{
    const action = sortByDate();
    expect(action).toEqual({type:'SORT_BY_DATE'});
});

test ('Sort by Amounnt',()=>{
    const action = sortByAmount();
    expect(action).toEqual({type:'SORT_BY_AMOUNT'});
});