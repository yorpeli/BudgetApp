import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../components/NotFound'
import DashboardPage from '../../components/Dashboard';

test ('Render NotFoundPage', ()=>{
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
});