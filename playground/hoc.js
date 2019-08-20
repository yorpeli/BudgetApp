import React from 'react';
import ReactDOM from 'react-dom';
import { AST_PropAccess } from 'terser';

const Info = (props) =>(
    <div>
        <h1>info</h1>
        <p> the info is: {props.info}</p>
    </div>
);

const wrapper = (WrappedComponent) =>{
    return (props) =>(
        <div>
        <p> This is provate info</p>
        <WrappedComponent {...props}/>
        </div>
    );
};

const AdminInfo = wrapper(Info);

ReactDOM.render(<AdminInfo info = 'these are the info details'/>, document.getElementById('app'));

