/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import { createRoot } from "react-dom/client";
import { Datagrid } from "@activewidgets/react";
import './styles.css';


const rows = [
    { message: 'Hello, World!' }
];

function App(){
    return <Datagrid rows={rows} />
}

createRoot(document.getElementById("app")).render(<App />);
