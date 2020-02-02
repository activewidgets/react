/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

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
