/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import { createRoot } from "react-dom/client";
import { Datagrid } from "@activewidgets/react";
import { lazy } from '@activewidgets/options';
import './styles.css';


function soda(url){

    function request(url){
        return fetch(url).then(res => res.json());
    }

    function getRows({offset = 0, limit = 100}){
        return request(url + '?$limit=' + limit + '&$offset=' + offset);
    }

    function getCount(){
        return request(url + '?$select=count(*)').then(data => Number(data[0].count));
    }

    return {getRows, getCount};
}


let rows = soda('https://data.cityofchicago.org/resource/xzkq-xp2w.json');

let columns = [
    {header: 'Name', field: 'name', width: 200, position: 'left'},
    {header: 'Department', field: 'department', width: 150},
    {header: 'Job titles', field: 'job_titles', width: 200},
    {header: 'Full or part time', field: 'full_or_part_time', width: 50, style: {textAlign: 'center'}},
    {header: 'Salary or hourly', field: 'salary_or_hourly', style: {textAlign: 'center'}},
    {header: 'Hourly rate', field: 'hourly_rate', style: {textAlign: 'right'}},
    {header: 'Typical hours', field: 'typical_hours', style: {textAlign: 'right'}},
    {header: 'Annual salary', field: 'annual_salary', type: 'money', style: {textAlign: 'right'}}
];

let options = [
    lazy()
];


function App(){
    return <Datagrid columns={columns} rows={rows} options={options}/>
}


createRoot(document.getElementById("app")).render(<App />);
