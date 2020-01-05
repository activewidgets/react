[![ActiveWidgets](http://www.activewidgets.com/include/logo/aw-logo-40.png?activewidgets/react)](http://www.activewidgets.com/)

## Get Started

A minimal example showing ActiveWidgets datagrid for React

```js
import React from "react";
import ReactDOM from "react-dom";
import {Datagrid} from "@activewidgets/react";
import {columns, rows} from "./data.js"
import "./styles.css";

function App() {
  return (
      <Datagrid columns={columns} rows={rows} />
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

[![Edit react-get-started](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/activewidgets/react/tree/master/examples/get-started)
