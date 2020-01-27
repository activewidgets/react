
var Datagrid = ActiveWidgets.React.Datagrid;

var rows = [
    { framework: 'React', source: 'CDN', landuage: 'ES5'}
];

var App = React.createElement(Datagrid, {rows: rows});

ReactDOM.render(App, document.getElementById("app"));
