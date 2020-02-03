/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var Datagrid = ActiveWidgets.React.Datagrid;

var rows = [
    { framework: 'React', source: 'CDN', language: 'ES5' }
];

var App = React.createElement(Datagrid, { rows: rows });

ReactDOM.render(App, document.getElementById("app"));
