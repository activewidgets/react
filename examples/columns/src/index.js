import React from "react";
import ReactDOM from "react-dom";
import { Datagrid } from "@activewidgets/react";
import * as data from "@activewidgets/examples/northwind";

const columns = [
  {header: 'Code', field: 'CustomerID', width: 80, style: 'background:#def', fixed: true},
  {header: 'Company Name', field: 'CompanyName', width: 160},
  {header: 'Contact', field: 'ContactName', width: 120},
  {header: 'Title', field: 'ContactTitle', width: 120},
  {header: 'Address', field: 'Address', width: 120},
  {header: 'City', field: 'City'},
  {header: 'Zip', field: 'PostalCode', align: 'right'},
  {header: 'Phone', field: 'Phone'},
  {header: 'Fax', field: 'Fax'},
  {header: 'Country', field: 'Country'}
];

const App = () => (
    <Datagrid columns={columns} rows={data.customers} />
);

ReactDOM.render(<App />, document.getElementById("app"));
