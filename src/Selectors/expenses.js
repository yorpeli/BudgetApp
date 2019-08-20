import moment from 'moment';

export default (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) =>{
        const createdOnMoment = moment (expense.createdOn);
        const startDaetMatch = startDate ? startDate.isSameOrBefore(createdOnMoment, 'day') : true ; 
        const endDateMatch = endDate ? endDate.isSameOrAfter (createdOnMoment, 'day')  : true;
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