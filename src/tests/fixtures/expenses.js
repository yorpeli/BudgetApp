import moment from 'moment';

export default [{
    id:'0',
    description:'Test Bill',
    note:'test desc',
    amount:7800,
    createdOn:moment(0).subtract(4, 'days').valueOf()
},{
    id:'1',
    description:'Test Bill2',
    note:'test desc',
    amount:123,
    createdOn: 0
},{
    id:'2',
    description:'Test credit',
    note:'test desc',
    amount:456,
    createdOn:moment(0).add(5,'days').valueOf()
}]
