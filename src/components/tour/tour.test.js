import React from 'react';
import { shallow } from 'enzyme';
import Tour from './index';
import { findByTestAttr } from './../../../utils';

const setUp = (props={}) =>{
    const component = shallow(<Tour {...props}/>);
    return component;
}

describe('Tour Component', () => {
    
    describe(' Have props', () =>{

        let wrapper; 
        beforeEach(() =>{
            const props ={
                tour:{
                    id : 1,
                    city: 'Test City ',
                    img: 'Test img',
                    name: 'Test name',
                    info: 'Test Info'
                }
            }
            wrapper = setUp(props);
        })

        it('Should render without errors', () => {
            const component = findByTestAttr(wrapper,'tourComponent');
            expect(component.length).toBe(1);
        })

        it('Should render image', () =>{
            const component = findByTestAttr(wrapper,'imgComponent');
            expect(component.length).toBe(1);
        })

        it('Should render close button', () =>{
            const component = findByTestAttr(wrapper,'closeBtnComponent');
            expect(component.length).toBe(1);
        })

        it('Should render h3', () =>{
            const component = findByTestAttr(wrapper,'cityComponent');
            expect(component.length).toBe(1);
        })

        it('Should render h4', () =>{
            const component = findByTestAttr(wrapper,'nameComponent');
            expect(component.length).toBe(1);
        })
        
        it('Should render h5', () =>{
            const component = findByTestAttr(wrapper,'infoComponent');
            expect(component.length).toBe(1);
        })

        it('Should render span', () =>{
            const component = findByTestAttr(wrapper,'infoBtnComponent');
            expect(component.length).toBe(1);
        })

    })

    
})