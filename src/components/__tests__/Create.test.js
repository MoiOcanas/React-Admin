import React from 'react';
import ReactTestUtils from 'react-dom/test-utils'; 
import Create from '../Create';

describe('Create Component', () => {
 
    it('has a h3', () => {
        const component = ReactTestUtils.renderIntoDocument(<Create />);
        var h3 = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'h3');
    });
  })