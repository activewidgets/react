import React from "react";
import ReactDOM from "react-dom";
import { Datagrid } from "@activewidgets/react";

const rows = [
    { message: 'Hello, World!' }
];

const App = () => (
    <Datagrid rows={rows} />
);

ReactDOM.render(<App />, document.getElementById("app"));
