/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import ReactDOM from "react-dom";
import { Datagrid } from "@activewidgets/react";
import { columns, rows } from "@activewidgets/examples/data";
import './styles.css';


let gridAPI;

function onInit(api){
    gridAPI = api;
}


function onClick(event){
    let cell = gridAPI.cellFromElement(event.target);
    if (cell && cell.section === 'main') {
        alert(`row ${cell.row.index + 1} clicked!`);
    }
}


function App(){
    return <Datagrid columns={columns} rows={rows} onInit={onInit} onClick={onClick} />
}

ReactDOM.render(<App />, document.getElementById("app"));
