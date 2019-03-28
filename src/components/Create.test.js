import React from 'react';
import { shallow } from 'enzyme';

//Component
import Create from './Create';

describe('Create', () => {
    it('it should have an h3', () => {
        const wrapper = shallow(<Create />)
        expect(wrapper.find('h3')).toHaveLength(1);
    })
    it('it should have a form', () => {
        const wrapper = shallow(<Create />)
        expect(wrapper.find('form')).toHaveLength(1);
    })
})

