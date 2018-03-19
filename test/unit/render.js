
import React from 'react';
import {Grid} from '../../';
import {shallow, mount, render} from 'enzyme';

describe('render', () => {

    const cc = [
        {name: 'abc', value: 0, width: 123, background: 'red'},
        {value: 1, width: 345, style: {textAlign: 'right', background: 'blue'}},
        {name: 'def', value: 2}
    ];

    const rr = [
        ['cell 0.0', 'cell 1.0', 'cell 2.0'],
        ['cell 0.1', 'cell 1.1', 'cell 2.1']
    ];

    let wrapper, root, columns, rows, headers, cells;

    beforeAll(() => {
        wrapper = mount(<Grid columns={cc} rows={rr}/>);
        root = wrapper.childAt(0);
        rows = wrapper.find('.ax-main-view .ax-scrolling-rows .ax-row');
        columns = wrapper.find('.ax-main-view .ax-scrolling-backgrounds .ax-column');
        headers = wrapper.find('.ax-top-view .ax-scrolling-rows .ax-cell');
        cells = i => rows.at(i).find('.ax-cell');
    });

    afterAll(() => {wrapper.unmount()});

    let text = n => n.text(),
        width = n => n.prop('style').width,
        align = n => n.prop('style').textAlign,
        background = n => n.prop('style').background;

    it('renders root class', () => {
        expect(root.is('div.ax-grid')).toBe(true);
    });

    it('renders rows, columns', () => {
        expect(rows).toHaveLength(2);
        expect(columns).toHaveLength(3);
    });

    it('renders headers', () => {
        expect(headers.map(text)).toEqual(['abc', '', 'def']);
        expect(headers.map(width)).toEqual(['123px', '345px', '100px']);
    });

    it('sets column width', () => {
        expect(columns.map(width)).toEqual(['123px', '345px', '100px']);
    });

    it('sets column background', () => {
        expect(columns.map(background)).toEqual(['red', 'blue', undefined]);
        expect(headers.map(background)).toEqual([undefined, undefined, undefined]);
        expect(cells(0).map(background)).toEqual([undefined, undefined, undefined]);
    });

    it('renders cell content', () => {
        expect(cells(0).map(text)).toEqual(rr[0]);
        expect(cells(1).map(text)).toEqual(rr[1]);
    });

    it('renders cell width', () => {
        expect(cells(0).map(width)).toEqual(['123px', '345px', '100px']);
    });

    it('renders cell align', () => {
        expect(cells(0).map(align)).toEqual([undefined, 'right', undefined]);
    });

});