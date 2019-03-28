import React from 'react';
import { shallow } from 'enzyme';

//Component
import Nav from './Nav';

describe('Nav', () => {
    it('it should have an li', () => {
        const wrapper = shallow(<Nav />)
        expect(wrapper.find('li')).toHaveLength(1);
    })
})
