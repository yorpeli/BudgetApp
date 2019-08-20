import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import {addExpenses} from '../Actions/expenses';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();

export default class ExpenseFrom extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            note: props.expense ? props.expense.note : '',
            createdOn: props .expense? moment(props.expense.createdOn) : moment(),
            calendarFocused:false,
            error:''
        }
    }
    
    onDescriptionChange = (e) =>{
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onNoteChange = (e) =>{
        const note = e.target.value;
        this.setState (() => ({ note }));
    };
    onAmountChange = (e) =>{
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,3})?$/)){
            this.setState (() => ({amount}));    
        }
    };

    onDateChange = (createdOn) =>{
        if(createdOn){
            this.setState (() => ({createdOn}));
        }
    };

    onFocusChange = ({ focused }) =>{
        this.setState(() => ({calendarFocused: focused}));
    };

    onSubmit = (e) =>{
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState (() =>({error: 'Something went Wong!'}));
        } else {
            this.setState(()=>({error:''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                note: this.state.note,
                createdOn: this.state.createdOn.valueOf()
            });
            this.setState(()=> ({
                description:'',
                amount: '',
                note:'',
                createdOn: moment(),
                calendarFocused:false,
                error: ''//`${this.state.description} Submitted Succesfully`
            }));
            
        }
    }
    render(){
        return(
            <div>
                <h3>Expense Form:</h3>
                <form onSubmit = {this.onSubmit}>
                    <input
                        type='text'
                        placeholder = 'description'
                        autoFocus
                        value={this.state.description}
                        onChange = {this.onDescriptionChange}
                    />
                    <input
                        type='number'
                        placeholder= 'amount'
                        value = {this.state.amount}
                        onChange = {this.onAmountChange}    
                    />
                    <SingleDatePicker
                        date = {this.state.createdOn}
                        onDateChange = {this.onDateChange}
                        focused = {this.state.calendarFocused}
                        onFocusChange = {this.onFocusChange}
                        numberOfMonths = {1}
                        isOutsideRange = {() => false}
                    />
                    <textarea
                        placeholder='add a note to your expense (optional)'
                        value = {this.state.note}
                        onChange = {this.onNoteChange}
                    />
                    <button>Add Expense</button>
                </form>
                { this.state.error? (<p>{this.state.error}</p>):(<p>no errors</p>)}
            </div>
        )
    }
};

