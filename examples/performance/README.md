
[Open fullscreen](https://react.activewidgets.com/performance/) | [Source on github](https://github.com/activewidgets/react/tree/master/examples/performance) | [Edit on stackblitz](https://stackblitz.com/github/activewidgets/react/tree/master/examples/performance?file=src/index.js)

This example shows virtualized scrolling + lazy loading performance (load as you scroll).

```js
import { Datagrid } from "@activewidgets/react";
import { lazy } from '@activewidgets/options';

// ...

let options = [
    lazy()
];

function App(){
    return <Datagrid columns={columns} rows={rows} options={options}/>
}
```


Read more:

- [React Datagrid - Get started](https://activewidgets.com/guide/env/react/#data-properties)
- [API - columns](https://activewidgets.com/api/datagrid/columns/)
- [API - rows](https://activewidgets.com/api/datagrid/rows/)