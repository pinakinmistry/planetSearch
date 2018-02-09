/**
 * @jest-environment node
 */
import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {searchPlanet} from './SearchPlanet';
import Planetdescription from '../../components/planetDescription/planetDescription'

configure({ adapter: new Adapter() })

describe('<searchPlanet/>',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<searchPlanet planetOptions="options"/>);
    });
    it('planet description  should not be present',()=>{
        wrapper.setProps({planetinfoStart: true});
        expect(wrapper.find(Planetdescription)).toHaveLength(0);
    });
})