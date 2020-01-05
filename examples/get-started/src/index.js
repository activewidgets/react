import React from "react";
import ReactDOM from "react-dom";
import { Datagrid } from "@activewidgets/react";
import { columns, rows } from "./data.js"
import "./styles.css";

function App() {
  return (
      <Datagrid columns={columns} rows={rows} />
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
