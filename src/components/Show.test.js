import React from 'react';
import { shallow } from 'enzyme';

//Component
import Show from './Show';

describe('Nav', () => {
    it('should render correctly with no props', () => {
        const component = shallow(<Show />);
        
        expect(component).toMatchSnapshot();
    });
});