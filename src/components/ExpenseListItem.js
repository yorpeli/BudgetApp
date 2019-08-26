import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import numeral from 'numeral';



export const ExpenseListItem = ({id,description, amount, createdOn}) => (
    <div>
        <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
        </Link>
        <p>amount : 
            {numeral(amount / 100).format('$0,0.00')} 
            {' was created on '}
            {moment(createdOn).format('MMM Do YYYY HH:mm')}
        </p>        
    </div>
);

export default connect()(ExpenseListItem);