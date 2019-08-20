import React from 'react';
import ExpensesList from "./ExpensesList"
import ExpenseListFilter from './ExpenseListFilter';

const DashboardPage = () => (
    <div>
        <ExpenseListFilter/>
        <ExpensesList/>
    </div>
);

export default DashboardPage;
