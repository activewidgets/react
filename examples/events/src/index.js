/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import ReactDOM from "react-dom";
import { Datagrid } from "@activewidgets/react";
import { columns, rows } from "@activewidgets/examples/data";

function onMouse({row, column}){
    alert(`row ${row.key} clicked!`);
}

function App(){
    return <Datagrid columns={columns} rows={rows} onMouse={onMouse} />
}

ReactDOM.render(<App />, document.getElementById("app"));
