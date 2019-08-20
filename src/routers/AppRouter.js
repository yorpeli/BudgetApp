import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import DashboardPage from '../components/Dashboard';
import AddExpense from '../components/AddExpense';
import EditPage from '../components/Edit';
import HelpPage from '../components/Help';
import NotFoundPage from '../components/NotFound';
import Header from '../components/Header';

const AppRouter = ()=>(
    <BrowserRouter>
        <div>
            <Header/>
        <Switch>
            <Route path="/" component={DashboardPage} exact={true}/>
            <Route path="/create" component={AddExpense}/>
            <Route path = "/edit/:id" component = {EditPage}/>
            <Route path = "/help" component = {HelpPage}/>
            <Route component = {NotFoundPage}/>
        </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;