import React from 'react';
import Header from '../../components/Header';
import { shallow } from 'enzyme';

test ('Header Rendering', ()=>{
    const wrapper = shallow(<Header/>);
    expect(wrapper).toMatchSnapshot();

    
    //      expect(wrapper.find('h1').text()).toBe('Budget App');
    //     const renderer = new ReactShallowRenderer();
    //     renderer.render(<Header/>);
    //     expect(renderer.getRenderOutput()).toMatchSnapshot();
});
