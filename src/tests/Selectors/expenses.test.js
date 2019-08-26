import selectExpenses from '../../Selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('Filter by text value',()=>{
    const filters = {
        text:'credit',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[2]]);
});

test ('Filter by StartDate', ()=>{
    const filters = {
        text:'',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[2], expenses[1]]);  
});

test ('Filter by End Date',()=>{
    const filters = {
        text:'',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[1],expenses[0]]);
});

test ('Sort by Date',()=>{
    const filters={
        text:'',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2],expenses[1],expenses[0]]);
});

test ('Sort by Amount',()=>{
    const filters={
        text:'',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0],expenses[2],expenses[1]]);
});
