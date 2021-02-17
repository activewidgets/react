/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Datagrid } from '@activewidgets/react';
import { northwind } from '@activewidgets/examples/data';
import * as templates from './templates';
import options from './options';
import './styles.css';


const columns = [
    { header: 'Company', template: 'company', fixed: true },
    { header: 'Contact', template: 'contact', style: 'background:#f4f4f4', key: 'contact' },
    { header: 'Address', template: 'address', key: 'address' },
    { header: 'Country', type: 'country flag', field: 'country' },
    { header: 'Phone/Fax', type: 'phone & fax'},
    { header: 'Last Order', type: 'money', field: 'amount' },
    { header: 'Order Date', type: 'date', field: 'date' }
];


const rows = northwind.customers;


function onRow(row){

    const {data, cells} = row;

    // calculated values
    cells.amount = 2000 * Math.random();
    cells.date = Date.now() - 500 * 86400000 * Math.random();


    // dynamic row style
    if (data.country === 'France'){
        row.className = 'bg-green';
    }

    // dynamic cell styles
    if (data.city === 'London'){
        cells.address = {className: 'circle'};
    }

    if (data.contactTitle === 'Owner'){
        cells.contact = {className: 'star'};
    }
}


function App(){
    return <Datagrid columns={columns} rows={rows} templates={templates} options={options} onRow={onRow}/>
}


ReactDOM.render(<App />, document.getElementById('app'));
