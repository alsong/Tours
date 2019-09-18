import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './index';
import './../../setupTests';

describe('Navbar component', () => {
    it('It should render without errors', () =>{
        const component = shallow(<Navbar/>);
        const wrapper = component.find('.navbar');
        expect(wrapper.length).toBe(1);
    })
})