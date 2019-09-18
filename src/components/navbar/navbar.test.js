import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './index';
import { findByTestAttr } from './../../../utils';

const setUp = (props={}) => {
    const component = shallow(<Navbar {...props}/>);
    return component;
}

describe('Navbar component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    })

    it('Should render without errors', () =>{
        const wrapper = findByTestAttr(component,'navbarComponent');
        expect(wrapper.length).toBe(1);
    })

    it('Should render logo', () => {
        const wrapper = findByTestAttr(component,'logoIMG');
        expect(wrapper.length).toBe(1);
    })

    it('Should render nav links', () =>{
        const wrapper = findByTestAttr(component,'navLinksComponent');
        expect(wrapper.length).toBe(1);
    })

    it('Should render home nav link', () =>{
        const wrapper = findByTestAttr(component,'homeNavlinkComponent');
        expect(wrapper.length).toBe(1);
    })

    it('Should render about nav link', () => {
        const wrapper = findByTestAttr(component,'aboutNavlinkComponent');
        expect(wrapper.length).toBe(1);
    })

    it('Should render tour nav link', () =>{
        const wrapper = findByTestAttr(component,'tourNavlinkComponent');
        expect(wrapper.length).toBe(1);
    })
    
    
})