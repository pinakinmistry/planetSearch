/**
 * @jest-environment node
 */
import React from 'react';
import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem'
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })

describe('<NavigationItems/>',()=>{
    it("should have one navigation item without authentication",()=>{
        const wrapper = shallow(<NavigationItems/>);
        expect(wrapper.find(NavigationItem)).toHaveLength(1);
    });
    it("should have two navigation item with authentication",()=>{
        const wrapper = shallow(<NavigationItems isAuth/>);
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });
});
