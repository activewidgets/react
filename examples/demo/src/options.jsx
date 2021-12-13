/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { intl, format, column, type, row } from "@activewidgets/options";


export default [

    // enable intl. number/date formats
    intl('en-US'),

    // define named formats
    format('money', {style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2}),
    format('date', {year: 'numeric', month: 'short', day: 'numeric'}),

    // set column defaults
    column({width: 200}),

    // define reusable column types
    type('country flag', {template: 'country', width: 170}),
    type('phone & fax', {template: 'phone', width: 150}),
    type('money', {format: 'money', width: 100, align: 'right'}),
    type('date', {format: 'date', width: 150, align: 'right'}),

    // customize row
    row(({data}) => {

        let className, cells = {};

        // calculated values
        cells.amount = 2000 * Math.random();
        cells.date = Date.now() - 500 * 86400000 * Math.random();

        // dynamic row style
        if (data.country == 'France'){
            className = 'bg-green';
        }

        // dynamic cell styles
        if (data.city == 'London'){
            cells.address = {className: 'circle'};
        }

        if (data.contactTitle == 'Owner'){
            cells.contact = {className: 'star'};
        }

        return {className, cells};
    })
];