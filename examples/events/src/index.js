import React from "react";
import ReactDOM from "react-dom";
import { Datagrid } from "@activewidgets/react";
import { columns, rows } from "@activewidgets/examples/data";

function onMouse({row}){
    alert(`row ${row.key} clicked!`);
}

const App = () => (
    <Datagrid columns={columns} rows={rows} onMouse={onMouse} />
);

ReactDOM.render(<App />, document.getElementById("app"));
