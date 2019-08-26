import React from 'react';
import { shallow } from 'enzyme';
import DashboardPage from '../../components/Dashboard';

test ('Render Dashboard', ()=>{
    const wrapper = shallow(<DashboardPage/>);
    expect(wrapper).toMatchSnapshot();
});