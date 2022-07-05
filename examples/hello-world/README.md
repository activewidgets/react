
[Open fullscreen](https://react.activewidgets.com/hello-world/) | [Source on github](https://github.com/activewidgets/react/tree/master/examples/hello-world) | [Edit on stackblitz](https://stackblitz.com/github/activewidgets/react/tree/master/examples/hello-world?file=src/index.js)

This is a small example to get started with ActiveWidgets datagrid.

First, import the component classes:

```js
import { Datagrid } from '@activewidgets/react';
```

Then initialize or load the data array:

```js
let rows = [
    { message: 'Hello, World!' }
];
```

Finally, create the component and assign the data:

```js
function App(){
    return <Datagrid rows={rows} />
}
```

Thats all! 

Read more:

 - [React Datagrid - Get started](https://activewidgets.com/guide/env/react/)