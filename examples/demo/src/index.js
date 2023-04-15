/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { createRoot } from "react-dom/client";
import { Datagrid } from '@activewidgets/react';
import { northwind } from '@activewidgets/examples/data';
import * as flags from '@activewidgets/examples/flags';
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

function calc(){
    return {
        amount: 2000 * Math.random(),
        date: Date.now() - 500 * 86400000 * Math.random()
    };
}

function App(){

    return <Datagrid columns={columns} rows={rows} calc={calc} options={options}>{{

        company: ({data}) => <div>
            <div className="bold blue">{data.customerID}</div>
            <div className="small">{data.companyName}</div>
        </div>,
        
        contact: ({data}) => <div>
            <div className="bold">{data.contactName}</div>
            <div className="small">{data.contactTitle}</div>
        </div>,
        
        address: ({data}) => <div>
            <div className="small">{data.address}</div>
            <div className="small">{data.postalCode} <span>{data.city}</span></div>
        </div>,
        
        country: ({text}) => <div><img src={flags[text]}/>{text}</div>,
        
        phone: ({data}) => <div>
            <div className="small phone">{data.phone}</div>
            <div className="small fax">{data.fax}</div>
        </div>
        
    }}</Datagrid>
}

createRoot(document.getElementById("app")).render(<App />);
