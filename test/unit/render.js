
import React from 'react';
import {Grid} from '../../';
import {shallow, mount, render} from 'enzyme';

test('empty', () => {
    const wrapper = shallow(<Grid/>);
    expect(wrapper.is('div.ax-grid')).toBe(true);
});