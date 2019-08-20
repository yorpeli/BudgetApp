import React from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates';
import {setTextFilter, sortByDate, sortByAmount, setEndDate, setStartDate} from "../Actions/filters";

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused:null
    };
    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = (calendarFocused) => {
        this.setState(()=>({ calendarFocused }))
    };

    render () {
        return(
            <div>
                <input type = "text" 
                value = {this.props.filters.text}  
                onChange = { (e) => {
                    props.dispatch(setTextFilter(e.target.value));
                }}/>
                <select 
                value = {this.props.filters.sortBy}
                onChange = {(e)=>{
                    if(e.target.value === 'amount'){
                        this.props.dispatch(sortByAmount())
                    } else if(e.target.value ==='date'){
                        this.props.dispatch(sortByDate())
                    }
                }}>
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.props.filters.endDate}
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange= {this.onFocusChange}
                    showClearDates= {true}
                    numberOfMonths={1}
                    isOutsideRange={()=> false}

                />
            </div>
        )};
}

const mapStateToProps = (state) => {
    return{
        filters:state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);


