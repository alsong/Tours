import React from 'react';
import Tourlist from './index';
import { shallow } from 'enzyme';
import { findByTestAttr } from './../../../utils';

const setUp = (props={}) =>{
    const component = shallow(<Tourlist {...props}/>);
    return component;
}

describe('TourList component', () =>{

    let component;
    beforeEach(() =>{
        component = setUp();
    })

    it('Should render without errors', ()=>{
        const  wrapper = findByTestAttr(component,'secComponent');
        expect(wrapper.length).toBe(1);
    })
})