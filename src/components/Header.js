import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = ()=>(
    <header>
        <h1>Budget App</h1>
        <NavLink to='/' activeClassName='isActive' exact={true}> Home </NavLink>
        <NavLink to='/create' activeClassName='isActive'> Add </NavLink>
        <NavLink to='/help' activeClassName='isActive'> Help </NavLink>
    </header>
);

export default Header;
